(function () {
  // The full home template is shared by both languages. Run the same language
  // switch used by the visible control after the enhancement scripts load.
  var language = document.querySelector('.language');
  if (!language) return;
  document.documentElement.lang = 'ru';
  language.click();
  document.documentElement.lang = 'en';
  language.textContent = 'RU';
  language.setAttribute('aria-label', 'Switch to Russian');
  document.title = 'Dzen Retreat Goa — yoga retreat in Goa, India';
}());

window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('img[alt]').forEach(function (image) {
    var alt = image.getAttribute('alt') || '';
    if (/[А-Яа-яЁё]/.test(alt)) image.alt = 'Dzen Retreat Goa';
  });
  var desktopNav = document.querySelector('.desktop-nav');
  var mobileNav = document.querySelector('.mobile-nav');
  if (desktopNav) desktopNav.setAttribute('aria-label', 'Main navigation');
  if (mobileNav) mobileNav.setAttribute('aria-label', 'Full navigation');
  document.querySelectorAll('a[href="/team/"]').forEach(function (link) { link.href = '#team'; });
  document.querySelector('.season-switch')?.setAttribute('aria-label', 'Seasons');
  document.querySelector('[aria-label="Сообщества Dzen Retreat"]')?.setAttribute('aria-label', 'Dzen Retreat communities');
});
