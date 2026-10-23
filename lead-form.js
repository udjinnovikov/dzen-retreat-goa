(function () {
  var form = document.querySelector('[data-lead-form]');
  if (!form) return;

  var endpoint = 'https://docs.google.com/forms/d/e/1FAIpQLScdWuH5qnfso7yBOxrX1TXjYf0P7xwE2TxNjJnXg7Y2fUtIBA/formResponse';
  var publicFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScdWuH5qnfso7yBOxrX1TXjYf0P7xwE2TxNjJnXg7Y2fUtIBA/viewform';
  var submitButton = form.querySelector('button[type="submit"]');
  var note = form.querySelector('small');
  var status = form.querySelector('[data-form-status]');
  var copy = document.querySelector('.lead-enquiry-copy > p:last-child');

  if (copy) copy.textContent = 'Leave your details here. Your enquiry will be saved securely and we will contact you directly.';
  if (submitButton) submitButton.textContent = 'Send my enquiry ↗';
  if (note) note.innerHTML = 'No payment is required. Prefer a separate page? <a href="' + publicFormUrl + '" target="_blank" rel="noopener">Open the secure Google form ↗</a>';

  form.addEventListener('submit', async function (submitEvent) {
    submitEvent.preventDefault();
    if (!form.reportValidity() || form.dataset.submitting === 'true') return;
    var data = new FormData(form);
    var retreatDate = String(data.get('retreat_date') || '').trim();
    var payload = new URLSearchParams();
    payload.set('entry.1022545358', String(data.get('name') || '').trim());
    payload.set('entry.227166003', String(data.get('contact') || '').trim());
    payload.set('entry.364790686', String(data.get('country') || '').trim());
    payload.set('entry.141899860', retreatDate);
    payload.set('entry.805107914', String(data.get('note') || '').trim());

    form.dataset.submitting = 'true';
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending…';
    }
    if (status) {
      status.hidden = false;
      status.textContent = 'Sending your enquiry…';
    }

    try {
      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString()
      });
      document.dispatchEvent(new CustomEvent('dzen:lead-submit', {
        detail: { channel: 'google_form', location: 'english_home_enquiry', retreatDate: retreatDate }
      }));
      form.reset();
      if (status) status.textContent = 'Thank you. Your enquiry has been sent. We will contact you shortly.';
      if (submitButton) submitButton.textContent = 'Enquiry sent ✓';
    } catch (error) {
      if (status) status.innerHTML = 'We could not send the form. Please <a href="' + publicFormUrl + '" target="_blank" rel="noopener">open the secure form here</a>.';
      if (submitButton) submitButton.textContent = 'Try again ↗';
    } finally {
      form.dataset.submitting = 'false';
      if (submitButton) submitButton.disabled = false;
    }
  });
}());
