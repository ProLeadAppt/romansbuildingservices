import test from 'node:test';
import assert from 'node:assert/strict';
import { handleDeploy } from './netlify-event.mjs';
import { host } from './site.mjs';
const payload={context:'production',state:'ready',published_at:'2026-10-07T00:00:00Z',site_id:'f9bfacde-e273-4e83-bb68-4364c5df9f51',ssl_url:`https://${host}`,commit_ref:'a'.repeat(40)};
const noRequests={fetcher:()=>{throw Error('No request permitted');},storeFactory:()=>{throw Error('No store permitted');},wait:()=>{throw Error('No wait permitted');}};
test('disabled, preview, unpublished, wrong site/host and missing SHA produce no requests',async()=>{
  assert.match((await handleDeploy(payload,{...noRequests,env:{}})).skipped,/disabled/);
  for(const patch of [{context:'deploy-preview'},{state:'error'},{published_at:null},{site_id:'other'},{ssl_url:'https://other.example'},{commit_ref:null}])assert.ok((await handleDeploy({...payload,...patch},{...noRequests,env:{INDEXNOW_ENABLED:'true'}})).skipped);
});
test('enabled submission missing key fails before waiting/network/storage',async()=>{
  await assert.rejects(handleDeploy(payload,{...noRequests,env:{INDEXNOW_ENABLED:'true',INDEXNOW_MODE:'submit'}}),/Missing/);
});
test('superseded event stops before store access',async()=>{
  let waited;const result=await handleDeploy(payload,{...noRequests,env:{INDEXNOW_ENABLED:'true'},wait:ms=>{waited=ms;},fetcher:async()=>new Response(JSON.stringify({host,release:'b'.repeat(40)}))});
  assert.equal(waited,60000);assert.match(result.skipped,/superseded/);
});
