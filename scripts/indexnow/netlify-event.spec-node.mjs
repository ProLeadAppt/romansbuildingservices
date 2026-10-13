import test from 'node:test';
import assert from 'node:assert/strict';
import handler from './event-wrapper.mjs';
import { handleDeploy } from './netlify-event.mjs';
import { host } from './site.mjs';
const forbidden=()=>{throw new Error('External operation forbidden');};
const noOperations={fetcher:forbidden,storeFactory:forbidden,wait:forbidden};
const payload={context:'production',state:'ready',published_at:'2026-10-07T00:00:00Z',site_id:'f9bfacde-e273-4e83-bb68-4364c5df9f51',ssl_url:`https://${host}`,commit_ref:'a'.repeat(40)};
test('production-shaped publication cannot access any runtime operation in any externally enabled mode',async()=>{
 for(const INDEXNOW_MODE of ['baseline','dry-run','single-url','submit'])assert.match((await handleDeploy(payload,{...noOperations,env:{INDEXNOW_ENABLED:'true',INDEXNOW_MODE}})).skipped,/Publication locked/);
});
test('preview or forged event is inert regardless of external configuration',async()=>{
 for(const patch of [{context:'deploy-preview'},{site_id:'other'},{published_at:null},{ssl_url:'https://other.example'},{commit_ref:null}])assert.match((await handleDeploy({...payload,...patch},{...noOperations,env:{INDEXNOW_ENABLED:'true',INDEXNOW_MODE:'baseline'}})).skipped,/Publication locked/);
});
test('actual function wrapper returns before body parsing or store binding',async()=>{await handler({json:forbidden});});
