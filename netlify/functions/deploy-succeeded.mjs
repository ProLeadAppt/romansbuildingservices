import { getStore } from '@netlify/blobs';
import { handleDeploy } from '../../scripts/indexnow/netlify-event.mjs';
export const config = { background: true };
export default async function handler(request) {
  const { payload } = await request.json();
  try {
    const result = await handleDeploy(payload, { storeFactory: () => getStore({ name: 'indexnow-production-state', consistency: 'strong' }) });
    console.log(JSON.stringify(result));
  } catch { console.error('IndexNow stopped; inspect durable receipt/pending state before retry'); }
}
