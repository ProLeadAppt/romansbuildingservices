import { validateState } from './core.mjs';
export async function withStore(store, host, release, task) {
  const lock = await store.getWithMetadata('lock', { type: 'json' });
  if (lock?.data.active) throw new Error('Writer locked; stale/crashed lease requires owner reconciliation');
  const acquired = await store.setJSON('lock', { active: true, release }, lock ? { onlyIfMatch: lock.etag } : { onlyIfNew: true });
  if (!acquired.modified) throw new Error('Another writer acquired the lock');
  try {
    let prior = await store.getWithMetadata('state', { type: 'json' });
    const state = prior ? validateState(prior.data, host) : null;
    const persist = async next => {
      const result = await store.setJSON('state', next, prior ? { onlyIfMatch: prior.etag } : { onlyIfNew: true });
      if (!result.modified) throw new Error('Accepted state changed unexpectedly; stop before further requests');
      prior = { data: structuredClone(next), etag: result.etag };
    };
    return await task({ state, persist });
  } finally {
    const released = await store.setJSON('lock', { active: false, release }, { onlyIfMatch: acquired.etag });
    if (!released.modified) throw new Error('Lock changed unexpectedly; owner reconciliation required');
  }
}
