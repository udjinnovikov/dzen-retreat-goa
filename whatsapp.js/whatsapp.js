(function () {
  function syncWhatsAppLinks() {
    const isEnglish = document.documentElement.lang === 'en';
    document.querySelectorAll('a[href*="wa.me/79958390508"]').forEach((link) => {
      const url = new URL(link.href);
      const dateLink = link.closest('.date-list');
      const label = link.textContent.replace('\u2197', '').trim();
      let message;
      if (dateLink) {
        message = isEnglish
          ? `Hello! I would like to ask about the Goa Flow dates: ${label}.`
          : `\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u0425\u043e\u0447\u0443 \u0443\u0437\u043d\u0430\u0442\u044c \u043e \u0437\u0430\u0435\u0437\u0434\u0435 ${label}.`;
      } else if (/price|\u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c|prices/i.test(`${label} ${url.searchParams.get('text') || ''}`)) {
        message = isEnglish
          ? 'Hello! I would like to ask about Goa Flow prices.'
          : '\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u0425\u043e\u0447\u0443 \u0443\u0437\u043d\u0430\u0442\u044c \u043e \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 Goa Flow.';
      } else {
        message = isEnglish
          ? 'Hello! I would like to learn more about Goa Flow.'
          : '\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u0425\u043e\u0447\u0443 \u0443\u0437\u043d\u0430\u0442\u044c \u043e Goa Flow.';
      }
      url.searchParams.set('text', message);
      link.href = url.toString();
    });
  }
  syncWhatsAppLinks();
  document.querySelector('.language')?.addEventListener('click', () => setTimeout(syncWhatsAppLinks, 0));
})();
