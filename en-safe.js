(() => {
  'use strict';

  if (document.documentElement.lang !== 'en' && !window.location.pathname.startsWith('/en/')) return;

  const videoParts = {
    review: ['/assets/review-01-chunks/part-00', '/assets/review-01-chunks/part-01', '/assets/review-01-chunks/part-02', '/assets/review-01-chunks/part-03', '/assets/review-01-chunks/part-04'],
    team: ['/assets/team-video-web-chunks/part-00', '/assets/team-video-web-chunks/part-01', '/assets/team-video-web-chunks/part-02', '/assets/team-video-web-chunks/part-03']
  };

  const replaceText = (node, value) => {
    if (node && node.textContent.trim() !== value) node.textContent = value;
  };

  const loadChunkedVideo = async (video, parts, label) => {
    if (!video || video.dataset.enSafeVideo === 'loading' || video.dataset.enSafeVideo === 'ready') return;
    video.dataset.enSafeVideo = 'loading';
    try {
      const responses = await Promise.all(parts.map((url) => fetch(url)));
      if (responses.some((response) => !response.ok)) throw new Error('video part unavailable');
      const buffers = await Promise.all(responses.map((response) => response.arrayBuffer()));
      video.src = URL.createObjectURL(new Blob(buffers, { type: 'video/mp4' }));
      video.setAttribute('aria-label', label);
      video.load();
      video.dataset.enSafeVideo = 'ready';
    } catch (error) {
      video.dataset.enSafeVideo = 'error';
    }
  };

  const translateDynamicLabels = () => {
    document.querySelectorAll('[data-en]').forEach((node) => {
      const value = node.dataset.en;
      if (!value) return;
      if (node.children.length) {
        if (node.innerHTML !== value) node.innerHTML = value;
      }
      else replaceText(node, value);
    });

    document.querySelectorAll('.season-switch').forEach((group) => {
      group.setAttribute('aria-label', 'Seasons');
      group.querySelectorAll('button[data-en]').forEach((button) => replaceText(button, button.dataset.en));
    });
    document.querySelectorAll('.date-explorer').forEach((node) => node.setAttribute('aria-label', 'Choose a season'));
    document.querySelectorAll('[data-gallery-more] span, .gallery-more-button span').forEach((node) => replaceText(node, 'View full gallery'));

    const priceNote = document.querySelector('.price-note');
    if (priceNote) {
      if (/[А-Яа-яЁё]/.test(priceNote.textContent)) {
        priceNote.innerHTML = '<h3>Accommodation options</h3><div class="price-table"><p><span>Triple room</span><b>$650</b></p><p><span>Twin room · two single beds</span><b>$700</b></p><p><span>Double room · one large bed</span><b>$750</b></p><p><span>Single room</span><b>$800</b></p><p><span>Single LUX room</span><b>$850</b></p><p><span>Early booking discount</span><b>−$50</b></p></div><p><b>Included in the price:</b> accommodation, three daily meals, practices, two excursions and programme transfers.</p><p>A non-refundable $150 deposit secures your place and is included in the retreat price.</p><a class="button button-peach" target="_blank" rel="noopener">Ask about prices <b>↗</b></a>';
      }
      const priceLink = priceNote.querySelector('a');
      if (priceLink) {
        priceLink.href = 'https://wa.me/79958390508?text=Hello!%20I%20would%20like%20to%20ask%20about%20Goa%20Flow%20pricing';
        replaceText(priceLink, 'Ask about prices ↗');
      }
    }

    const replacements = {
      'Посмотреть всю галерею': 'View full gallery',
      'Свернуть галерею': 'Collapse gallery',
      'Выбор сезона': 'Choose a season',
      'Сезоны': 'Seasons'
    };
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (node.parentElement?.closest('script,style')) return;
      Object.entries(replacements).forEach(([from, to]) => {
        if (node.nodeValue.includes(from)) node.nodeValue = node.nodeValue.replaceAll(from, to);
      });
    });
  };

  const repairVideos = () => {
    document.querySelectorAll('.review-video-card video, .video-review video').forEach((video) => loadChunkedVideo(video, videoParts.review, 'Goa Flow guest video'));
    document.querySelectorAll('.team-showcase-video video, .team-film video').forEach((video) => loadChunkedVideo(video, videoParts.team, 'Meet the Dzen Retreat team'));
  };

  const run = () => { translateDynamicLabels(); repairVideos(); };
  const observe = () => {
    run();
    if (!document.body) return;
    let scheduled = false;
    new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => { scheduled = false; run(); });
    }).observe(document.body, { childList: true, subtree: true });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', observe, { once: true });
  else observe();
})();
