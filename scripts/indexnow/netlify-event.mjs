import { getText, snapshot, run } from './core.mjs';
import { withStore } from './netlify-store.mjs';
import { host } from './site.mjs';

export async function handleDeploy(payload, { env = process.env, fetcher = fetch, storeFactory, wait = ms => new Promise(r => setTimeout(r, ms)) } = {}) {
  // The platform signature protects this event endpoint. Additional payload scope checks fail closed.
  if (payload.context !== 'production' || payload.state !== 'ready' || !payload.published_at || payload.site_id !== 'f9bfacde-e273-4e83-bb68-4364c5df9f51' || new URL(payload.ssl_url).hostname !== host || !/^[a-f0-9]{40}$/.test(payload.commit_ref || '')) return { skipped: 'not a verified production publication' };
  if (env.INDEXNOW_ENABLED !== 'true') return { skipped: 'IndexNow disabled' };
  const mode = env.INDEXNOW_MODE || 'dry-run';
  if (!['dry-run', 'baseline', 'single-url', 'submit'].includes(mode)) throw new Error('Invalid operation');
  if (['submit', 'single-url'].includes(mode) && (!/^[a-zA-Z0-9-]{8,128}$/.test(env.INDEXNOW_PUBLIC_KEY || '') || /placeholder|example|your.?key|test.?key/i.test(env.INDEXNOW_PUBLIC_KEY || ''))) throw new Error('Missing or invalid public verification key');
  await wait(60000);
  const marker = JSON.parse((await getText(`https://${host}/.well-known/indexnow-release.json`, fetcher)).text);
  if (marker.host !== host || marker.release !== payload.commit_ref) return { skipped: 'superseded production publication' };
  return withStore(storeFactory(), host, payload.commit_ref, async ({ state, persist }) => {
    if (!state && mode !== 'baseline') throw new Error('Approved baseline missing');
    const current = await snapshot(host, fetcher);
    const checked = JSON.parse((await getText(`https://${host}/.well-known/indexnow-release.json`, fetcher)).text);
    if (checked.host !== host || checked.release !== payload.commit_ref) return { skipped: 'release changed during snapshot' };
    return run({ host, release: payload.commit_ref, state, current, mode, key: env.INDEXNOW_PUBLIC_KEY, testUrl: env.INDEXNOW_TEST_URL, fetcher, persist });
  });
}
