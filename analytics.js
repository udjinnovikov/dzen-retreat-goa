(function () {
  var measurementId = 'G-FQ7PSB65HC';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { anonymize_ip: true });

  var metaPixelId = '1767548494196659';
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

  function event(name, params) {
    if (typeof window.gtag === 'function') window.gtag('event', name, params || {});
    if (typeof window.ym === 'function') window.ym(yandexMetrikaId, 'reachGoal', name, params || {});
  }

  document.addEventListener('click', function (eventObject) {
    var link = eventObject.target.closest && eventObject.target.closest('a');
    if (!link) return;
    var href = link.href || '';
    var label = (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80);

    if (/wa\.me|api\.whatsapp\.com/i.test(href)) {
      var section = link.dataset.cta || (link.closest('section') && link.closest('section').id) || 'site';
      event('generate_lead', { lead_channel: 'whatsapp', link_text: label, cta_location: section });
      if (window.fbq) window.fbq('track', 'Lead', { content_name: section });
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
}());
