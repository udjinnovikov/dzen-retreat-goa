document.querySelectorAll('.eyebrow').forEach((el) => {
  el.textContent = el.textContent.replace(/^\d+\s*\/\s*/, '');
});

const days = [
  ['День 1 · Приезд и первое дыхание Гоа', 'Встречаем вас в аэропорту и помогаем спокойно добраться до отеля, чтобы после долгой дороги не думать о логистике. Заселяемся, знакомимся с пространством, бассейном и ближайшим пляжем, оставляем время на душ, отдых и первое ощущение Гоа. Вечером — тёплое знакомство с группой, мягкая практика, общий ужин и первый закат у океана.'],
  ['День 2 · Входим в ритм', 'Утренняя йога и дыхание, неспешный завтрак, море и отдых. Вечером — круг намерений: собираем то, с чем каждый приехал в это путешествие.'],
  ['День 3 · Тело, океан, свобода', 'Практика для силы и гибкости, время на пляже Ашвема и вечерняя медитация. День без гонки, в котором можно выбрать свой собственный темп.'],
  ['День 4 · Глубина и восстановление', 'Мягкая телесная практика, саунд-хилинг или глубокое расслабление. После обеда — свободное время, массаж или прогулка вдоль океана.'],
  ['День 5 · Живая Гоа', 'Выезжаем на экскурсию: природа, местные места и другая сторона штата. Возвращаемся к ужину, делимся впечатлениями и отдыхаем.'],
  ['День 6 · Пространство для себя', 'Утренняя практика, полезный завтрак и свободный день. Можно выбрать океан, бассейн, чтение, массаж или просто ничего не планировать.'],
  ['День 7 · Лёгкость движения', 'Йога в гамаках, танцевальная практика и вечер под звёздами. День, чтобы почувствовать тело живым, свободным и сильным.'],
  ['День 8 · Тишина и интеграция', 'Медитация, дыхательные практики, океан и личное время. Замедляемся, чтобы впечатления и новые ощущения успели стать частью вас.'],
  ['День 9 · Вторая экскурсия', 'Едем в новое место, знакомимся с культурой и природой Гоа. Вечером — отдых в отеле и тёплая встреча с группой.'],
  ['День 10 · Женские и глубокие практики', 'Утро начинается с йоги. Днём — глубокая практика или женский круг, вечером — пространство для честного разговора и поддержки.'],
  ['День 11 · Собираем главное', 'Заключительные занятия, любимые места у океана и праздничный ужин. Смотрим, что изменилось за эти дни и что хочется увезти с собой.'],
  ['День 12 · Возвращение домой', 'Завтрак, сборы и трансфер. Уезжаем без спешки — с контактами близких по духу людей, фотографиями и более тихим внутренним ритмом.']
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
  navigator.setAttribute('aria-label', 'Выбор дня программы');
  navigator.innerHTML = days.map((_, index) => `<button type="button" aria-label="Открыть день ${index + 1}" class="${index === 0 ? 'is-active' : ''}">${index + 1}</button>`).join('');
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
    <button class="gallery-item ${index === 0 ? 'gallery-hero' : ''} ${index === 1 || index === 5 ? 'gallery-portrait' : ''} ${index === 2 || index === 6 ? 'gallery-landscape' : ''}" data-full="/assets/gallery-web/photo-${number}.jpg" aria-label="Открыть фотографию ${index + 1}">
      <img loading="lazy" src="/assets/gallery-web/photo-${number}.jpg" alt="Фотография Dzen Retreat Goa ${index + 1}">
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
  previous.setAttribute('aria-label', 'Предыдущая фотография');
  next.setAttribute('aria-label', 'Следующая фотография');
  previous.textContent = '←';
  next.textContent = '→';
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
    <div class="section-heading"><p class="eyebrow ink">ОТЗЫВЫ УЧАСТНИКОВ</p><h2>Истории, после которых<br><em>хочется поехать.</em></h2><p>Смотрите видео и читайте впечатления тех, кто уже прожил Goa Flow.</p></div>
    <div class="reviews-layout">
      <article class="review-video-card">
        <video controls playsinline preload="metadata" poster="/assets/participants/participant-01.png" src="/assets/review-01-web.m4v"></video>
        <div><p class="eyebrow ink">ВИДЕООТЗЫВ</p><h3>Живое впечатление<br>об отдыхе и практике</h3><p>Настоящий рассказ участника — без постановки и рекламных обещаний.</p></div>
      </article>
      <article class="review-card"><p>«Этот ретрит стал перезагрузкой во всех смыслах. Атмосфера тепла и поддержки помогает отпустить лишнее и услышать себя».</p><footer><img src="/assets/participants/participant-01.png" alt="Анна"><span><b>Анна</b><small>Москва</small></span></footer></article>
      <article class="review-card"><p>«Еда выше всяких похвал: свежая, вкусная, разнообразная и с любовью приготовленная. После неё — лёгкость и энергия».</p><footer><img src="/assets/participants/participant-02.png" alt="Игорь"><span><b>Игорь</b><small>Новосибирск</small></span></footer></article>
      <article class="review-card"><p>«Маленькая группа делает ретрит особенным. Появляется доверие и глубина общения. Я увезла с собой новых друзей».</p><footer><img src="/assets/participants/participant-03.png" alt="Ольга"><span><b>Ольга</b><small>Ростов-на-Дону</small></span></footer></article>
      <article class="review-card"><p>«Океан рядом — отдельная магия. Утренние практики под шум волн и закаты помогают по-настоящему замедлиться».</p><footer><img src="/assets/participants/participant-04.png" alt="Ирина"><span><b>Ирина</b><small>Владивосток</small></span></footer></article>
    </div>`;
}

// Local preview uses the original MP4 files so the video controls work reliably.
// The production build will receive web-optimised copies before publishing.
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  heroVideo.removeAttribute('data-chunks');
  heroVideo.src = '/assets/hotel-hero-web.m4v';
  heroVideo.load();
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
  footerContacts.insertAdjacentHTML('beforeend', '<br><a data-telegram href="https://t.me/retreat_v_goa" target="_blank" rel="noopener">Telegram-канал: @retreat_v_goa</a><br><a class="max-community" href="https://max.ru/join/MrExWRjMBva_JYBE8XEygJgYx54DlIH1YflyJEUU8CM" target="_blank" rel="noopener">Группа в Max</a>');
}

if (!document.querySelector('.community-dock')) {
  document.body.insertAdjacentHTML('beforeend', `
    <aside class="community-dock" aria-label="Сообщества Dzen Retreat">
      <a class="community-link community-link--telegram" href="https://t.me/retreat_v_goa" target="_blank" rel="noopener"><span aria-hidden="true">✈</span><b>Telegram</b><small>канал ретрита</small></a>
      <a class="community-link community-link--max" href="https://max.ru/join/MrExWRjMBva_JYBE8XEygJgYx54DlIH1YflyJEUU8CM" target="_blank" rel="noopener"><span aria-hidden="true">M</span><b>Max</b><small>группа участников</small></a>
    </aside>`);
}

const englishDays = [
  ['Day 1 · Arrival and your first breath of Goa', 'We meet you at the airport and help you reach the hotel without having to think about logistics after a long journey. Settle in, discover the space, pool and nearby beach, then take time to rest and feel Goa for the first time. In the evening — a warm group welcome, gentle practice, shared dinner and your first sunset by the ocean.'],
  ['Day 2 · Finding the rhythm', 'Morning yoga and breathwork, a slow breakfast, the sea and time to rest. In the evening, we gather for an intention circle and name what each person has come here for.'],
  ['Day 3 · Body, ocean, freedom', 'A practice for strength and flexibility, time at Ashwem beach and an evening meditation. A day without rushing, where you choose your own pace.'],
  ['Day 4 · Depth and restoration', 'Gentle bodywork, sound healing or deep relaxation. After lunch — free time, a massage or a walk along the ocean.'],
  ['Day 5 · Living Goa', 'We head out to explore nature, local places and another side of Goa. Back for dinner, stories and rest.'],
  ['Day 6 · Space for yourself', 'Morning practice, a nourishing breakfast and an open day. Choose the ocean, pool, reading, a massage or simply make no plans at all.'],
  ['Day 7 · The lightness of movement', 'Hammock yoga, dance practice and an evening under the stars. A day to feel your body alive, free and strong.'],
  ['Day 8 · Silence and integration', 'Meditation, breathwork, the ocean and personal time. We slow down so new impressions have time to become part of you.'],
  ['Day 9 · A second excursion', 'We travel to a new place and get closer to Goa’s culture and nature. The evening is for resting at the hotel and a warm group gathering.'],
  ['Day 10 · Women’s and deep practices', 'The morning starts with yoga. During the day — a deep practice or women’s circle; in the evening — a space for honest conversation and support.'],
  ['Day 11 · Gathering what matters', 'Closing practices, favourite ocean places and a celebratory dinner. We notice what has shifted and what you want to carry home.'],
  ['Day 12 · Going home', 'Breakfast, packing and transfer. We leave without rushing — with new friends, photographs and a quieter inner rhythm.']
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
  navigator.setAttribute('aria-label', isEnglish ? 'Choose a programme day' : 'Выбор дня программы');
  navigator.innerHTML = items.map((_, index) => `<button type="button" aria-label="${isEnglish ? 'Open day' : 'Открыть день'} ${index + 1}" class="${index === 0 ? 'is-active' : ''}">${index + 1}</button>`).join('');
  const panels = Array.from(programme.querySelectorAll('details'));
  Array.from(navigator.querySelectorAll('button')).forEach((button, index, buttons) => button.addEventListener('click', () => {
    panels.forEach((panel, panelIndex) => { panel.open = panelIndex === index; });
    buttons.forEach((item, itemIndex) => item.classList.toggle('is-active', itemIndex === index));
    panels[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }));
}

const copyPairs = {
  'ПИТАНИЕ': 'FOOD',
  'Еда, которая даёт энергию.': 'Food that gives you energy.',
  'Три полноценных вегетарианских приёма пищи в день и полезные перекусы. В меню — свежие овощи, фрукты, зелень и блюда, которые поддерживают тело во время практик.': 'Three wholesome vegetarian meals a day plus nourishing snacks. The menu includes fresh vegetables, fruit, greens and dishes that support your body through practice.',
  'Свежие натуральные продукты': 'Fresh, natural ingredients',
  'Сбалансированное меню': 'A balanced menu',
  'Учёт индивидуальных потребностей': 'Individual dietary needs considered',
  'ГАЛЕРЕЯ': 'GALLERY',
  'Почувствуйте атмосферу до поездки.': 'Feel the atmosphere before you go.',
  'Нажмите на фотографию, чтобы посмотреть её крупнее.': 'Select a photograph to view it in full size.',
  'ОТЗЫВЫ УЧАСТНИКОВ': 'GUEST STORIES',
  'Истории, после которых хочется поехать.': 'Stories that make you want to go.',
  'Смотрите видео и читайте впечатления тех, кто уже прожил Goa Flow.': 'Watch the video and read impressions from people who have already experienced Goa Flow.',
  'ВИДЕООТЗЫВ': 'VIDEO STORY',
  'Живое впечатление об отдыхе и практике': 'A real impression of the retreat and practice',
  'Настоящий рассказ участника — без постановки и рекламных обещаний.': 'A real participant story — no staging and no advertising promises.',
  'КОМАНДА': 'THE TEAM',
  'Люди, которые будут рядом.': 'The people who will be there with you.',
  'Нажмите на человека, чтобы познакомиться с его подходом и практиками на Goa Flow.': 'Select a person to learn about their approach and practices at Goa Flow.',
  'ДАТЫ И СТОИМОСТЬ': 'DATES & PRICES',
  'Выберите свой заезд.': 'Choose your retreat dates.',
  'Количество мест в каждом заезде ограничено.': 'Places are limited for every retreat.',
  'Варианты размещения': 'Accommodation options',
  'Трёхместное размещение': 'Triple room',
  'Одноместное размещение': 'Single room',
  'Скидка за раннее бронирование': 'Early booking discount',
  'Узнать стоимость ↗': 'Ask about prices ↗',
  'Telegram-канал: @retreat_v_goa': 'Telegram channel: @retreat_v_goa',
  'Группа в Max': 'Max group',
  'канал ретрита': 'retreat channel',
  'группа участников': 'participant group'
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
        <p class="eyebrow ink" data-ru="ВИДЕО О КОМАНДЕ" data-en="MEET THE TEAM">ВИДЕО О КОМАНДЕ</p>
        <h3 data-ru="Познакомьтесь с нами<br>до путешествия." data-en="Meet us before<br>your journey.">Познакомьтесь с нами<br>до путешествия.</h3>
        <p data-ru="Несколько живых минут о людях, которые создают пространство Goa Flow — с вниманием к каждому участнику и без суеты." data-en="A few real minutes with the people who shape Goa Flow — with attention for every guest and no rushing.">Несколько живых минут о людях, которые создают пространство Goa Flow — с вниманием к каждому участнику и без суеты.</p>
      </div>
      <div class="team-showcase-video">
        <video controls playsinline preload="metadata" poster="/assets/gallery-web/photo-005.jpg" src="/assets/team-video-web.m4v"></video>
      </div>
    </div>`);
}

// Use the generous space below the dates heading for a useful, lightweight
// season chooser. It filters the existing departure links without replacing them.
const datesSection = document.querySelector('.dates');
if (datesSection && !datesSection.querySelector('.date-explorer')) {
  const heading = datesSection.querySelector('.section-heading');
  heading?.insertAdjacentHTML('afterend', `
    <div class="date-explorer" aria-label="Выбор сезона">
      <div><p class="eyebrow ink" data-ru="ВЫБЕРИТЕ СЕЗОН" data-en="CHOOSE A SEASON">ВЫБЕРИТЕ СЕЗОН</p><p class="date-explorer-lead" data-ru="Каждый заезд — 12 дней у океана. Нажмите на сезон, чтобы быстро выбрать удобные даты." data-en="Every retreat is 12 days by the ocean. Select a season to quickly find dates that suit you.">Каждый заезд — 12 дней у океана. Нажмите на сезон, чтобы быстро выбрать удобные даты.</p></div>
      <div class="season-switch" role="group" aria-label="Сезоны"><button class="is-active" type="button" data-season="all" data-ru="Все даты" data-en="All dates">Все даты</button><button type="button" data-season="autumn" data-ru="Осень" data-en="Autumn">Осень</button><button type="button" data-season="winter" data-ru="Зима" data-en="Winter">Зима</button><button type="button" data-season="spring" data-ru="Весна" data-en="Spring">Весна</button></div>
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

const englishDateLabels = ['14–25 October', '26 October–6 November', '7–18 November', '19–30 November', '1–12 December', '14–25 December', '28 December–8 January', '11–22 January', '24 January–4 February', '8–19 February', '22 February–5 March', '7–18 March', '21 March–1 April', '4–15 April'];
const russianDateLabels = ['14–25 октября', '26 октября–6 ноября', '7–18 ноября', '19–30 ноября', '1–12 декабря', '14–25 декабря', '28 декабря–8 января', '11–22 января', '24 января–4 февраля', '8–19 февраля', '22 февраля–5 марта', '7–18 марта', '21 марта–1 апреля', '4–15 апреля'];
const reviewCopy = {
  ru: [
    'Истории, после которых<br><em>хочется поехать.</em>', 'Живое впечатление<br>об отдыхе и практике',
    '«Этот ретрит стал перезагрузкой во всех смыслах. Атмосфера тепла и поддержки помогает отпустить лишнее и услышать себя».',
    '«Еда выше всяких похвал: свежая, вкусная, разнообразная и с любовью приготовленная. После неё — лёгкость и энергия».',
    '«Маленькая группа делает ретрит особенным. Появляется доверие и глубина общения. Я увезла с собой новых друзей».',
    '«Океан рядом — отдельная магия. Утренние практики под шум волн и закаты помогают по-настоящему замедлиться».'
  ],
  en: [
    'Stories that make you<br><em>want to go.</em>', 'A real impression<br>of the retreat and practice',
    '“This retreat was a reset in every sense. Its warmth and support helped me let go of what I no longer needed and hear myself again.”',
    '“The food was exceptional: fresh, delicious, varied and prepared with care. It left me feeling light and full of energy.”',
    '“A small group makes the retreat special. Trust and real connection appear. I came home with new friends.”',
    '“Having the ocean so close is its own magic. Morning practice to the sound of waves and sunsets truly help you slow down.”'
  ]
};

function setNode(selector, value, html = false) {
  const node = document.querySelector(selector);
  if (node) html ? node.innerHTML = value : node.textContent = value;
}

function translateFullPage(isEnglish) {
  const copy = isEnglish ? {
    nav: ['About', 'Programme', 'Gallery', 'Team', 'Dates & prices'], mobile: ['About', '12-day programme', 'Accommodation', 'Food', 'Practices', 'Gallery', 'Guest stories', 'Team', 'Dates & prices', 'Hampi', 'Partner programme', 'Contacts', 'Message on WhatsApp ↗'],
    menu: 'Menu', programmeEyebrow: 'PROGRAMME', programmeTitle: '12 days with room<br><em>for you.</em>', foodTitle: 'Food that gives<br><em>you energy.</em>', galleryTitle: 'Feel the atmosphere<br><em>before you go.</em>',
    teamTitle: 'The people who<br><em>will be there with you.</em>', datesTitle: 'Choose your<br><em>retreat dates.</em>', datesMeta: '12 days / 11 nights · from $650<br>Places are limited for every retreat.',
    accommodation: ['Accommodation options', 'Triple room', 'Twin room · two separate beds', 'Double room · two large beds', 'Single room', 'Single LUX room', 'Early booking discount'],
    included: 'Included: accommodation, three meals a day, practices, two excursions and scheduled transfers.', deposit: 'To reserve your place, a non-refundable $150 deposit is required and is included in the retreat price.', price: 'Ask about prices ↗', teamMore: 'Meet the full team and practices ↗',
    roles: ['Creator and director of Dzen Retreat', 'Kundalini yoga and breathwork', 'Women’s and deep practices', 'Administrator, hammock yoga and dance', 'Vegetarian cuisine for Goa Flow'],
    teamNames: ['Evgeniy Novikov', 'Roman', 'Yulia Rufan · Mooji', 'Polina Polyakova', 'Chef Jyoti'], reviewNames: ['Anna', 'Igor', 'Olga', 'Irina'], reviewCities: ['Moscow', 'Novosibirsk', 'Rostov-on-Don', 'Vladivostok']
  } : {
    nav: ['О ретрите', 'Программа', 'Галерея', 'Команда', 'Даты и цены'], mobile: ['О ретрите', 'Программа 12 дней', 'Проживание', 'Питание', 'Практики', 'Галерея', 'Отзывы', 'Команда', 'Даты и цены', 'Хампи', 'Партнёрская программа', 'Контакты', 'Написать в WhatsApp ↗'],
    menu: 'Меню', programmeEyebrow: 'ПРОГРАММА', programmeTitle: '12 дней, в которых<br><em>есть место для вас.</em>', foodTitle: 'Еда, которая<br><em>даёт энергию.</em>', galleryTitle: 'Почувствуйте<br><em>атмосферу до поездки.</em>',
    teamTitle: 'Люди, которые<br><em>будут рядом.</em>', datesTitle: 'Выберите<br><em>свой заезд.</em>', datesMeta: '12 дней / 11 ночей · от $650<br>Количество мест в каждом заезде ограничено.',
    accommodation: ['Варианты размещения', 'Трёхместное размещение', 'Двухместное TWIN · две отдельные кровати', 'Двухместное DOUBLE · две большие кровати', 'Одноместное размещение', 'Одноместное LUX', 'Скидка за раннее бронирование'],
    included: 'В стоимость включены: проживание, трёхразовое питание, практики, две экскурсии и трансфер по программе.', deposit: 'Бронирование места — невозвратная предоплата $150, которая входит в стоимость тура.', price: 'Узнать стоимость ↗', teamMore: 'Вся команда и направления практик ↗',
    roles: ['Создатель и руководитель Dzen Retreat', 'Кундалини-йога и дыхательные практики', 'Женские и глубокие практики', 'Администратор, йога в гамаках, танцы', 'Вегетарианская кухня Goa Flow'],
    teamNames: ['Евгений Новиков', 'Роман', 'Юля Руфан · Муджи', 'Полина Полякова', 'Шеф-повар Джоти'], reviewNames: ['Анна', 'Игорь', 'Ольга', 'Ирина'], reviewCities: ['Москва', 'Новосибирск', 'Ростов-на-Дону', 'Владивосток']
  };
  document.querySelectorAll('.desktop-nav > a').forEach((link, index) => { if (copy.nav[index]) link.textContent = copy.nav[index]; });
  document.querySelectorAll('.mobile-nav > a').forEach((link, index) => { if (copy.mobile[index]) link.textContent = copy.mobile[index]; });
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
    if (!arrow) link.insertAdjacentHTML('beforeend', '<b>↗</b>');
  });
  const priceNote = document.querySelector('.price-note');
  if (priceNote) {
    const prices = ['$650', '$700', '$750', '$800', '$850', '−$50'];
    priceNote.innerHTML = `<h3>${copy.accommodation[0]}</h3><div class="price-table">${copy.accommodation.slice(1).map((label, index) => `<p><span>${label}</span><b>${prices[index]}</b></p>`).join('')}</div><p>${copy.included}</p><p>${copy.deposit}</p><a class="button button-peach" href="https://wa.me/79958390508?text=Здравствуйте!%20Хочу%20узнать%20о%20стоимости%20Goa%20Flow" target="_blank" rel="noopener">${copy.price.replace(' ↗','')} <b>↗</b></a>`;
  }
  document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.setAttribute('aria-label', isEnglish ? `Open photograph ${index + 1}` : `Открыть фотографию ${index + 1}`);
    const image = item.querySelector('img'); if (image) image.alt = isEnglish ? `Dzen Retreat Goa photograph ${index + 1}` : `Фотография Dzen Retreat Goa ${index + 1}`;
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


// Remove only the legacy gallery fallback appended by older page builds.
(() => {
  const removeLegacyGalleryFallback = () => {
    document.querySelectorAll('.custom-gallery-item').forEach((node) => node.remove());
  };
  const galleryGrid = document.querySelector('.gallery-grid');
  if (!galleryGrid) return;
  const observer = new MutationObserver(removeLegacyGalleryFallback);
  observer.observe(galleryGrid, { childList: true });
  removeLegacyGalleryFallback();
  window.addEventListener('load', () => {
    removeLegacyGalleryFallback();
    setTimeout(removeLegacyGalleryFallback, 500);
  });
})();


// Remove only the six legacy photo cards appended by the old inline gallery fallback.
(() => {
  const removeLegacyPhotoCards = () => {
    document.querySelectorAll('.gallery-grid button[aria-label="Открыть дополнительное фото"]').forEach((node) => node.remove());
  };
  const galleryGrid = document.querySelector('.gallery-grid');
  if (!galleryGrid) return;
  const observer = new MutationObserver(removeLegacyPhotoCards);
  observer.observe(galleryGrid, { childList: true });
  removeLegacyPhotoCards();
  window.addEventListener('load', () => {
    removeLegacyPhotoCards();
    setTimeout(removeLegacyPhotoCards, 500);
  });
})();
