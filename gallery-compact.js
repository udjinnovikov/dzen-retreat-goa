(()=>{
  const setup=()=>{
    const section=[...document.querySelectorAll('section')].find(s=>s.textContent.includes('Почувствуйте атмосферу до поездки'));
    if(!section)return;
    const grid=section.querySelector('button')?.parentElement;
    if(!grid)return;
    const items=[...grid.querySelectorAll('button')];
    if(items.length<=8)return;
    items.forEach((item,index)=>{if(index>=8)item.hidden=true});
    let more=section.querySelector('[data-gallery-more]');
    if(!more){
      more=document.createElement('button');
      more.type='button';
      more.dataset.galleryMore='1';
      more.className='gallery-more-button';
      more.innerHTML='<span>Посмотреть всю галерею</span><b aria-hidden="true">↗</b>';
      grid.insertAdjacentElement('afterend',more);
      more.addEventListener('click',()=>{
        const open=more.dataset.open==='1';
        items.forEach((item,index)=>{if(index>=8)item.hidden=open});
        more.dataset.open=open?'0':'1';
        more.querySelector('span').textContent=open?'Посмотреть всю галерею':'Свернуть галерею';
      });
    }
  };
  const style=()=>{
    if(document.getElementById('gallery-more-style'))return;
    const s=document.createElement('style');s.id='gallery-more-style';s.textContent='.gallery-more-button{display:flex;align-items:center;justify-content:center;gap:.8rem;margin:1.8rem auto 0;padding:.95rem 1.45rem;border:1px solid currentColor;border-radius:999px;background:transparent;color:inherit;font:500 .72rem/1 "DM Mono",monospace;letter-spacing:.04em;cursor:pointer;transition:background .2s,color .2s,transform .2s}.gallery-more-button:hover{background:#2b2926;color:#f7f2ec;transform:translateY(-2px)}.gallery-more-button b{font-size:1rem;font-weight:400}';document.head.appendChild(s);
  };
  const run=()=>{style();setup()};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
  window.addEventListener('load',run);
  setTimeout(run,1200);setTimeout(run,3000);
})();
