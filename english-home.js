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
