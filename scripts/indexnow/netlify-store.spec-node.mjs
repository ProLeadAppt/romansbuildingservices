import test from 'node:test';
import assert from 'node:assert/strict';
import { withStore } from './netlify-store.mjs';
import { host } from './site.mjs';
const mockStore = () => {
  const values = new Map(); let sequence = 0;
  return { values,
    async getWithMetadata(key) { return values.has(key) ? structuredClone(values.get(key)) : null; },
    async setJSON(key, data, options={}) {
      const before=values.get(key);
      if ((options.onlyIfNew && before) || (options.onlyIfMatch && before?.etag!==options.onlyIfMatch)) return {modified:false};
      const etag=String(++sequence);values.set(key,{data:structuredClone(data),etag});return {modified:true,etag};
    }
  };
};
test('strong conditional lock rejects concurrent writer and permits serial persistent restart',async()=>{
  const store=mockStore();let unlock;
  const holding=withStore(store,host,'a'.repeat(40),async({persist})=>{await persist({version:1,host,release:'a'.repeat(40),pages:{},receipts:[]});await new Promise(resolve=>{unlock=resolve;});});
  while(!unlock)await new Promise(resolve=>setImmediate(resolve));
  await assert.rejects(withStore(store,host,'b'.repeat(40),async()=>{}),/locked/);
  unlock();await holding;
  await withStore(store,host,'b'.repeat(40),async({state,persist})=>{assert.equal(state.host,host);state.release='b'.repeat(40);await persist(state);});
  assert.equal(store.values.get('state').data.release,'b'.repeat(40));assert.equal(store.values.get('lock').data.active,false);
});
test('failed receipt task releases lock but retains pending state',async()=>{
  const store=mockStore();await assert.rejects(withStore(store,host,'a'.repeat(40),async({persist})=>{await persist({version:1,host,release:'a'.repeat(40),pages:{},receipts:[],pending:{id:'a'.repeat(64)}});throw Error('ambiguous receipt');}));
  assert.ok(store.values.get('state').data.pending);assert.equal(store.values.get('lock').data.active,false);
});
