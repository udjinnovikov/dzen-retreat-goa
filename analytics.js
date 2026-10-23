(function () {
  var measurementId = 'G-FQ7PSB65HC';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { anonymize_ip: true });

  var metaPixelId = '2533207423846579';
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  window.fbq('init', metaPixelId);
  window.fbq('track', 'PageView');

  var yandexMetrikaId = 111820360;
  window.ym = window.ym || function () { (window.ym.a = window.ym.a || []).push(arguments); };
  window.ym.l = +new Date();
  window.ym(yandexMetrikaId, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true
  });

  var metrikaTag = document.createElement('script');
  metrikaTag.async = true;
  metrikaTag.src = 'https://mc.yandex.ru/metrika/tag.js';
  document.head.appendChild(metrikaTag);

  var tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.appendChild(tag);

  function attribution() {
    var keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    var current = new URLSearchParams(window.location.search);
    var saved = {};
    try { saved = JSON.parse(sessionStorage.getItem('dzen_attribution') || '{}'); } catch (error) {}
    keys.forEach(function (key) {
      var value = current.get(key);
      if (value) saved[key] = value.slice(0, 120);
    });
    try { sessionStorage.setItem('dzen_attribution', JSON.stringify(saved)); } catch (error) {}
    return saved;
  }

  function event(name, params) {
    var payload = Object.assign({}, attribution(), params || {});
    if (typeof window.gtag === 'function') window.gtag('event', name, payload);
    if (typeof window.ym === 'function') window.ym(yandexMetrikaId, 'reachGoal', name, payload);
    return payload;
  }

  window.dzenAttribution = attribution;
  window.dzenTrack = event;

  if (document.querySelector('.hero-sales-note')) {
    event('view_price', { price_from: 650, next_retreat: '14–25 October', price_location: 'hero' });
  }

  document.addEventListener('click', function (eventObject) {
    var link = eventObject.target.closest && eventObject.target.closest('a');
    if (!link) return;
    var href = link.href || '';
    var label = (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80);

    if (/wa\.me|api\.whatsapp\.com/i.test(href)) {
      var section = link.dataset.cta || (link.closest('section') && link.closest('section').id) || 'site';
      event('click_whatsapp', { contact_channel: 'whatsapp', link_text: label, cta_location: section });
      if (window.fbq) window.fbq('track', 'Contact', { content_name: section });
      if (link.closest('.date-list')) event('select_retreat_date', { date_label: label });
    } else if (/t\.me\//i.test(href)) {
      event('join_community', { community: 'telegram', link_text: label });
    } else if (/max\.ru\//i.test(href)) {
      event('join_community', { community: 'max', link_text: label });
    } else if (link.closest('.team-grid')) {
      event('view_team_member', { team_member: label });
    }
  });

  document.addEventListener('play', function (eventObject) {
    if (eventObject.target && eventObject.target.tagName === 'VIDEO') {
      event('video_start', { video_location: eventObject.target.closest('.team, .testimonials, .hero')?.className || 'site' });
    }
  }, true);

  var priceBlock = document.querySelector('.dates');
  if (priceBlock && 'IntersectionObserver' in window) {
    var priceSeen = false;
    new IntersectionObserver(function (entries) {
      if (!priceSeen && entries.some(function (entry) { return entry.isIntersecting; })) {
        priceSeen = true;
        event('view_price', { price_from: 650, price_location: 'dates' });
      }
    }, { threshold: 0.25 }).observe(priceBlock);
  }

  document.addEventListener('dzen:lead-submit', function (eventObject) {
    var detail = eventObject.detail || {};
    event('generate_lead', {
      lead_channel: detail.channel || 'quick_enquiry',
      cta_location: detail.location || 'enquiry_form',
      retreat_date: detail.retreatDate || 'not_selected'
    });
    if (window.fbq) window.fbq('track', 'Lead', { content_name: detail.location || 'enquiry_form' });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var path = window.location.pathname;
    if (!/^\/en\/guide\/.+/.test(path) || /yoga-retreat-goa/.test(path) || document.querySelector('.retreat-discovery-cta')) return;
    var host = document.querySelector('main article, main .article, main');
    if (!host) return;
    var panel = document.createElement('aside');
    panel.className = 'retreat-discovery-cta';
    panel.innerHTML = '<p>PLANNING A WELLNESS TRIP?</p><h2>Discover our 12-day yoga retreat in Goa.</h2><span>Accommodation, vegetarian meals, practices, two excursions and ocean time in Ashwem.</span><a href="/en/guide/yoga-retreat-goa/">Explore the retreat →</a>';
    host.appendChild(panel);
    var style = document.createElement('style');
    style.textContent = '.retreat-discovery-cta{margin:4rem 0 0;padding:2.4rem;background:#f4e5dc;border:1px solid #dbc9bc}.retreat-discovery-cta p{margin:0 0 .7rem!important;font-size:.72rem!important;letter-spacing:.14em;color:#8b6e5c!important}.retreat-discovery-cta h2{margin:.2rem 0 1rem!important;font-size:clamp(1.8rem,4vw,3rem)!important}.retreat-discovery-cta span{display:block;max-width:650px;color:#665b54;line-height:1.6}.retreat-discovery-cta a{display:inline-block;margin-top:1.4rem;padding:.9rem 1.15rem;background:#df9871;color:#251f1b;text-decoration:none;font-weight:700}';
    document.head.appendChild(style);
  });
}());
