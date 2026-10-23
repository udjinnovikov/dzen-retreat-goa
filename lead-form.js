(function () {
  var form = document.querySelector('[data-lead-form]');
  if (!form) return;
  form.addEventListener('submit', function (submitEvent) {
    submitEvent.preventDefault();
    if (!form.reportValidity()) return;
    var data = new FormData(form);
    var name = String(data.get('name') || '').trim();
    var country = String(data.get('country') || '').trim();
    var retreatDate = String(data.get('retreat_date') || '').trim();
    var contact = String(data.get('contact') || '').trim();
    var note = String(data.get('note') || '').trim();
    var message = [
      'Hello! I would like to know more about Dzen Retreat Goa.',
      'Name: ' + name,
      'Country: ' + country,
      'Preferred dates: ' + (retreatDate || 'Please help me choose'),
      'My contact: ' + contact,
      note ? 'Question: ' + note : ''
    ].filter(Boolean).join('\n');
    document.dispatchEvent(new CustomEvent('dzen:lead-submit', {
      detail: { channel: 'quick_enquiry_to_whatsapp', location: 'english_home_enquiry', retreatDate: retreatDate }
    }));
    var status = form.querySelector('[data-form-status]');
    if (status) {
      status.hidden = false;
      status.textContent = 'Your message is ready. Complete the enquiry in WhatsApp.';
    }
    window.open('https://wa.me/79958390508?text=' + encodeURIComponent(message), '_blank', 'noopener');
  });
}());
