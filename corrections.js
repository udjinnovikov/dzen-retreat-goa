document.querySelectorAll('.eyebrow').forEach((el) => {
  el.textContent = el.textContent.replace(/^\d+\s*\/\s*/, '');
});

const days = [
  ['Р”РµРЅСЊ 1 В· РџСЂРёРµР·Рґ Рё РїРµСЂРІРѕРµ РґС‹С…Р°РЅРёРµ Р“РѕР°', 'Р’СЃС‚СЂРµС‡Р°РµРј РІР°СЃ РІ Р°СЌСЂРѕРїРѕСЂС‚Сѓ Рё РїРѕРјРѕРіР°РµРј СЃРїРѕРєРѕР№РЅРѕ РґРѕР±СЂР°С‚СЊСЃСЏ РґРѕ РѕС‚РµР»СЏ, С‡С‚РѕР±С‹ РїРѕСЃР»Рµ РґРѕР»РіРѕР№ РґРѕСЂРѕРіРё РЅРµ РґСѓРјР°С‚СЊ Рѕ Р»РѕРіРёСЃС‚РёРєРµ. Р—Р°СЃРµР»СЏРµРјСЃСЏ, Р·РЅР°РєРѕРјРёРјСЃСЏ СЃ РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРѕРј, Р±Р°СЃСЃРµР№РЅРѕРј Рё Р±Р»РёР¶Р°Р№С€РёРј РїР»СЏР¶РµРј, РѕСЃС‚Р°РІР»СЏРµРј РІСЂРµРјСЏ РЅР° РґСѓС€, РѕС‚РґС‹С… Рё РїРµСЂРІРѕРµ РѕС‰СѓС‰РµРЅРёРµ Р“РѕР°. Р’РµС‡РµСЂРѕРј вЂ” С‚С‘РїР»РѕРµ Р·РЅР°РєРѕРјСЃС‚РІРѕ СЃ РіСЂСѓРїРїРѕР№, РјСЏРіРєР°СЏ РїСЂР°РєС‚РёРєР°, РѕР±С‰РёР№ СѓР¶РёРЅ Рё РїРµСЂРІС‹Р№ Р·Р°РєР°С‚ Сѓ РѕРєРµР°РЅР°.'],
  ['Р”РµРЅСЊ 2 В· Р’С…РѕРґРёРј РІ СЂРёС‚Рј', 'РЈС‚СЂРµРЅРЅСЏСЏ Р№РѕРіР° Рё РґС‹С…Р°РЅРёРµ, РЅРµСЃРїРµС€РЅС‹Р№ Р·Р°РІС‚СЂР°Рє, РјРѕСЂРµ Рё РѕС‚РґС‹С…. Р’РµС‡РµСЂРѕРј вЂ” РєСЂСѓРі РЅР°РјРµСЂРµРЅРёР№: СЃРѕР±РёСЂР°РµРј С‚Рѕ, СЃ С‡РµРј РєР°Р¶РґС‹Р№ РїСЂРёРµС…Р°Р» РІ СЌС‚Рѕ РїСѓС‚РµС€РµСЃС‚РІРёРµ.'],
  ['Р”РµРЅСЊ 3 В· РўРµР»Рѕ, РѕРєРµР°РЅ, СЃРІРѕР±РѕРґР°', 'РџСЂР°РєС‚РёРєР° РґР»СЏ СЃРёР»С‹ Рё РіРёР±РєРѕСЃС‚Рё, РІСЂРµРјСЏ РЅР° РїР»СЏР¶Рµ РђС€РІРµРјР° Рё РІРµС‡РµСЂРЅСЏСЏ РјРµРґРёС‚Р°С†РёСЏ. Р”РµРЅСЊ Р±РµР· РіРѕРЅРєРё, РІ РєРѕС‚РѕСЂРѕРј РјРѕР¶РЅРѕ РІС‹Р±СЂР°С‚СЊ СЃРІРѕР№ СЃРѕР±СЃС‚РІРµРЅРЅС‹Р№ С‚РµРјРї.'],
  ['Р”РµРЅСЊ 4 В· Р“Р»СѓР±РёРЅР° Рё РІРѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёРµ', 'РњСЏРіРєР°СЏ С‚РµР»РµСЃРЅР°СЏ РїСЂР°РєС‚РёРєР°, СЃР°СѓРЅРґ-С…РёР»РёРЅРі РёР»Рё РіР»СѓР±РѕРєРѕРµ СЂР°СЃСЃР»Р°Р±Р»РµРЅРёРµ. РџРѕСЃР»Рµ РѕР±РµРґР° вЂ” СЃРІРѕР±РѕРґРЅРѕРµ РІСЂРµРјСЏ, РјР°СЃСЃР°Р¶ РёР»Рё РїСЂРѕРіСѓР»РєР° РІРґРѕР»СЊ РѕРєРµР°РЅР°.'],
  ['Р”РµРЅСЊ 5 В· Р–РёРІР°СЏ Р“РѕР°', 'Р’С‹РµР·Р¶Р°РµРј РЅР° СЌРєСЃРєСѓСЂСЃРёСЋ: РїСЂРёСЂРѕРґР°, РјРµСЃС‚РЅС‹Рµ РјРµСЃС‚Р° Рё РґСЂСѓРіР°СЏ СЃС‚РѕСЂРѕРЅР° С€С‚Р°С‚Р°. Р’РѕР·РІСЂР°С‰Р°РµРјСЃСЏ Рє СѓР¶РёРЅСѓ, РґРµР»РёРјСЃСЏ РІРїРµС‡Р°С‚Р»РµРЅРёСЏРјРё Рё РѕС‚РґС‹С…Р°РµРј.'],
  ['Р”РµРЅСЊ 6 В· РџСЂРѕСЃС‚СЂР°РЅСЃС‚Р
// UTF8 mojibake repair without browser decoder
repairRussianCopy=function(){if(document.documentElement.lang==='en')return;const m={0x20AC:128,0x201A:130,0x192:131,0x201E:132,0x2026:133,0x2020:134,0x2021:135,0x2C6:136,0x2030:137,0x160:138,0x2039:139,0x152:140,0x17D:142,0x2018:145,0x2019:146,0x201C:147,0x201D:148,0x2022:149,0x2013:150,0x2014:151,0x2DC:152,0x2122:153,0x161:154,0x203A:155,0x153:156,0x17E:158,0x178:159};const b=c=>{const x=c.charCodeAt(0);if(x>=0x410&&x<=0x44f)return x-0x350;if(x===0x401)return 168;if(x===0x451)return 184;if(x>=0x402&&x<=0x40f)return x-0x380;if(x>=0x452&&x<=0x45f)return x-0x3c0;return m[x]??(x<=255?x:null)};const u=a=>{let o='';for(let i=0;i<a.length;i++){let x=a[i];if(x<128)o+=String.fromCharCode(x);else if((x&224)===192)o+=String.fromCodePoint(((x&31)<<6)|(a[++i]&63));else if((x&240)===224)o+=String.fromCodePoint(((x&15)<<12)|((a[++i]&63)<<6)|(a[++i]&63));else if((x&248)===240)o+=String.fromCodePoint(((x&7)<<18)|((a[++i]&63)<<12)|((a[++i]&63)<<6)|(a[++i]&63));else return null}return o};const d=s=>{if(!/[РС](?![А-Яа-яЁё])/.test(s))return s;let a=[];for(const c of s){let x=b(c);if(x==null)return s;a.push(x)}return u(a)||s};const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n=[];while(w.nextNode())n.push(w.currentNode);n.forEach(x=>x.nodeValue=d(x.nodeValue));document.querySelectorAll('[aria-label],[alt]').forEach(x=>{if(x.hasAttribute('aria-label'))x.setAttribute('aria-label',d(x.getAttribute('aria-label')));if(x.hasAttribute('alt'))x.setAttribute('alt',d(x.getAttribute('alt')))})};repairRussianCopy();
ІРѕ РґР»СЏ СЃРµР±СЏ', 'РЈС‚СЂРµРЅРЅСЏСЏ РїСЂР°РєС‚РёРєР°, РїРѕР»РµР·РЅС‹Р№ Р·Р°РІС‚СЂР°Рє Рё СЃРІРѕР±РѕРґРЅС‹Р№ РґРµРЅСЊ. РњРѕР¶РЅРѕ РІС‹Р±СЂР°С‚СЊ РѕРєРµР°РЅ, Р±Р°СЃСЃРµР№РЅ, С‡С‚РµРЅРёРµ, РјР°СЃСЃР°Р¶ РёР»Рё РїСЂРѕСЃС‚Рѕ РЅРёС‡РµРіРѕ РЅРµ РїР»Р°РЅРёСЂРѕРІР°С‚СЊ.'],
  ['Р”РµРЅСЊ 7 В· Р›С‘РіРєРѕСЃС‚СЊ РґРІРёР¶РµРЅРёСЏ', 'Р™РѕРіР° РІ РіР°РјР°РєР°С…, С‚Р°РЅС†РµРІР°Р»СЊРЅР°СЏ РїСЂР°РєС‚РёРєР° Рё РІРµС‡РµСЂ РїРѕРґ Р·РІС‘Р·РґР°РјРё. Р”РµРЅСЊ, С‡С‚РѕР±С‹ РїРѕС‡СѓРІСЃС‚РІРѕРІР°С‚СЊ С‚РµР»Рѕ Р¶РёРІС‹Рј, СЃРІРѕР±РѕРґРЅС‹Рј Рё СЃРёР»СЊРЅС‹Рј.'],
  ['Р”РµРЅСЊ 8 В· РўРёС€РёРЅР° Рё РёРЅС‚РµРіСЂР°С†РёСЏ', 'РњРµРґРёС‚Р°С†РёСЏ, РґС‹С…Р°С‚РµР»СЊРЅС‹Рµ РїСЂР°РєС‚РёРєРё, РѕРєРµР°РЅ Рё Р»РёС‡РЅРѕРµ РІСЂРµРјСЏ. Р—Р°РјРµРґР»СЏРµРјСЃСЏ, С‡С‚РѕР±С‹ РІРїРµС‡Р°С‚Р»РµРЅРёСЏ Рё РЅРѕРІС‹Рµ РѕС‰СѓС‰РµРЅРёСЏ СѓСЃРїРµР»Рё СЃС‚Р°С‚СЊ С‡Р°СЃС‚СЊСЋ РІР°СЃ.'],
  ['Р”РµРЅСЊ 9 В· Р’С‚РѕСЂР°СЏ СЌРєСЃРєСѓСЂСЃРёСЏ', 'Р•РґРµРј РІ РЅРѕРІРѕРµ РјРµСЃС‚Рѕ, Р·РЅР°РєРѕРјРёРјСЃСЏ СЃ РєСѓР»СЊС‚СѓСЂРѕР№ Рё РїСЂРёСЂРѕРґРѕР№ Р“РѕР°. Р’РµС‡РµСЂРѕРј вЂ” РѕС‚РґС‹С… РІ РѕС‚РµР»Рµ Рё С‚С‘РїР»Р°СЏ РІСЃС‚СЂРµС‡Р° СЃ РіСЂСѓРїРїРѕР№.'],
  ['Р”РµРЅСЊ 10 В· Р–РµРЅСЃРєРёРµ Рё РіР»СѓР±РѕРєРёРµ РїСЂР°РєС‚РёРєРё', 'РЈС‚СЂРѕ РЅР°С‡РёРЅР°РµС‚СЃСЏ СЃ Р№РѕРіРё. Р”РЅС‘Рј вЂ” РіР»СѓР±РѕРєР°СЏ РїСЂР°РєС‚РёРєР° РёР»Рё Р¶РµРЅСЃРєРёР№ РєСЂСѓРі, РІРµС‡РµСЂРѕРј вЂ” РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРѕ РґР»СЏ С‡РµСЃС‚РЅРѕРіРѕ СЂР°Р·РіРѕРІРѕСЂР° Рё РїРѕРґРґРµСЂР¶РєРё.'],
  ['Р”РµРЅСЊ 11 В· РЎРѕР±РёСЂР°РµРј РіР»Р°РІРЅРѕРµ', 'Р—Р°РєР»СЋС‡РёС‚РµР»СЊРЅС‹Рµ Р·Р°РЅСЏС‚РёСЏ, Р»СЋР±РёРјС‹Рµ РјРµСЃС‚Р° Сѓ РѕРєРµР°РЅР° Рё РїСЂР°Р·РґРЅРёС‡РЅС‹Р№ СѓР¶РёРЅ. РЎРјРѕС‚СЂРёРј, С‡С‚Рѕ РёР·РјРµРЅРёР»РѕСЃСЊ Р·Р° СЌС‚Рё РґРЅРё Рё С‡С‚Рѕ С…РѕС‡РµС‚СЃСЏ СѓРІРµР·С‚Рё СЃ СЃРѕР±РѕР№.'],
  ['Р”РµРЅСЊ 12 В· Р’РѕР·РІСЂР°С‰РµРЅРёРµ РґРѕРјРѕР№', 'Р—Р°РІС‚СЂР°Рє, СЃР±РѕСЂС‹ Рё С‚СЂР°РЅСЃС„РµСЂ. РЈРµР·Р¶Р°РµРј Р±РµР· СЃРїРµС€РєРё вЂ” СЃ РєРѕРЅС‚Р°РєС‚Р°РјРё Р±Р»РёР·РєРёС… РїРѕ РґСѓС…Сѓ Р»СЋРґРµР№, С„РѕС‚РѕРіСЂР°С„РёСЏРјРё Рё Р±РѕР»РµРµ С‚РёС…РёРј РІРЅСѓС‚СЂРµРЅРЅРёРј СЂРёС‚РјРѕРј.']
];

const programme = document.querySelector('.programme-list');
if (programme) {
  programme.innerHTML = days.map(([title, description], index) => `
    <details ${index === 0 ? 'open' : ''}>
      <summary><span>${title}</span><strong>${title}</strong><b>+</b></summary>
      <p>${description}</p>
    </details>`).join('');
  const navigator = document.createElement('div');
  navigator.className = 'programme-navigator';
  navigator.setAttribute('aria-label', 'Р’С‹Р±РѕСЂ РґРЅСЏ РїСЂРѕРіСЂР°РјРјС‹');
  navigator.innerHTML = days.map((_, index) => `<button type="button" aria-label="РћС‚РєСЂС‹С‚СЊ РґРµРЅСЊ ${index + 1}" class="${index === 0 ? 'is-active' : ''}">${index + 1}</button>`).join('');
  programme.before(navigator);
  const dayPanels = Array.from(programme.querySelectorAll('details'));
  const dayButtons = Array.from(navigator.querySelectorAll('button'));
  dayButtons.forEach((button, index) => button.addEventListener('click', () => {
    dayPanels.forEach((panel, panelIndex) => { panel.open = panelIndex === index; });
    dayButtons.forEach((item, itemIndex) => item.classList.toggle('is-active', itemIndex === index));
    dayPanels[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }));
  dayPanels.forEach((panel, index) => panel.addEventListener('toggle', () => {
    if (panel.open) dayButtons.forEach((item, itemIndex) => item.classList.toggle('is-active', itemIndex === index));
  }));
}

const gallery = document.querySelector('.gallery-grid');
if (gallery) {
  // Positions are the numbers shown in the private ?select-gallery=1 curation view.
  const excludedGalleryPositions = new Set([3, 12, 24, 25, 27, 35, 40, 44, 49, 50, 70, 74]);
  const photos = Array.from({ length: 75 }, (_, index) => index + 1)
    .filter((index) => index !== 33)
    .filter((_, index) => !excludedGalleryPositions.has(index + 1))
    .map((index) => String(index).padStart(3, '0'));
  gallery.innerHTML = photos.map((number, index) => `
    <button class="gallery-item ${index === 0 ? 'gallery-hero' : ''} ${index === 1 || index === 5 ? 'gallery-portrait' : ''} ${index === 2 || index === 6 ? 'gallery-landscape' : ''}" data-full="/assets/gallery-web/photo-${number}.jpg" aria-label="РћС‚РєСЂС‹С‚СЊ С„РѕС‚РѕРіСЂР°С„РёСЋ ${index + 1}">
      <img loading="lazy" src="/assets/gallery-web/photo-${number}.jpg" alt="Р¤РѕС‚РѕРіСЂР°С„РёСЏ Dzen Retreat Goa ${index + 1}">
    </button>`).join('');
}

const lightbox = document.querySelector('.lightbox');
if (gallery && lightbox) {
  const lightboxImage = lightbox.querySelector('img');
  const closeButton = lightbox.querySelector('button');
  const galleryItems = Array.from(gallery.querySelectorAll('.gallery-item'));
  const previous = document.createElement('button');
  const next = document.createElement('button');
  previous.className = 'lightbox-nav lightbox-prev';
  next.className = 'lightbox-nav lightbox-next';
  previous.type = next.type = 'button';
  previous.setAttribute('aria-label', 'РџСЂРµРґС‹РґСѓС‰Р°СЏ С„РѕС‚РѕРіСЂР°С„РёСЏ');
  next.setAttribute('aria-label', 'РЎР»РµРґСѓСЋС‰Р°СЏ С„РѕС‚РѕРіСЂР°С„РёСЏ');
  previous.textContent = 'в†ђ';
  next.textContent = 'в†’';
  lightbox.append(previous, next);
  const showPhoto = (index) => {
    const current = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[current];
    lightbox.dataset.current = String(current);
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = item.querySelector('img').alt;
    lightbox.hidden = false;
  };
  gallery.addEventListener('click', (event) => {
    const item = event.target.closest('.gallery-item');
    if (item) showPhoto(galleryItems.indexOf(item));
  });
  previous.addEventListener('click', (event) => { event.stopPropagation(); showPhoto(Number(lightbox.dataset.current || 0) - 1); });
  next.addEventListener('click', (event) => { event.stopPropagation(); showPhoto(Number(lightbox.dataset.current || 0) + 1); });
  document.addEventListener('keydown', (event) => {
    if (lightbox.hidden) return;
    if (event.key === 'ArrowLeft') showPhoto(Number(lightbox.dataset.current || 0) - 1);
    if (event.key === 'ArrowRight') showPhoto(Number(lightbox.dataset.current || 0) + 1);
    if (event.key === 'Escape') closeButton.click();
  });
}

document.querySelectorAll('.review-rail article:not(.video-review) footer img').forEach((image, index) => {
  image.src = `/assets/participants/participant-${String(index + 1).padStart(2, '0')}.png`;
});

const reviews = document.querySelector('.testimonials');
if (reviews) {
  reviews.innerHTML = `
    <div class="section-heading"><p class="eyebrow ink">РћРўР—Р«Р’Р« РЈР§РђРЎРўРќРРљРћР’</p><h2>РСЃС‚РѕСЂРёРё, РїРѕСЃР»Рµ РєРѕС‚РѕСЂС‹С…<br><em>С…РѕС‡РµС‚СЃСЏ РїРѕРµС…Р°С‚СЊ.</em></h2><p>РЎРјРѕС‚СЂРёС‚Рµ РІРёРґРµРѕ Рё С‡РёС‚Р°Р№С‚Рµ РІРїРµС‡Р°С‚Р»РµРЅРёСЏ С‚РµС…, РєС‚Рѕ СѓР¶Рµ РїСЂРѕР¶РёР» Goa Flow.</p></div>
    <div class="reviews-layout">
      <article class="review-video-card">
        <video controls playsinline preload="metadata" poster="/assets/participants/participant-01.png" data-chunks="/assets/review-01-chunks/part-00,/assets/review-01-chunks/part-01,/assets/review-01-chunks/part-02,/assets/review-01-chunks/part-03,/assets/review-01-chunks/part-04"></video>
        <div><p class="eyebrow ink">Р’РР”Р•РћРћРўР—Р«Р’</p><h3>Р–РёРІРѕРµ РІРїРµС‡Р°С‚Р»РµРЅРёРµ<br>РѕР± РѕС‚РґС‹С…Рµ Рё РїСЂР°РєС‚РёРєРµ</h3><p>РќР°СЃС‚РѕСЏС‰РёР№ СЂР°СЃСЃРєР°Р· СѓС‡Р°СЃС‚РЅРёРєР° вЂ” Р±РµР· РїРѕСЃС‚Р°РЅРѕРІРєРё Рё СЂРµРєР»Р°РјРЅС‹С… РѕР±РµС‰Р°РЅРёР№.</p></div>
      </article>
      <article class="review-card"><p>В«Р­С‚РѕС‚ СЂРµС‚СЂРёС‚ СЃС‚Р°Р» РїРµСЂРµР·Р°РіСЂСѓР·РєРѕР№ РІРѕ РІСЃРµС… СЃРјС‹СЃР»Р°С…. РђС‚РјРѕСЃС„РµСЂР° С‚РµРїР»Р° Рё РїРѕРґРґРµСЂР¶РєРё РїРѕРјРѕРіР°РµС‚ РѕС‚РїСѓСЃС‚РёС‚СЊ Р»РёС€РЅРµРµ Рё СѓСЃР»С‹С€Р°С‚СЊ СЃРµР±СЏВ».</p><footer><img src="/assets/participants/participant-01.png" alt="РђРЅРЅР°"><span><b>РђРЅРЅР°</b><small>РњРѕСЃРєРІР°</small></span></footer></article>
      <article class="review-card"><p>В«Р•РґР° РІС‹С€Рµ РІСЃСЏРєРёС… РїРѕС…РІР°Р»: СЃРІРµР¶Р°СЏ, РІРєСѓСЃРЅР°СЏ, СЂР°Р·РЅРѕРѕР±СЂР°Р·РЅР°СЏ Рё СЃ Р»СЋР±РѕРІСЊСЋ РїСЂРёРіРѕС‚РѕРІР»РµРЅРЅР°СЏ. РџРѕСЃР»Рµ РЅРµС‘ вЂ” Р»С‘РіРєРѕСЃС‚СЊ Рё СЌРЅРµСЂРіРёСЏВ».</p><footer><img src="/assets/participants/participant-02.png" alt="РРіРѕСЂСЊ"><span><b>РРіРѕСЂСЊ</b><small>РќРѕРІРѕСЃРёР±РёСЂСЃРє</small></span></footer></article>
      <article class="review-card"><p>В«РњР°Р»РµРЅСЊРєР°СЏ РіСЂСѓРїРїР° РґРµР»Р°РµС‚ СЂРµС‚СЂРёС‚ РѕСЃРѕР±РµРЅРЅС‹Рј. РџРѕСЏРІР»СЏРµС‚СЃСЏ РґРѕРІРµСЂРёРµ Рё РіР»СѓР±РёРЅР° РѕР±С‰РµРЅРёСЏ. РЇ СѓРІРµР·Р»Р° СЃ СЃРѕР±РѕР№ РЅРѕРІС‹С… РґСЂСѓР·РµР№В».</p><footer><img src="/assets/participants/participant-03.png" alt="РћР»СЊРіР°"><span><b>РћР»СЊРіР°</b><small>Р РѕСЃС‚РѕРІ-РЅР°-Р”РѕРЅСѓ</small></span></footer></article>
      <article class="review-card"><p>В«РћРєРµР°РЅ СЂСЏРґРѕРј вЂ” РѕС‚РґРµР»СЊРЅР°СЏ РјР°РіРёСЏ. РЈС‚СЂРµРЅРЅРёРµ РїСЂР°РєС‚РёРєРё РїРѕРґ С€СѓРј РІРѕР»РЅ Рё Р·Р°РєР°С‚С‹ РїРѕРјРѕРіР°СЋС‚ РїРѕ-РЅР°СЃС‚РѕСЏС‰РµРјСѓ Р·Р°РјРµРґР»РёС‚СЊСЃСЏВ».</p><footer><img src="/assets/participants/participant-04.png" alt="РСЂРёРЅР°"><span><b>РСЂРёРЅР°</b><small>Р’Р»Р°РґРёРІРѕСЃС‚РѕРє</small></span></footer></article>
    </div>`;
}

document.querySelectorAll('.review-video-card video[data-chunks]').forEach(video => { if (typeof loadChunkedVideo === 'function') loadChunkedVideo(video); });

// Local preview uses the original MP4 files so the video controls work reliably.
// The production build will receive web-optimised copies before publishing.
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  heroVideo.dataset.chunks = '/assets/hotel-hero-chunks/part-00,/assets/hotel-hero-chunks/part-01,/assets/hotel-hero-chunks/part-02,/assets/hotel-hero-chunks/part-03'; heroVideo.removeAttribute('src'); if (typeof loadChunkedVideo === 'function') loadChunkedVideo(heroVideo);
  heroVideo.src = '/assets/';
  
}

// The bilingual content is updated by the original language control.
// Remove the old decorative numeric prefixes again after each language switch.
document.querySelector('.language')?.addEventListener('click', () => {
  document.querySelectorAll('.eyebrow').forEach((el) => {
    el.textContent = el.textContent.replace(/^\d+\s*\/\s*/, '');
  });
});

const footerContacts = document.querySelector('footer p');
if (footerContacts && !footerContacts.querySelector('[data-telegram]')) {
  footerContacts.insertAdjacentHTML('beforeend', '<br><a data-telegram href="https://t.me/retreat_v_goa" target="_blank" rel="noopener">Telegram-РєР°РЅР°Р»: @retreat_v_goa</a><br><a class="max-community" href="https://max.ru/join/MrExWRjMBva_JYBE8XEygJgYx54DlIH1YflyJEUU8CM" target="_blank" rel="noopener">Р“СЂСѓРїРїР° РІ Max</a>');
}

if (!document.querySelector('.community-dock')) {
  document.body.insertAdjacentHTML('beforeend', `
    <aside class="community-dock" aria-label="РЎРѕРѕР±С‰РµСЃС‚РІР° Dzen Retreat">
      <a class="community-link community-link--telegram" href="https://t.me/retreat_v_goa" target="_blank" rel="noopener"><span aria-hidden="true">вњ€</span><b>Telegram</b><small>РєР°РЅР°Р» СЂРµС‚СЂРёС‚Р°</small></a>
      <a class="community-link community-link--max" href="https://max.ru/join/MrExWRjMBva_JYBE8XEygJgYx54DlIH1YflyJEUU8CM" target="_blank" rel="noopener"><span aria-hidden="true">M</span><b>Max</b><small>РіСЂСѓРїРїР° СѓС‡Р°СЃС‚РЅРёРєРѕРІ</small></a>
    </aside>`);
}

const englishDays = [
  ['Day 1 В· Arrival and your first breath of Goa', 'We meet you at the airport and help you reach the hotel without having to think about logistics after a long journey. Settle in, discover the space, pool and nearby beach, then take time to rest and feel Goa for the first time. In the evening вЂ” a warm group welcome, gentle practice, shared dinner and your first sunset by the ocean.'],
  ['Day 2 В· Finding the rhythm', 'Morning yoga and breathwork, a slow breakfast, the sea and time to rest. In the evening, we gather for an intention circle and name what each person has come here for.'],
  ['Day 3 В· Body, ocean, freedom', 'A practice for strength and flexibility, time at Ashwem beach and an evening meditation. A day without rushing, where you choose your own pace.'],
  ['Day 4 В· Depth and restoration', 'Gentle bodywork, sound healing or deep relaxation. After lunch вЂ” free time, a massage or a walk along the ocean.'],
  ['Day 5 В· Living Goa', 'We head out to explore nature, local places and another side of Goa. Back for dinner, stories and rest.'],
  ['Day 6 В· Space for yourself', 'Morning practice, a nourishing breakfast and an open day. Choose the ocean, pool, reading, a massage or simply make no plans at all.'],
  ['Day 7 В· The lightness of movement', 'Hammock yoga, dance practice and an evening under the stars. A day to feel your body alive, free and strong.'],
  ['Day 8 В· Silence and integration', 'Meditation, breathwork, the ocean and personal time. We slow down so new impressions have time to become part of you.'],
  ['Day 9 В· A second excursion', 'We travel to a new place and get closer to GoaвЂ™s culture and nature. The evening is for resting at the hotel and a warm group gathering.'],
  ['Day 10 В· WomenвЂ™s and deep practices', 'The morning starts with yoga. During the day вЂ” a deep practice or womenвЂ™s circle; in the evening вЂ” a space for honest conversation and support.'],
  ['Day 11 В· Gathering what matters', 'Closing practices, favourite ocean places and a celebratory dinner. We notice what has shifted and what you want to carry home.'],
  ['Day 12 В· Going home', 'Breakfast, packing and transfer. We leave without rushing вЂ” with new friends, photographs and a quieter inner rhythm.']
];

function renderProgramme(items, isEnglish) {
  if (!programme) return;
  programme.innerHTML = items.map(([title, description], index) => `
    <details ${index === 0 ? 'open' : ''}>
      <summary><span>${title}</span><strong>${title}</strong><b>+</b></summary>
      <p>${description}</p>
    </details>`).join('');
  const navigator = document.querySelector('.programme-navigator');
  if (!navigator) return;
  navigator.setAttribute('aria-label', isEnglish ? 'Choose a programme day' : 'Р’С‹Р±РѕСЂ РґРЅСЏ РїСЂРѕРіСЂР°РјРјС‹');
  navigator.innerHTML = items.map((_, index) => `<button type="button" aria-label="${isEnglish ? 'Open day' : 'РћС‚РєСЂС‹С‚СЊ РґРµРЅСЊ'} ${index + 1}" class="${index === 0 ? 'is-active' : ''}">${index + 1}</button>`).join('');
  const panels = Array.from(programme.querySelectorAll('details'));
  Array.from(navigator.querySelectorAll('button')).forEach((button, index, buttons) => button.addEventListener('click', () => {
    panels.forEach((panel, panelIndex) => { panel.open = panelIndex === index; });
    buttons.forEach((item, itemIndex) => item.classList.toggle('is-active', itemIndex === index));
    panels[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }));
}

const copyPairs = {
  'РџРРўРђРќРР•': 'FOOD',
  'Р•РґР°, РєРѕС‚РѕСЂР°СЏ РґР°С‘С‚ СЌРЅРµСЂРіРёСЋ.': 'Food that gives you energy.',
  'РўСЂРё РїРѕР»РЅРѕС†РµРЅРЅС‹С… РІРµРіРµС‚Р°СЂРёР°РЅСЃРєРёС… РїСЂРёС‘РјР° РїРёС‰Рё РІ РґРµРЅСЊ Рё РїРѕР»РµР·РЅС‹Рµ РїРµСЂРµРєСѓСЃС‹. Р’ РјРµРЅСЋ вЂ” СЃРІРµР¶РёРµ РѕРІРѕС‰Рё, С„СЂСѓРєС‚С‹, Р·РµР»РµРЅСЊ Рё Р±Р»СЋРґР°, РєРѕС‚РѕСЂС‹Рµ РїРѕРґРґРµСЂР¶РёРІР°СЋС‚ С‚РµР»Рѕ РІРѕ РІСЂРµРјСЏ РїСЂР°РєС‚РёРє.': 'Three wholesome vegetarian meals a day plus nourishing snacks. The menu includes fresh vegetables, fruit, greens and dishes that support your body through practice.',
  'РЎРІРµР¶РёРµ РЅР°С‚СѓСЂР°Р»СЊРЅС‹Рµ РїСЂРѕРґСѓРєС‚С‹': 'Fresh, natural ingredients',
  'РЎР±Р°Р»Р°РЅСЃРёСЂРѕРІР°РЅРЅРѕРµ РјРµРЅСЋ': 'A balanced menu',
  'РЈС‡С‘С‚ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹С… РїРѕС‚СЂРµР±РЅРѕСЃС‚РµР№': 'Individual dietary needs considered',
  'Р“РђР›Р•Р Р•РЇ': 'GALLERY',
  'РџРѕС‡СѓРІСЃС‚РІСѓР№С‚Рµ Р°С‚РјРѕСЃС„РµСЂСѓ РґРѕ РїРѕРµР·РґРєРё.': 'Feel the atmosphere before you go.',
  'РќР°Р¶РјРёС‚Рµ РЅР° С„РѕС‚РѕРіСЂР°С„РёСЋ, С‡С‚РѕР±С‹ РїРѕСЃРјРѕС‚СЂРµС‚СЊ РµС‘ РєСЂСѓРїРЅРµРµ.': 'Select a photograph to view it in full size.',
  'РћРўР—Р«Р’Р« РЈР§РђРЎРўРќРРљРћР’': 'GUEST STORIES',
  'РСЃС‚РѕСЂРёРё, РїРѕСЃР»Рµ РєРѕС‚РѕСЂС‹С… С…РѕС‡РµС‚СЃСЏ РїРѕРµС…Р°С‚СЊ.': 'Stories that make you want to go.',
  'РЎРјРѕС‚СЂРёС‚Рµ РІРёРґРµРѕ Рё С‡РёС‚Р°Р№С‚Рµ РІРїРµС‡Р°С‚Р»РµРЅРёСЏ С‚РµС…, РєС‚Рѕ СѓР¶Рµ РїСЂРѕР¶РёР» Goa Flow.': 'Watch the video and read impressions from people who have already experienced Goa Flow.',
  'Р’РР”Р•РћРћРўР—Р«Р’': 'VIDEO STORY',
  'Р–РёРІРѕРµ РІРїРµС‡Р°С‚Р»РµРЅРёРµ РѕР± РѕС‚РґС‹С…Рµ Рё РїСЂР°РєС‚РёРєРµ': 'A real impression of the retreat and practice',
  'РќР°СЃС‚РѕСЏС‰РёР№ СЂР°СЃСЃРєР°Р· СѓС‡Р°СЃС‚РЅРёРєР° вЂ” Р±РµР· РїРѕСЃС‚Р°РЅРѕРІРєРё Рё СЂРµРєР»Р°РјРЅС‹С… РѕР±РµС‰Р°РЅРёР№.': 'A real participant story вЂ” no staging and no advertising promises.',
  'РљРћРњРђРќР”Рђ': 'THE TEAM',
  'Р›СЋРґРё, РєРѕС‚РѕСЂС‹Рµ Р±СѓРґСѓС‚ СЂСЏРґРѕРј.': 'The people who will be there with you.',
  'РќР°Р¶РјРёС‚Рµ РЅР° С‡РµР»РѕРІРµРєР°, С‡С‚РѕР±С‹ РїРѕР·РЅР°РєРѕРјРёС‚СЊСЃСЏ СЃ РµРіРѕ РїРѕРґС…РѕРґРѕРј Рё РїСЂР°РєС‚РёРєР°РјРё РЅР° Goa Flow.': 'Select a person to learn about their approach and practices at Goa Flow.',
  'Р”РђРўР« Р РЎРўРћРРњРћРЎРўР¬': 'DATES & PRICES',
  'Р’С‹Р±РµСЂРёС‚Рµ СЃРІРѕР№ Р·Р°РµР·Рґ.': 'Choose your retreat dates.',
  'РљРѕР»РёС‡РµСЃС‚РІРѕ РјРµСЃС‚ РІ РєР°Р¶РґРѕРј Р·Р°РµР·РґРµ РѕРіСЂР°РЅРёС‡РµРЅРѕ.': 'Places are limited for every retreat.',
  'Р’Р°СЂРёР°РЅС‚С‹ СЂР°Р·РјРµС‰РµРЅРёСЏ': 'Accommodation options',
  'РўСЂС‘С…РјРµСЃС‚РЅРѕРµ СЂР°Р·РјРµС‰РµРЅРёРµ': 'Triple room',
  'РћРґРЅРѕРјРµСЃС‚РЅРѕРµ СЂР°Р·РјРµС‰РµРЅРёРµ': 'Single room',
  'РЎРєРёРґРєР° Р·Р° СЂР°РЅРЅРµРµ Р±СЂРѕРЅРёСЂРѕРІР°РЅРёРµ': 'Early booking discount',
  'РЈР·РЅР°С‚СЊ СЃС‚РѕРёРјРѕСЃС‚СЊ в†—': 'Ask about prices в†—',
  'Telegram-РєР°РЅР°Р»: @retreat_v_goa': 'Telegram channel: @retreat_v_goa',
  'Р“СЂСѓРїРїР° РІ Max': 'Max group',
  'РєР°РЅР°Р» СЂРµС‚СЂРёС‚Р°': 'retreat channel',
  'РіСЂСѓРїРїР° СѓС‡Р°СЃС‚РЅРёРєРѕРІ': 'participant group'
};

function translateRemainingCopy(isEnglish) {
  const reversePairs = Object.fromEntries(Object.entries(copyPairs).map(([ru, en]) => [en, ru]));
  const dictionary = isEnglish ? copyPairs : reversePairs;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const source = node.nodeValue.trim();
    if (dictionary[source]) node.nodeValue = node.nodeValue.replace(source, dictionary[source]);
  });
}

document.querySelector('.language')?.addEventListener('click', () => {
  const isEnglish = document.documentElement.lang === 'en';
  renderProgramme(isEnglish ? englishDays : days, isEnglish);
  translateRemainingCopy(isEnglish);
});

// The team film belongs on the main journey page too: it introduces the people
// before a visitor chooses a profile to explore.
const teamSection = document.querySelector('.team');
if (teamSection && !teamSection.querySelector('.team-showcase')) {
  const heading = teamSection.querySelector('.section-heading');
  heading?.insertAdjacentHTML('afterend', `
    <div class="team-showcase">
      <div class="team-showcase-copy">
        <p class="eyebrow ink" data-ru="Р’РР”Р•Рћ Рћ РљРћРњРђРќР”Р•" data-en="MEET THE TEAM">Р’РР”Р•Рћ Рћ РљРћРњРђРќР”Р•</p>
        <h3 data-ru="РџРѕР·РЅР°РєРѕРјСЊС‚РµСЃСЊ СЃ РЅР°РјРё<br>РґРѕ РїСѓС‚РµС€РµСЃС‚РІРёСЏ." data-en="Meet us before<br>your journey.">РџРѕР·РЅР°РєРѕРјСЊС‚РµСЃСЊ СЃ РЅР°РјРё<br>РґРѕ РїСѓС‚РµС€РµСЃС‚РІРёСЏ.</h3>
        <p data-ru="РќРµСЃРєРѕР»СЊРєРѕ Р¶РёРІС‹С… РјРёРЅСѓС‚ Рѕ Р»СЋРґСЏС…, РєРѕС‚РѕСЂС‹Рµ СЃРѕР·РґР°СЋС‚ РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРѕ Goa Flow вЂ” СЃ РІРЅРёРјР°РЅРёРµРј Рє РєР°Р¶РґРѕРјСѓ СѓС‡Р°СЃС‚РЅРёРєСѓ Рё Р±РµР· СЃСѓРµС‚С‹." data-en="A few real minutes with the people who shape Goa Flow вЂ” with attention for every guest and no rushing.">РќРµСЃРєРѕР»СЊРєРѕ Р¶РёРІС‹С… РјРёРЅСѓС‚ Рѕ Р»СЋРґСЏС…, РєРѕС‚РѕСЂС‹Рµ СЃРѕР·РґР°СЋС‚ РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРѕ Goa Flow вЂ” СЃ РІРЅРёРјР°РЅРёРµРј Рє РєР°Р¶РґРѕРјСѓ СѓС‡Р°СЃС‚РЅРёРєСѓ Рё Р±РµР· СЃСѓРµС‚С‹.</p>
      </div>
      <div class="team-showcase-video">
        <video controls playsinline preload="metadata" poster="/assets/gallery-web/photo-005.jpg" data-chunks="/assets/team-video-web-chunks/part-00,/assets/team-video-web-chunks/part-01,/assets/team-video-web-chunks/part-02,/assets/team-video-web-chunks/part-03"></video>
      </div>
    </div>`);
  const teamVideo = teamSection.querySelector('.team-showcase-video video[data-chunks]');
  if (teamVideo && typeof loadChunkedVideo === 'function') loadChunkedVideo(teamVideo);
}

// Use the generous space below the dates heading for a useful, lightweight
// season chooser. It filters the existing departure links without replacing them.
const datesSection = document.querySelector('.dates');
if (datesSection && !datesSection.querySelector('.date-explorer')) {
  const heading = datesSection.querySelector('.section-heading');
  heading?.insertAdjacentHTML('afterend', `
    <div class="date-explorer" aria-label="Р’С‹Р±РѕСЂ СЃРµР·РѕРЅР°">
      <div><p class="eyebrow ink" data-ru="Р’Р«Р‘Р•Р РРўР• РЎР•Р—РћРќ" data-en="CHOOSE A SEASON">Р’Р«Р‘Р•Р РРўР• РЎР•Р—РћРќ</p><p class="date-explorer-lead" data-ru="РљР°Р¶РґС‹Р№ Р·Р°РµР·Рґ вЂ” 12 РґРЅРµР№ Сѓ РѕРєРµР°РЅР°. РќР°Р¶РјРёС‚Рµ РЅР° СЃРµР·РѕРЅ, С‡С‚РѕР±С‹ Р±С‹СЃС‚СЂРѕ РІС‹Р±СЂР°С‚СЊ СѓРґРѕР±РЅС‹Рµ РґР°С‚С‹." data-en="Every retreat is 12 days by the ocean. Select a season to quickly find dates that suit you.">РљР°Р¶РґС‹Р№ Р·Р°РµР·Рґ вЂ” 12 РґРЅРµР№ Сѓ РѕРєРµР°РЅР°. РќР°Р¶РјРёС‚Рµ РЅР° СЃРµР·РѕРЅ, С‡С‚РѕР±С‹ Р±С‹СЃС‚СЂРѕ РІС‹Р±СЂР°С‚СЊ СѓРґРѕР±РЅС‹Рµ РґР°С‚С‹.</p></div>
      <div class="season-switch" role="group" aria-label="РЎРµР·РѕРЅС‹"><button class="is-active" type="button" data-season="all" data-ru="Р’СЃРµ РґР°С‚С‹" data-en="All dates">Р’СЃРµ РґР°С‚С‹</button><button type="button" data-season="autumn" data-ru="РћСЃРµРЅСЊ" data-en="Autumn">РћСЃРµРЅСЊ</button><button type="button" data-season="winter" data-ru="Р—РёРјР°" data-en="Winter">Р—РёРјР°</button><button type="button" data-season="spring" data-ru="Р’РµСЃРЅР°" data-en="Spring">Р’РµСЃРЅР°</button></div>
    </div>`);
  const dateLinks = Array.from(datesSection.querySelectorAll('.date-list a'));
  const seasonFor = (index) => index < 6 ? 'autumn' : index < 11 ? 'winter' : 'spring';
  dateLinks.forEach((link, index) => link.dataset.season = seasonFor(index));
  datesSection.querySelectorAll('.season-switch button').forEach((button) => button.addEventListener('click', () => {
    const season = button.dataset.season;
    datesSection.querySelectorAll('.season-switch button').forEach((item) => item.classList.toggle('is-active', item === button));
    dateLinks.forEach((link) => { link.hidden = season !== 'all' && link.dataset.season !== season; });
  }));
}

const englishDateLabels = ['14вЂ“25 October', '26 OctoberвЂ“6 November', '7вЂ“18 November', '19вЂ“30 November', '1вЂ“12 December', '14вЂ“25 December', '28 DecemberвЂ“8 January', '11вЂ“22 January', '24 JanuaryвЂ“4 February', '8вЂ“19 February', '22 FebruaryвЂ“5 March', '7вЂ“18 March', '21 MarchвЂ“1 April', '4вЂ“15 April'];
const russianDateLabels = ['14вЂ“25 РѕРєС‚СЏР±СЂСЏ', '26 РѕРєС‚СЏР±СЂСЏвЂ“6 РЅРѕСЏР±СЂСЏ', '7вЂ“18 РЅРѕСЏР±СЂСЏ', '19вЂ“30 РЅРѕСЏР±СЂСЏ', '1вЂ“12 РґРµРєР°Р±СЂСЏ', '14вЂ“25 РґРµРєР°Р±СЂСЏ', '28 РґРµРєР°Р±СЂСЏвЂ“8 СЏРЅРІР°СЂСЏ', '11вЂ“22 СЏРЅРІР°СЂСЏ', '24 СЏРЅРІР°СЂСЏвЂ“4 С„РµРІСЂР°Р»СЏ', '8вЂ“19 С„РµРІСЂР°Р»СЏ', '22 С„РµРІСЂР°Р»СЏвЂ“5 РјР°СЂС‚Р°', '7вЂ“18 РјР°СЂС‚Р°', '21 РјР°СЂС‚Р°вЂ“1 Р°РїСЂРµР»СЏ', '4вЂ“15 Р°РїСЂРµР»СЏ'];
const reviewCopy = {
  ru: [
    'РСЃС‚РѕСЂРёРё, РїРѕСЃР»Рµ РєРѕС‚РѕСЂС‹С…<br><em>С…РѕС‡РµС‚СЃСЏ РїРѕРµС…Р°С‚СЊ.</em>', 'Р–РёРІРѕРµ РІРїРµС‡Р°С‚Р»РµРЅРёРµ<br>РѕР± РѕС‚РґС‹С…Рµ Рё РїСЂР°РєС‚РёРєРµ',
    'В«Р­С‚РѕС‚ СЂРµС‚СЂРёС‚ СЃС‚Р°Р» РїРµСЂРµР·Р°РіСЂСѓР·РєРѕР№ РІРѕ РІСЃРµС… СЃРјС‹СЃР»Р°С…. РђС‚РјРѕСЃС„РµСЂР° С‚РµРїР»Р° Рё РїРѕРґРґРµСЂР¶РєРё РїРѕРјРѕРіР°РµС‚ РѕС‚РїСѓСЃС‚РёС‚СЊ Р»РёС€РЅРµРµ Рё СѓСЃР»С‹С€Р°С‚СЊ СЃРµР±СЏВ».',
    'В«Р•РґР° РІС‹С€Рµ РІСЃСЏРєРёС… РїРѕС…РІР°Р»: СЃРІРµР¶Р°СЏ, РІРєСѓСЃРЅР°СЏ, СЂР°Р·РЅРѕРѕР±СЂР°Р·РЅР°СЏ Рё СЃ Р»СЋР±РѕРІСЊСЋ РїСЂРёРіРѕС‚РѕРІР»РµРЅРЅР°СЏ. РџРѕСЃР»Рµ РЅРµС‘ вЂ” Р»С‘РіРєРѕСЃС‚СЊ Рё СЌРЅРµСЂРіРёСЏВ».',
    'В«РњР°Р»РµРЅСЊРєР°СЏ РіСЂСѓРїРїР° РґРµР»Р°РµС‚ СЂРµС‚СЂРёС‚ РѕСЃРѕР±РµРЅРЅС‹Рј. РџРѕСЏРІР»СЏРµС‚СЃСЏ РґРѕРІРµСЂРёРµ Рё РіР»СѓР±РёРЅР° РѕР±С‰РµРЅРёСЏ. РЇ СѓРІРµР·Р»Р° СЃ СЃРѕР±РѕР№ РЅРѕРІС‹С… РґСЂСѓР·РµР№В».',
    'В«РћРєРµР°РЅ СЂСЏРґРѕРј вЂ” РѕС‚РґРµР»СЊРЅР°СЏ РјР°РіРёСЏ. РЈС‚СЂРµРЅРЅРёРµ РїСЂР°РєС‚РёРєРё РїРѕРґ С€СѓРј РІРѕР»РЅ Рё Р·Р°РєР°С‚С‹ РїРѕРјРѕРіР°СЋС‚ РїРѕ-РЅР°СЃС‚РѕСЏС‰РµРјСѓ Р·Р°РјРµРґР»РёС‚СЊСЃСЏВ».'
  ],
  en: [
    'Stories that make you<br><em>want to go.</em>', 'A real impression<br>of the retreat and practice',
    'вЂњThis retreat was a reset in every sense. Its warmth and support helped me let go of what I no longer needed and hear myself again.вЂќ',
    'вЂњThe food was exceptional: fresh, delicious, varied and prepared with care. It left me feeling light and full of energy.вЂќ',
    'вЂњA small group makes the retreat special. Trust and real connection appear. I came home with new friends.вЂќ',
    'вЂњHaving the ocean so close is its own magic. Morning practice to the sound of waves and sunsets truly help you slow down.вЂќ'
  ]
};

function setNode(selector, value, html = false) {
  const node = document.querySelector(selector);
  if (node) html ? node.innerHTML = value : node.textContent = value;
}

function translateFullPage(isEnglish) {
  const copy = isEnglish ? {
    nav: ['About', 'Programme', 'Gallery', 'Team', 'Dates & prices'], mobile: ['About', '12-day programme', 'Accommodation', 'Food', 'Practices', 'Gallery', 'Guest stories', 'Team', 'Dates & prices', 'Hampi', 'Partner programme', 'Contacts', 'Message on WhatsApp в†—'],
    menu: 'Menu', programmeEyebrow: 'PROGRAMME', programmeTitle: '12 days with room<br><em>for you.</em>', foodTitle: 'Food that gives<br><em>you energy.</em>', galleryTitle: 'Feel the atmosphere<br><em>before you go.</em>',
    teamTitle: 'The people who<br><em>will be there with you.</em>', datesTitle: 'Choose your<br><em>retreat dates.</em>', datesMeta: '12 days / 11 nights В· from $650<br>Places are limited for every retreat.',
    accommodation: ['Accommodation options', 'Triple room', 'Twin room В· two separate beds', 'Double room В· two large beds', 'Single room', 'Single LUX room', 'Early booking discount'],
    included: 'Included: accommodation, three meals a day, practices, two excursions and scheduled transfers.', deposit: 'To reserve your place, a non-refundable $150 deposit is required and is included in the retreat price.', price: 'Ask about prices в†—', teamMore: 'Meet the full team and practices в†—',
    roles: ['Creator and director of Dzen Retreat', 'Kundalini yoga and breathwork', 'WomenвЂ™s and deep practices', 'Administrator, hammock yoga and dance', 'Vegetarian cuisine for Goa Flow'],
    teamNames: ['Evgeniy Novikov', 'Roman', 'Yulia Rufan В· Mooji', 'Polina Polyakova', 'Chef Jyoti'], reviewNames: ['Anna', 'Igor', 'Olga', 'Irina'], reviewCities: ['Moscow', 'Novosibirsk', 'Rostov-on-Don', 'Vladivostok']
  } : {
    nav: ['Рћ СЂРµС‚СЂРёС‚Рµ', 'РџСЂРѕРіСЂР°РјРјР°', 'Р“Р°Р»РµСЂРµСЏ', 'РљРѕРјР°РЅРґР°', 'Р”Р°С‚С‹ Рё С†РµРЅС‹'], mobile: ['Рћ СЂРµС‚СЂРёС‚Рµ', 'РџСЂРѕРіСЂР°РјРјР° 12 РґРЅРµР№', 'РџСЂРѕР¶РёРІР°РЅРёРµ', 'РџРёС‚Р°РЅРёРµ', 'РџСЂР°РєС‚РёРєРё', 'Р“Р°Р»РµСЂРµСЏ', 'РћС‚Р·С‹РІС‹', 'РљРѕРјР°РЅРґР°', 'Р”Р°С‚С‹ Рё С†РµРЅС‹', 'РҐР°РјРїРё', 'РџР°СЂС‚РЅС‘СЂСЃРєР°СЏ РїСЂРѕРіСЂР°РјРјР°', 'РљРѕРЅС‚Р°РєС‚С‹', 'РќР°РїРёСЃР°С‚СЊ РІ WhatsApp в†—'],
    menu: 'РњРµРЅСЋ', programmeEyebrow: 'РџР РћР“Р РђРњРњРђ', programmeTitle: '12 РґРЅРµР№, РІ РєРѕС‚РѕСЂС‹С…<br><em>РµСЃС‚СЊ РјРµСЃС‚Рѕ РґР»СЏ РІР°СЃ.</em>', foodTitle: 'Р•РґР°, РєРѕС‚РѕСЂР°СЏ<br><em>РґР°С‘С‚ СЌРЅРµСЂРіРёСЋ.</em>', galleryTitle: 'РџРѕС‡СѓРІСЃС‚РІСѓР№С‚Рµ<br><em>Р°С‚РјРѕСЃС„РµСЂСѓ РґРѕ РїРѕРµР·РґРєРё.</em>',
    teamTitle: 'Р›СЋРґРё, РєРѕС‚РѕСЂС‹Рµ<br><em>Р±СѓРґСѓС‚ СЂСЏРґРѕРј.</em>', datesTitle: 'Р’С‹Р±РµСЂРёС‚Рµ<br><em>СЃРІРѕР№ Р·Р°РµР·Рґ.</em>', datesMeta: '12 РґРЅРµР№ / 11 РЅРѕС‡РµР№ В· РѕС‚ $650<br>РљРѕР»РёС‡РµСЃС‚РІРѕ РјРµСЃС‚ РІ РєР°Р¶РґРѕРј Р·Р°РµР·РґРµ РѕРіСЂР°РЅРёС‡РµРЅРѕ.',
    accommodation: ['Р’Р°СЂРёР°РЅС‚С‹ СЂР°Р·РјРµС‰РµРЅРёСЏ', 'РўСЂС‘С…РјРµСЃС‚РЅРѕРµ СЂР°Р·РјРµС‰РµРЅРёРµ', 'Р”РІСѓС…РјРµСЃС‚РЅРѕРµ TWIN В· РґРІРµ РѕС‚РґРµР»СЊРЅС‹Рµ РєСЂРѕРІР°С‚Рё', 'Р”РІСѓС…РјРµСЃС‚РЅРѕРµ DOUBLE В· РґРІРµ Р±РѕР»СЊС€РёРµ РєСЂРѕРІР°С‚Рё', 'РћРґРЅРѕРјРµСЃС‚РЅРѕРµ СЂР°Р·РјРµС‰РµРЅРёРµ', 'РћРґРЅРѕРјРµСЃС‚РЅРѕРµ LUX', 'РЎРєРёРґРєР° Р·Р° СЂР°РЅРЅРµРµ Р±СЂРѕРЅРёСЂРѕРІР°РЅРёРµ'],
    included: 'Р’ СЃС‚РѕРёРјРѕСЃС‚СЊ РІРєР»СЋС‡РµРЅС‹: РїСЂРѕР¶РёРІР°РЅРёРµ, С‚СЂС‘С…СЂР°Р·РѕРІРѕРµ РїРёС‚Р°РЅРёРµ, РїСЂР°РєС‚РёРєРё, РґРІРµ СЌРєСЃРєСѓСЂСЃРёРё Рё С‚СЂР°РЅСЃС„РµСЂ РїРѕ РїСЂРѕРіСЂР°РјРјРµ.', deposit: 'Р‘СЂРѕРЅРёСЂРѕРІР°РЅРёРµ РјРµСЃС‚Р° вЂ” РЅРµРІРѕР·РІСЂР°С‚РЅР°СЏ РїСЂРµРґРѕРїР»Р°С‚Р° $150, РєРѕС‚РѕСЂР°СЏ РІС…РѕРґРёС‚ РІ СЃС‚РѕРёРјРѕСЃС‚СЊ С‚СѓСЂР°.', price: 'РЈР·РЅР°С‚СЊ СЃС‚РѕРёРјРѕСЃС‚СЊ в†—', teamMore: 'Р’СЃСЏ РєРѕРјР°РЅРґР° Рё РЅР°РїСЂР°РІР»РµРЅРёСЏ РїСЂР°РєС‚РёРє в†—',
    roles: ['РЎРѕР·РґР°С‚РµР»СЊ Рё СЂСѓРєРѕРІРѕРґРёС‚РµР»СЊ Dzen Retreat', 'РљСѓРЅРґР°Р»РёРЅРё-Р№РѕРіР° Рё РґС‹С…Р°С‚РµР»СЊРЅС‹Рµ РїСЂР°РєС‚РёРєРё', 'Р–РµРЅСЃРєРёРµ Рё РіР»СѓР±РѕРєРёРµ РїСЂР°РєС‚РёРєРё', 'РђРґРјРёРЅРёСЃС‚СЂР°С‚РѕСЂ, Р№РѕРіР° РІ РіР°РјР°РєР°С…, С‚Р°РЅС†С‹', 'Р’РµРіРµС‚Р°СЂРёР°РЅСЃРєР°СЏ РєСѓС…РЅСЏ Goa Flow'],
    teamNames: ['Р•РІРіРµРЅРёР№ РќРѕРІРёРєРѕРІ', 'Р РѕРјР°РЅ', 'Р®Р»СЏ Р СѓС„Р°РЅ В· РњСѓРґР¶Рё', 'РџРѕР»РёРЅР° РџРѕР»СЏРєРѕРІР°', 'РЁРµС„-РїРѕРІР°СЂ Р”Р¶РѕС‚Рё'], reviewNames: ['РђРЅРЅР°', 'РРіРѕСЂСЊ', 'РћР»СЊРіР°', 'РСЂРёРЅР°'], reviewCities: ['РњРѕСЃРєРІР°', 'РќРѕРІРѕСЃРёР±РёСЂСЃРє', 'Р РѕСЃС‚РѕРІ-РЅР°-Р”РѕРЅСѓ', 'Р’Р»Р°РґРёРІРѕСЃС‚РѕРє']
  };
  document.querySelectorAll('.desktop-nav > a').forEach((link, index) => { if (copy.nav[index]) link.textContent = copy.nav[index]; });
  const mobileLabels = isEnglish ? {
    '#about': 'About', '#programme': '12-day programme', '#space': 'Accommodation',
    '#food': 'Food', '#rhythm': 'Practices', '#gallery': 'Gallery',
    '#reviews': 'Guest stories', '/team/': 'Team', '#team': 'Team',
    '#dates': 'Dates & prices', '#contacts': 'Contacts',
    '/en/guide/': 'Goa guide', '/en/goa-flow-travel/': 'Goa Flow Travel',
    '/en/start/': 'Start planning'
  } : {
    '#about': 'Рћ СЂРµС‚СЂРёС‚Рµ', '#programme': 'РџСЂРѕРіСЂР°РјРјР° 12 РґРЅРµР№', '#space': 'РџСЂРѕР¶РёРІР°РЅРёРµ',
    '#food': 'РџРёС‚Р°РЅРёРµ', '#rhythm': 'РџСЂР°РєС‚РёРєРё', '#gallery': 'Р“Р°Р»РµСЂРµСЏ',
    '#reviews': 'РћС‚Р·С‹РІС‹', '/team/': 'РљРѕРјР°РЅРґР°', '#team': 'РљРѕРјР°РЅРґР°',
    '#dates': 'Р”Р°С‚С‹ Рё С†РµРЅС‹', '#contacts': 'РљРѕРЅС‚Р°РєС‚С‹',
    '/guide/': 'Р“РёРґ РїРѕ Р“РѕР°', '/goa-flow-travel/': 'Goa Flow Travel',
    '/start/': 'РќР°С‡Р°С‚СЊ РїР»Р°РЅРёСЂРѕРІР°РЅРёРµ'
  };
  document.querySelectorAll('.mobile-nav > a').forEach((link) => {
    const original = link.getAttribute('href');
    if (isEnglish) {
      if (original === '/guide/') link.href = '/en/guide/';
      if (original === '/goa-flow-travel/') link.href = '/en/goa-flow-travel/';
      if (original === '/start/') link.href = '/en/start/';
      if (original === '/team/' || original === '/hampi/' || original === '/partners/' || original === '/faq/') {
        link.hidden = true;
        return;
      }
    } else {
      if (original === '/en/guide/') link.href = '/guide/';
      if (original === '/en/goa-flow-travel/') link.href = '/goa-flow-travel/';
      if (original === '/en/start/') link.href = '/start/';
      link.hidden = false;
    }
    const key = link.getAttribute('href');
    if (/wa\.me/.test(key)) link.textContent = isEnglish ? 'Message on WhatsApp в†—' : 'РќР°РїРёСЃР°С‚СЊ РІ WhatsApp в†—';
    else if (mobileLabels[key]) link.textContent = mobileLabels[key];
  });
  const moreLabels = isEnglish ? {
    '/en/goa-flow-travel/': 'Goa Flow Travel', '/en/start/': 'Start planning',
    '#space': 'Accommodation', '#food': 'Food', '#rhythm': 'Practices',
    '#reviews': 'Guest stories', '/en/guide/': 'Goa guide', '#contacts': 'Contacts'
  } : {
    '/goa-flow-travel/': 'Goa Flow Travel', '/start/': 'РќР°С‡Р°С‚СЊ РїР»Р°РЅРёСЂРѕРІР°РЅРёРµ',
    '#space': 'РџСЂРѕР¶РёРІР°РЅРёРµ', '#food': 'РџРёС‚Р°РЅРёРµ', '#rhythm': 'РџСЂР°РєС‚РёРєРё',
    '#reviews': 'РћС‚Р·С‹РІС‹', '/guide/': 'Р“РёРґ РїРѕ Р“РѕР°', '#contacts': 'РљРѕРЅС‚Р°РєС‚С‹'
  };
  document.querySelector('.desktop-more summary')?.replaceChildren(isEnglish ? 'All sections +' : 'Р’СЃРµ СЂР°Р·РґРµР»С‹ +');
  document.querySelectorAll('.desktop-more nav a').forEach((link) => {
    const original = link.getAttribute('href');
    if (isEnglish) {
      if (original === '/guide/') link.href = '/en/guide/';
      if (original === '/goa-flow-travel/') link.href = '/en/goa-flow-travel/';
      if (original === '/start/') link.href = '/en/start/';
      if (original === '/hampi/' || original === '/partners/' || original === '/faq/') { link.hidden = true; return; }
    } else {
      if (original === '/en/guide/') link.href = '/guide/';
      if (original === '/en/goa-flow-travel/') link.href = '/goa-flow-travel/';
      if (original === '/en/start/') link.href = '/start/';
      link.hidden = false;
    }
    if (moreLabels[link.getAttribute('href')]) link.textContent = moreLabels[link.getAttribute('href')];
  });
  setNode('.menu i', copy.menu);
  setNode('.programme .section-heading .eyebrow', copy.programmeEyebrow);
  setNode('.programme .section-heading h2', copy.programmeTitle, true);
  setNode('.food-copy h2', copy.foodTitle, true);
  setNode('.gallery-head h2', copy.galleryTitle, true);
  setNode('.testimonials .section-heading h2', reviewCopy[isEnglish ? 'en' : 'ru'][0], true);
  setNode('.review-video-card h3', reviewCopy[isEnglish ? 'en' : 'ru'][1], true);
  document.querySelectorAll('.review-card > p').forEach((node, index) => { node.textContent = reviewCopy[isEnglish ? 'en' : 'ru'][index + 2]; });
  setNode('.team .section-heading h2', copy.teamTitle, true);
  document.querySelectorAll('.team-grid a').forEach((card, index) => {
    const name = card.querySelector('h3'); const role = card.querySelector('p'); const image = card.querySelector('img');
    if (name) name.textContent = copy.teamNames[index];
    if (role) role.textContent = copy.roles[index];
    if (image) image.alt = copy.teamNames[index];
  });
  setNode('.team-more', copy.teamMore);
  document.querySelectorAll('.review-card').forEach((card, index) => {
    const name = card.querySelector('b'); const city = card.querySelector('small'); const image = card.querySelector('img');
    if (name) name.textContent = copy.reviewNames[index];
    if (city) city.textContent = copy.reviewCities[index];
    if (image) image.alt = copy.reviewNames[index];
  });
  setNode('.dates .section-heading h2', copy.datesTitle, true);
  setNode('.dates .section-heading > p:not(.eyebrow)', copy.datesMeta, true);
  document.querySelectorAll('.date-list a').forEach((link, index) => {
    const arrow = link.querySelector('b');
    link.firstChild.nodeValue = `${(isEnglish ? englishDateLabels : russianDateLabels)[index]} `;
    if (!arrow) link.insertAdjacentHTML('beforeend', '<b>в†—</b>');
  });
  const priceNote = document.querySelector('.price-note');
  if (priceNote) {
    const prices = ['$650', '$700', '$750', '$800', '$850', 'в€’$50'];
    priceNote.innerHTML = `<h3>${copy.accommodation[0]}</h3><div class="price-table">${copy.accommodation.slice(1).map((label, index) => `<p><span>${label}</span><b>${prices[index]}</b></p>`).join('')}</div><p>${copy.included}</p><p>${copy.deposit}</p><a class="button button-peach" href="https://wa.me/79958390508?text=Р—РґСЂР°РІСЃС‚РІСѓР№С‚Рµ!%20РҐРѕС‡Сѓ%20СѓР·РЅР°С‚СЊ%20Рѕ%20СЃС‚РѕРёРјРѕСЃС‚Рё%20Goa%20Flow" target="_blank" rel="noopener">${copy.price.replace(' в†—','')} <b>в†—</b></a>`;
  }
  document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.setAttribute('aria-label', isEnglish ? `Open photograph ${index + 1}` : `РћС‚РєСЂС‹С‚СЊ С„РѕС‚РѕРіСЂР°С„РёСЋ ${index + 1}`);
    const image = item.querySelector('img'); if (image) image.alt = isEnglish ? `Dzen Retreat Goa photograph ${index + 1}` : `Р¤РѕС‚РѕРіСЂР°С„РёСЏ Dzen Retreat Goa ${index + 1}`;
  });
  document.querySelectorAll('[data-trip-planner]').forEach((link) => {
    link.href = isEnglish ? '/en/start/' : '/start/';
    link.textContent = isEnglish ? 'Start planning' : 'РќР°С‡Р°С‚СЊ РїР»Р°РЅРёСЂРѕРІР°РЅРёРµ';
  });
  document.querySelectorAll('[data-goa-travel]').forEach((link) => {
    link.href = isEnglish ? '/en/goa-flow-travel/' : '/goa-flow-travel/';
    link.textContent = 'Goa Flow Travel';
  });
}

document.querySelector('.language')?.addEventListener('click', () => translateFullPage(document.documentElement.lang === 'en'));

// Private curation view: append ?select-gallery=1 to show stable gallery numbers.
// The labels are not rendered for regular visitors.
if (new URLSearchParams(window.location.search).get('select-gallery') === '1') {
  document.documentElement.classList.add('gallery-selection-mode');
  document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.dataset.galleryNumber = String(index + 1).padStart(2, '0');
  });
}

// A calm, dedicated next step for visitors who are not ready to choose a date yet.
const moreNavigation = document.querySelector('.desktop-more nav');
const mobileNavigation = document.querySelector('.mobile-nav');
if (moreNavigation && !moreNavigation.querySelector('[data-trip-planner]')) {
  const link = document.createElement('a');
  link.href = '/start/';
  link.dataset.tripPlanner = 'true';
  link.textContent = 'РќР°С‡Р°С‚СЊ РїР»Р°РЅРёСЂРѕРІР°РЅРёРµ';
  moreNavigation.prepend(link);
}
if (mobileNavigation && !mobileNavigation.querySelector('[data-trip-planner]')) {
  const link = document.createElement('a');
  link.href = '/start/';
  link.dataset.tripPlanner = 'true';
  link.textContent = 'РќР°С‡Р°С‚СЊ РїР»Р°РЅРёСЂРѕРІР°РЅРёРµ';
  mobileNavigation.prepend(link);
}
if (moreNavigation && !moreNavigation.querySelector('[data-goa-travel]')) {
  const link = document.createElement('a');
  link.href = '/goa-flow-travel/';
  link.dataset.goaTravel = 'true';
  link.textContent = 'Goa Flow Travel';
  moreNavigation.prepend(link);
}
if (mobileNavigation && !mobileNavigation.querySelector('[data-goa-travel]')) {
  const link = document.createElement('a');
  link.href = '/goa-flow-travel/';
  link.dataset.goaTravel = 'true';
  link.textContent = 'Goa Flow Travel';
  mobileNavigation.prepend(link);
}

// Keep WhatsApp prefilled messages aligned with the active site language.
function syncWhatsAppLinks() {
  const isEnglish = document.documentElement.lang === 'en';
  document.querySelectorAll('a[href*="wa.me/79958390508"]').forEach((link) => {
    const url = new URL(link.href);
    const dateLink = link.closest('.date-list');
    const label = link.textContent.replace('в†—', '').trim();
    let message;
    if (dateLink) {
      message = isEnglish
        ? `Hello! I would like to ask about the Goa Flow dates: ${label}.`
        : `Р—РґСЂР°РІСЃС‚РІСѓР№С‚Рµ! РҐРѕС‡Сѓ СѓР·РЅР°С‚СЊ Рѕ Р·Р°РµР·РґРµ ${label}.`;
    } else if (/price|СЃС‚РѕРёРјРѕСЃС‚СЊ|prices/i.test(`${label} ${url.searchParams.get('text') || ''}`)) {
      message = isEnglish
        ? 'Hello! I would like to ask about Goa Flow prices.'
        : 'Р—РґСЂР°РІСЃС‚РІСѓР№С‚Рµ! РҐРѕС‡Сѓ СѓР·РЅР°С‚СЊ Рѕ СЃС‚РѕРёРјРѕСЃС‚Рё Goa Flow.';
    } else {
      message = isEnglish
        ? 'Hello! I would like to learn more about Goa Flow.'
        : 'Р—РґСЂР°РІСЃС‚РІСѓР№С‚Рµ! РҐРѕС‡Сѓ СѓР·РЅР°С‚СЊ Рѕ Goa Flow.';
    }
    url.searchParams.set('text', message);
    link.href = url.toString();
  });
}

syncWhatsAppLinks();
document.querySelector('.language')?.addEventListener('click', () => setTimeout(syncWhatsAppLinks, 0));


// Keep lead messages in the current language after every language switch.
new MutationObserver(() => {
  if (document.documentElement.lang === 'en') syncWhatsAppLinks();
}).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });


// Re-run after the translation handlers finish updating labels and hrefs.
document.querySelector('.language')?.addEventListener('click', () => {
  [100, 500, 1200].forEach((delay) => setTimeout(syncWhatsAppLinks, delay));
});


// Poll the language state so lead messages stay correct even when another script changes it.
let leadLanguage = document.documentElement.lang;
setInterval(() => {
  if (document.documentElement.lang !== leadLanguage) {
    leadLanguage = document.documentElement.lang;
    syncWhatsAppLinks();
  }
}, 250);


// Repair legacy mojibake in Russian copy without changing the English version.
function repairRussianCopy() {
  if (document.documentElement.lang === 'en') return;
  const decode = (value) => {
    if (!/[РС][\u0080-\u00bf]/.test(value)) return value;
    try { return decodeURIComponent(escape(value)); } catch (_) { return value; }
  };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => { node.nodeValue = decode(node.nodeValue); });
  document.querySelectorAll('[aria-label], [alt]').forEach((node) => {
    if (node.hasAttribute('aria-label')) node.setAttribute('aria-label', decode(node.getAttribute('aria-label')));
    if (node.hasAttribute('alt')) node.setAttribute('alt', decode(node.getAttribute('alt')));
  });
}
repairRussianCopy();
setInterval(repairRussianCopy, 500);


// Decode legacy Russian strings that were stored as UTF-8 read as Windows-1252/1251.
repairRussianCopy = function() {
  if (document.documentElement.lang === 'en') return;
  const cp1252 = {0x20AC:0x80,0x201A:0x82,0x192:0x83,0x201E:0x84,0x2026:0x85,0x2020:0x86,0x2021:0x87,0x2C6:0x88,0x2030:0x89,0x160:0x8A,0x2039:0x8B,0x152:0x8C,0x17D:0x8E,0x2018:0x91,0x2019:0x92,0x201C:0x93,0x201D:0x94,0x2022:0x95,0x2013:0x96,0x2014:0x97,0x2DC:0x98,0x2122:0x99,0x161:0x9A,0x203A:0x9B,0x153:0x9C,0x17E:0x9E,0x178:0x9F};
  const toByte = (char) => { const code = char.charCodeAt(0); if (code >= 0x400 && code <= 0x45F) return code - 0x350; return cp1252[code] ?? (code <= 0xFF ? code : null); };
  const decode = (value) => {
    if (!/[РС][^\s]/.test(value)) return value;
    try { const bytes = []; for (const char of value) { const byte = toByte(char); if (byte == null) return value; bytes.push(byte); } return new TextDecoder('utf-8').decode(new Uint8Array(bytes)); } catch (_) { return value; }
  };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => { node.nodeValue = decode(node.nodeValue); });
  document.querySelectorAll('[aria-label], [alt]').forEach((node) => { if (node.hasAttribute('aria-label')) node.setAttribute('aria-label', decode(node.getAttribute('aria-label'))); if (node.hasAttribute('alt')) node.setAttribute('alt', decode(node.getAttribute('alt'))); });
};
repairRussianCopy();


// Narrow mojibake repair: never transform ordinary Cyrillic words.
repairRussianCopy = function() {
  if (document.documentElement.lang === 'en') return;
  const cp1252 = {0x20AC:0x80,0x201A:0x82,0x192:0x83,0x201E:0x84,0x2026:0x85,0x2020:0x86,0x2021:0x87,0x2C6:0x88,0x2030:0x89,0x160:0x8A,0x2039:0x8B,0x152:0x8C,0x17D:0x8E,0x2018:0x91,0x2019:0x92,0x201C:0x93,0x201D:0x94,0x2022:0x95,0x2013:0x96,0x2014:0x97,0x2DC:0x98,0x2122:0x99,0x161:0x9A,0x203A:0x9B,0x153:0x9C,0x17E:0x9E,0x178:0x9F};
  const toByte = (char) => { const code = char.charCodeAt(0); if (code >= 0x400 && code <= 0x45F) return code - 0x350; return cp1252[code] ?? (code <= 0xFF ? code : null); };
  const decode = (value) => {
    if (!/[РС](?![А-Яа-яЁё])/.test(value)) return value;
    try { const bytes = []; for (const char of value) { const byte = toByte(char); if (byte == null) return value; bytes.push(byte); } return new TextDecoder('utf-8').decode(new Uint8Array(bytes)); } catch (_) { return value; }
  };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => { node.nodeValue = decode(node.nodeValue); });
  document.querySelectorAll('[aria-label], [alt]').forEach((node) => { if (node.hasAttribute('aria-label')) node.setAttribute('aria-label', decode(node.getAttribute('aria-label'))); if (node.hasAttribute('alt')) node.setAttribute('alt', decode(node.getAttribute('alt'))); });
};
repairRussianCopy();


// Final browser-safe mojibake repair for Russian text.
repairRussianCopy = function() {
  if (document.documentElement.lang === 'en') return;
  const cp1252 = {0x20AC:0x80,0x201A:0x82,0x192:0x83,0x201E:0x84,0x2026:0x85,0x2020:0x86,0x2021:0x87,0x2C6:0x88,0x2030:0x89,0x160:0x8A,0x2039:0x8B,0x152:0x8C,0x17D:0x8E,0x2018:0x91,0x2019:0x92,0x201C:0x93,0x201D:0x94,0x2022:0x95,0x2013:0x96,0x2014:0x97,0x2DC:0x98,0x2122:0x99,0x161:0x9A,0x203A:0x9B,0x153:0x9C,0x17E:0x9E,0x178:0x9F};
  const toByte = (char) => { const code = char.charCodeAt(0); if (code >= 0x410 && code <= 0x44F) return code - 0x350; if (code === 0x401) return 0xA8; if (code === 0x451) return 0xB8; if (code >= 0x402 && code <= 0x40F) return code - 0x380; if (code >= 0x452 && code <= 0x45F) return code - 0x3C0; return cp1252[code] ?? (code <= 0xFF ? code : null); };
  const decode = (value) => {
    if (!/[РС](?![А-Яа-яЁё])/.test(value)) return value;
    try { const bytes = []; for (const char of value) { const byte = toByte(char); if (byte == null) return value; bytes.push(byte); } const binary = String.fromCharCode(...bytes); return decodeURIComponent(binary.split('').map((char) => '%' + char.charCodeAt(0).toString(16).padStart(2, '0')).join('')); } catch (_) { return value; }
  };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => { node.nodeValue = decode(node.nodeValue); });
  document.querySelectorAll('[aria-label], [alt]').forEach((node) => { if (node.hasAttribute('aria-label')) node.setAttribute('aria-label', decode(node.getAttribute('aria-label'))); if (node.hasAttribute('alt')) node.setAttribute('alt', decode(node.getAttribute('alt'))); });
};
repairRussianCopy();
