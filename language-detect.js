(function () {
  if (window.location.pathname !== '/') return;

  var savedLanguage = '';
  try { savedLanguage = window.localStorage.getItem('dzen_language') || ''; } catch (error) {}

  var browserLanguages = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || ''];
  var browserIsRussian = browserLanguages.some(function (language) {
    return /^ru(?:-|$)/i.test(language || '');
  });
  var preferredLanguage = savedLanguage || (browserIsRussian ? 'ru' : 'en');

  if (preferredLanguage === 'en') {
    window.location.replace('/en/' + window.location.search + window.location.hash);
  }
}());
