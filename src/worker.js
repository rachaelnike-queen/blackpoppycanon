const APP_HTML = String.raw`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>The Black Poppy Flat</title>
<style>
:root{--ink:#141218;--paper:#f4f0e8;--paper2:#ebe5da;--silver:#8f8b91;--rose:#6b1f2e;--purple:#2a1740;--pink:#ff2d8e;--yellow:#f3cf39;--line:#cbc5bb;--white:#fff;--shadow:0 10px 30px rgba(20,18,24,.08)}*{box-sizing:border-box}body{margin:0;font-family:Georgia,'Times New Roman',serif;background:var(--paper);color:var(--ink)}button,input,select,textarea{font:inherit}.app{display:grid;grid-template-columns:260px 1fr;min-height:100vh}.side{position:sticky;top:0;height:100vh;background:#111014;color:#f7f3eb;padding:24px 18px;border-right:1px solid #2a2730}.brand{font-family:Arial Narrow,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;font-weight:800;font-size:22px}.sub{color:#aaa4ad;font-size:12px;margin:6px 0 28px;letter-spacing:.08em;text-transform:uppercase}.nav{display:grid;gap:8px}.nav button{border:0;background:transparent;color:#d9d3dc;text-align:left;padding:12px 13px;border-radius:10px;cursor:pointer}.nav button:hover,.nav button.active{background:#211d27;color:white}.nav button.active{box-shadow:inset 3px 0 var(--pink)}.sidefoot{position:absolute;left:18px;right:18px;bottom:18px;font-size:11px;color:#8f8a93;line-height:1.4}.main{padding:30px 34px 60px;max-width:1500px;width:100%}.top{display:flex;gap:18px;align-items:center;justify-content:space-between;margin-bottom:26px}.eyebrow{font-family:Arial Narrow,Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;font-weight:800;font-size:12px;color:var(--rose)}h1{font-size:46px;line-height:1;margin:5px 0 0;font-weight:500}h2{font-size:28px;font-weight:500;margin:0 0 14px}.search{display:flex;gap:8px}.search input{width:320px;border:1px solid var(--line);background:#fff9;padding:11px 13px;border-radius:10px}.btn{border:1px solid var(--ink);background:var(--ink);color:white;padding:10px 14px;border-radius:10px;cursor:pointer}.btn.secondary{background:transparent;color:var(--ink)}.grid{display:grid;grid-template-columns:repeat(12,1fr);gap:16px}.card{background:rgba(255,255,255,.55);border:1px solid var(--line);border-radius:16px;padding:18px;box-shadow:var(--shadow)}.metric{grid-column:span 3}.wide{grid-column:span 8}.narrow{grid-column:span 4}.full{grid-column:1/-1}.metric .num{font-size:38px;margin-top:12px}.muted{color:#6f6973;font-size:13px}.rule{height:1px;background:var(--line);margin:14px 0}.room{display:none}.room.active{display:block}.recent{display:grid;gap:10px}.item{display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;padding:12px 0;border-bottom:1px solid #d8d2c8}.item:last-child{border-bottom:0}.pill{font-family:Arial Narrow,Arial,sans-serif;font-size:10px;letter-spacing:.08em;text-transform:uppercase;border:1px solid var(--line);border-radius:999px;padding:4px 7px}.status{color:var(--rose)}.capture{display:grid;gap:10px}.capture input,.capture select,.capture textarea{width:100%;border:1px solid var(--line);background:#fff;padding:11px 12px;border-radius:10px}.capture textarea{min-height:90px;resize:vertical}.drop{border:1.5px dashed #98919d;border-radius:16px;padding:34px;text-align:center;background:#fff8}.drop.drag{border-color:var(--pink);background:#fff0f8}.assets{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;margin-top:16px}.asset{background:white;border:1px solid var(--line);border-radius:14px;overflow:hidden}.thumb{aspect-ratio:1.2;background:#ded8d0;display:grid;place-items:center;overflow:hidden}.thumb img{width:100%;height:100%;object-fit:cover}.meta{padding:10px;font-size:12px}.empty{padding:24px;color:#766f79;text-align:center}.quote{font-size:24px;line-height:1.25}.danger{color:#93254d}.tiny{font-size:11px}.resultlist{position:absolute;right:34px;top:78px;width:min(520px,calc(100vw - 40px));background:white;border:1px solid var(--line);border-radius:12px;box-shadow:0 20px 50px rgba(0,0,0,.18);display:none;z-index:5;max-height:55vh;overflow:auto;padding:8px}.resultlist.show{display:block}.result{padding:10px;border-radius:8px;cursor:pointer}.result:hover{background:#f2edf2}@media(max-width:900px){.app{grid-template-columns:1fr}.side{position:relative;height:auto}.nav{grid-template-columns:repeat(4,1fr)}.sidefoot{display:none}.main{padding:22px}.metric,.wide,.narrow{grid-column:1/-1}.top{align-items:flex-start;flex-direction:column}.search{width:100%}.search input{width:100%}.resultlist{left:22px;right:22px;top:130px;width:auto}}
</style>
</head>
<body>
<div class="app">
<aside class="side">
  <div class="brand">The Black Poppy Flat</div>
  <div class="sub">v2.0 · cloud foundation</div>
  <div class="nav" id="nav">
    <button class="active" data-room="hall">The Hall</button>
    <button data-room="study">The Study</button>
    <button data-room="atelier">The Atelier</button>
    <button data-room="cabinet">The Cabinet</button>
    <button data-room="archive">The Archive</button>
    <button data-room="parlour">The Parlour</button>
    <button data-room="workroom">The Workroom</button>
    <button data-room="library">The Library</button>
  </div>
  <div class="sidefoot">Create it once. Lose it never.<br>GitHub · D1 · R2 · Workers</div>
</aside>
<main class="main">
  <div class="top">
    <div><div class="eyebrow">Black Poppy Universe</div><h1 id="roomTitle">The Hall</h1></div>
    <div class="search"><input id="searchInput" placeholder="Search the Flat…"/><button class="btn secondary" id="searchBtn">Search</button></div>
  </div>
  <div class="resultlist" id="results"></div>

  <section class="room active" id="hall">
    <div class="grid">
      <div class="card metric"><div class="eyebrow">Objects</div><div class="num" id="mObjects">—</div><div class="muted">durable records</div></div>
      <div class="card metric"><div class="eyebrow">Assets</div><div class="num" id="mAssets">—</div><div class="muted">visual files in the Cabinet</div></div>
      <div class="card metric"><div class="eyebrow">Active</div><div class="num" id="mActive">—</div><div class="muted">work still moving</div></div>
      <div class="card metric"><div class="eyebrow">Documents</div><div class="num" id="mDocs">—</div><div class="muted">Git-backed knowledge records</div></div>
      <div class="card wide"><div class="eyebrow">Recent in the Flat</div><h2>What just moved</h2><div class="recent" id="recent"></div></div>
      <div class="card narrow"><div class="eyebrow">Quick Capture</div><h2>Put it somewhere real</h2><form class="capture" id="captureForm"><input name="title" placeholder="Title" required/><select name="type"><option value="note">Note</option><option value="idea">Idea</option><option value="project">Project</option><option value="decision">Decision</option><option value="source">Source</option></select><textarea name="notes" placeholder="What is it? Why does it matter?"></textarea><button class="btn" type="submit">Capture to D1</button><div class="tiny muted" id="captureMsg"></div></form></div>
      <div class="card full"><div class="eyebrow">North Star</div><div class="quote">The Flat exists to make the work easier to live with, easier to find, and harder to lose.</div></div>
    </div>
  </section>

  <section class="room" id="study"><div class="grid"><div class="card wide"><div class="eyebrow">The Study</div><h2>Durable knowledge</h2><p>Markdown, research, foundations, philosophy, systems, people, teams and world documentation live here.</p><div class="rule"></div><div id="studyDocs" class="recent"></div></div><div class="card narrow"><div class="eyebrow">Storage rule</div><p><b>GitHub is authoritative</b> for durable Markdown. D1 indexes it for the app.</p></div></div></section>
  <section class="room" id="atelier"><div class="grid"><div class="card full"><div class="eyebrow">The Atelier</div><h2>Active creative work</h2><p>Drafts, worktables, experiments and current making. This room will become the hands-on workspace.</p></div></div></section>
  <section class="room" id="cabinet"><div class="grid"><div class="card full"><div class="eyebrow">The Cabinet</div><h2>Visuals that do not disappear</h2><div class="drop" id="drop"><b>Drop images here</b><br><span class="muted">PNG · JPG · SVG · WEBP</span><br><br><input type="file" id="files" multiple accept="image/png,image/jpeg,image/svg+xml,image/webp"/></div><div class="tiny muted" id="uploadMsg"></div><div class="assets" id="assets"></div></div></div></section>
  <section class="room" id="archive"><div class="grid"><div class="card full"><div class="eyebrow">The Archive</div><h2>Nothing useful gets erased</h2><p>Superseded work, archaeology and recovered source material live here. Security exceptions can still be hard-deleted.</p></div></div></section>
  <section class="room" id="parlour"><div class="grid"><div class="card full"><div class="eyebrow">The Parlour</div><h2>Story, conversation, community</h2><p>A future home for narrative work, conversations and community-facing threads.</p></div></div></section>
  <section class="room" id="workroom"><div class="grid"><div class="card full"><div class="eyebrow">The Workroom</div><h2>Products, campaigns, production</h2><p>This becomes the practical finishing room: scoped work, review, publish, verify, archive.</p></div></div></section>
  <section class="room" id="library"><div class="grid"><div class="card full"><div class="eyebrow">The Library</div><h2>Curated collections</h2><p>Knowledge collections across the Black Poppy worlds without flattening their identities.</p></div></div></section>
</main>
</div>
<script>
const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
const esc=s=>(s??'').toString().replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
async function j(url,opt){const r=await fetch(url,opt);if(!r.ok)throw new Error(await r.text());return r.json()}
async function refresh(){try{const d=await j('/api/summary');$('#mObjects').textContent=d.counts.objects;$('#mAssets').textContent=d.counts.assets;$('#mActive').textContent=d.counts.active;$('#mDocs').textContent=d.counts.documents;$('#recent').innerHTML=d.recent.length?d.recent.map(x=>`<div class="item"><span class="pill">${esc(x.type)}</span><div><b>${esc(x.title)}</b><div class="muted">${esc(x.notes||'')}</div></div><span class="tiny status">${esc(x.status)}</span></div>`).join(''):'<div class="empty">The Flat is waiting for its first entries.</div>';$('#studyDocs').innerHTML=d.documents.length?d.documents.map(x=>`<div class="item"><span class="pill">MD</span><div><b>${esc(x.title)}</b><div class="muted">${esc(x.git_path)}</div></div></div>`).join(''):'<div class="empty">No indexed Markdown documents yet.</div>';await loadAssets()}catch(e){console.error(e)}}
async function loadAssets(){const d=await j('/api/assets');$('#assets').innerHTML=d.items.length?d.items.map(a=>`<div class="asset"><div class="thumb"><img src="/api/assets/${encodeURIComponent(a.id)}/file" alt="" loading="lazy"></div><div class="meta"><b>${esc(a.title)}</b><br><span class="muted">${esc(a.original_filename||'')}</span></div></div>`).join(''):'<div class="empty">No visual assets yet. Drop the old PNGs here when ready.</div>'}
$('#nav').addEventListener('click',e=>{const b=e.target.closest('button[data-room]');if(!b)return;$$('.nav button').forEach(x=>x.classList.remove('active'));b.classList.add('active');$$('.room').forEach(x=>x.classList.remove('active'));$('#'+b.dataset.room).classList.add('active');$('#roomTitle').textContent=b.textContent;if(b.dataset.room==='cabinet')loadAssets()});
$('#captureForm').addEventListener('submit',async e=>{e.preventDefault();const fd=new FormData(e.target);$('#captureMsg').textContent='Saving…';try{await j('/api/objects',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(Object.fromEntries(fd))});e.target.reset();$('#captureMsg').textContent='Captured. It now has a home.';refresh()}catch(err){$('#captureMsg').textContent='Could not save: '+err.message}});
async function upload(files){if(!files.length)return;$('#uploadMsg').textContent=`Uploading ${files.length} file(s)…`;for(const file of files){const fd=new FormData();fd.append('file',file);fd.append('title',file.name.replace(/\.[^.]+$/,''));try{await j('/api/assets',{method:'POST',body:fd})}catch(e){$('#uploadMsg').textContent='Upload error: '+e.message;return}}$('#uploadMsg').textContent='Uploaded to R2 and indexed in D1.';loadAssets();refresh()}
$('#files').addEventListener('change',e=>upload([...e.target.files]));const drop=$('#drop');['dragenter','dragover'].forEach(t=>drop.addEventListener(t,e=>{e.preventDefault();drop.classList.add('drag')}));['dragleave','drop'].forEach(t=>drop.addEventListener(t,e=>{e.preventDefault();drop.classList.remove('drag')}));drop.addEventListener('drop',e=>upload([...e.dataTransfer.files]));
async function search(){const q=$('#searchInput').value.trim();if(!q){$('#results').classList.remove('show');return}const d=await j('/api/search?q='+encodeURIComponent(q));$('#results').innerHTML=d.items.length?d.items.map(x=>`<div class="result"><span class="pill">${esc(x.type)}</span> <b>${esc(x.title)}</b><div class="muted">${esc(x.notes||'')}</div></div>`).join(''):'<div class="empty">No matches.</div>';$('#results').classList.add('show')}
$('#searchBtn').addEventListener('click',search);$('#searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')search()});document.addEventListener('click',e=>{if(!e.target.closest('.search')&&!e.target.closest('#results'))$('#results').classList.remove('show')});refresh();
</script>
</body></html>`;

const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
const safeName=s=>(s||'file').replace(/[^a-zA-Z0-9._-]+/g,'-').replace(/-+/g,'-').slice(0,120);
const id=(prefix)=>`${prefix}-${crypto.randomUUID()}`;

export default {
  async fetch(request, env) {
    const url=new URL(request.url);
    try {
      if(url.pathname==='/health') return json({ok:true,app:'The Black Poppy Flat',version:'2.0.0-alpha.1'});
      if(url.pathname==='/api/summary' && request.method==='GET'){
        const [objects,assets,active,documents,recent,docs]=await Promise.all([
          env.DB.prepare('SELECT COUNT(*) c FROM objects').first(),
          env.DB.prepare('SELECT COUNT(*) c FROM assets').first(),
          env.DB.prepare("SELECT COUNT(*) c FROM objects WHERE status IN ('active','draft','captured','idea')").first(),
          env.DB.prepare('SELECT COUNT(*) c FROM documents').first(),
          env.DB.prepare('SELECT id,type,title,status,notes,updated_at FROM objects ORDER BY updated_at DESC LIMIT 10').all(),
          env.DB.prepare('SELECT o.title,d.git_path,d.git_ref FROM documents d JOIN objects o ON o.id=d.object_id ORDER BY d.updated_at DESC LIMIT 20').all()
        ]);
        return json({counts:{objects:objects.c,assets:assets.c,active:active.c,documents:documents.c},recent:recent.results,documents:docs.results});
      }
      if(url.pathname==='/api/objects' && request.method==='POST'){
        const body=await request.json();
        const oid=id('OBJ');
        const type=(body.type||'note').slice(0,40);
        const title=(body.title||'Untitled').slice(0,240);
        const notes=(body.notes||'').slice(0,5000);
        const status=type==='project'?'active':'captured';
        await env.DB.prepare('INSERT INTO objects(id,type,title,status,notes) VALUES(?,?,?,?,?)').bind(oid,type,title,status,notes).run();
        await env.DB.prepare('INSERT INTO activity_log(object_id,action,detail) VALUES(?,?,?)').bind(oid,'created','Quick capture').run();
        return json({ok:true,id:oid},201);
      }
      if(url.pathname==='/api/search' && request.method==='GET'){
        const q=(url.searchParams.get('q')||'').trim();
        if(!q)return json({items:[]});
        const like=`%${q}%`;
        const r=await env.DB.prepare('SELECT id,type,title,status,notes FROM objects WHERE title LIKE ? OR notes LIKE ? ORDER BY updated_at DESC LIMIT 50').bind(like,like).all();
        return json({items:r.results});
      }
      if(url.pathname==='/api/assets' && request.method==='GET'){
        const r=await env.DB.prepare('SELECT o.id,o.title,o.status,a.original_filename,a.mime_type,a.size_bytes FROM assets a JOIN objects o ON o.id=a.object_id ORDER BY a.created_at DESC LIMIT 100').all();
        return json({items:r.results});
      }
      if(url.pathname==='/api/assets' && request.method==='POST'){
        const form=await request.formData();
        const file=form.get('file');
        if(!(file instanceof File))return json({error:'file required'},400);
        const oid=id('ASSET');
        const aid=id('FILE');
        const filename=safeName(file.name);
        const key=`assets/${oid}/${filename}`;
        await env.ASSETS.put(key,file.stream(),{httpMetadata:{contentType:file.type||'application/octet-stream'},customMetadata:{objectId:oid,originalFilename:file.name}});
        const title=((form.get('title')||file.name)||'Untitled asset').toString().slice(0,240);
        await env.DB.prepare("INSERT INTO objects(id,type,title,status,notes) VALUES(?,?,?,?,?)").bind(oid,'asset',title,'inbox','Uploaded to The Cabinet').run();
        await env.DB.prepare('INSERT INTO assets(id,object_id,r2_key,original_filename,mime_type,size_bytes) VALUES(?,?,?,?,?,?)').bind(aid,oid,key,file.name,file.type||'',file.size).run();
        await env.DB.prepare('INSERT INTO activity_log(object_id,action,detail) VALUES(?,?,?)').bind(oid,'asset_uploaded',file.name).run();
        return json({ok:true,id:oid,key},201);
      }
      const m=url.pathname.match(/^\/api\/assets\/([^/]+)\/file$/);
      if(m && request.method==='GET'){
        const row=await env.DB.prepare('SELECT a.r2_key,a.mime_type FROM assets a WHERE a.object_id=?').bind(decodeURIComponent(m[1])).first();
        if(!row)return new Response('Not found',{status:404});
        const obj=await env.ASSETS.get(row.r2_key);
        if(!obj)return new Response('Not found',{status:404});
        const h=new Headers();obj.writeHttpMetadata(h);h.set('etag',obj.httpEtag);h.set('cache-control','private, max-age=3600');
        return new Response(obj.body,{headers:h});
      }
      if(url.pathname.startsWith('/api/')) return json({error:'Not found'},404);
      return new Response(APP_HTML,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store'}});
    } catch(err){
      return json({error:'Flat runtime error',detail:String(err?.message||err)},500);
    }
  }
};
