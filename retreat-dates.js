(function () {
  'use strict';
  var schedule = [
    ['2026-10-14', '14–25 October', '14–25 октября'],
    ['2026-10-26', '26 October–6 November', '26 октября–6 ноября'],
    ['2026-11-07', '7–18 November', '7–18 ноября'],
    ['2026-11-19', '19–30 November', '19–30 ноября'],
    ['2026-12-01', '1–12 December', '1–12 декабря'],
    ['2026-12-14', '14–25 December', '14–25 декабря'],
    ['2026-12-28', '28 December–8 January', '28 декабря–8 января'],
    ['2027-01-11', '11–22 January', '11–22 января'],
    ['2027-01-24', '24 January–4 February', '24 января–4 февраля'],
    ['2027-02-08', '8–19 February', '8–19 февраля'],
    ['2027-02-22', '22 February–5 March', '22 февраля–5 марта'],
    ['2027-03-07', '7–18 March', '7–18 марта'],
    ['2027-03-21', '21 March–1 April', '21 марта–1 апреля'],
    ['2027-04-04', '4–15 April', '4–15 апреля']
  ];
  function update() {
    var parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(new Date());
    function part(type) { return parts.find(function (item) { return item.type === type; }).value; }
    var today = part('year') + '-' + part('month') + '-' + part('day');
    var next = schedule.find(function (retreat) { return retreat[0] >= today; });
    var note = document.querySelector('.hero-sales-note');
    window.dzenNextRetreat = next ? next[1] : 'Dates on request';
    if (note) {
      var en = '12 days / 11 nights · from $650 · ' + (next ? 'next retreat ' + next[1] : 'ask about new dates');
      var ru = '12 дней / 11 ночей · от $650 · ' + (next ? 'ближайший заезд ' + next[2] : 'уточните новые даты');
      note.dataset.en = en;
      note.dataset.ru = ru;
      var text = document.documentElement.lang === 'en' ? en : ru;
      if (note.textContent !== text) note.textContent = text;
    }
    // Preserve anchor order for the existing translator and season filter.
    document.querySelectorAll('.date-list a').forEach(function (link, index) {
      if (schedule[index]) link.dataset.retreatExpired = String(schedule[index][0] < today);
    });
    document.querySelectorAll('[name="retreat_date"] option').forEach(function (option) {
      var retreat = schedule.find(function (item) { return item[1] === option.value; });
      if (retreat && retreat[0] < today) option.remove();
    });
  }
  var style = document.createElement('style');
  style.textContent = '.date-list a[data-retreat-expired="true"]{display:none!important}';
  document.head.appendChild(style);
  update();
  document.addEventListener('DOMContentLoaded', update);
  window.addEventListener('load', update);
  window.addEventListener('pageshow', update);
  new MutationObserver(update).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
}());
