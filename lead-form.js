(function () {
  'use strict';
  var form = document.querySelector('[data-lead-form]');
  if (!form) return;
  var base = 'https://docs.google.com/forms/d/e/1FAIpQLScdWuH5qnfso7yBOxrX1TXjYf0P7xwE2TxNjJnXg7Y2fUtIBA/';
  var status = form.querySelector('[data-form-status]');
  var copy = document.querySelector('.lead-enquiry-copy > p:last-child');
  var fields = {
    name: 'entry.1022545358', contact: 'entry.227166003',
    country: 'entry.364790686', retreat_date: 'entry.141899860', note: 'entry.805107914'
  };
  // Native POST opens Google's actual receipt. An opaque no-cors response
  // cannot establish acceptance and must not count as a confirmed lead.
  form.action = base + 'formResponse';
  form.method = 'post';
  form.target = '_self';
  if (copy) copy.textContent = 'Leave your contact details and ask about dates, rooms or the programme. No payment is required.';
  form.querySelector('button[type="submit"]').textContent = 'Send my enquiry ↗';
  form.querySelector('[name="country"]').required = false;
  form.querySelector('small').innerHTML = 'Your details are sent to our Google form. After sending, Google will show a confirmation page. Prefer a separate page? <a href="' + base + 'viewform" target="_blank" rel="noopener">Open the form ↗</a>';
  Object.keys(fields).forEach(function (name) {
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = fields[name];
    form.appendChild(input);
  });
  var started = false;
  form.addEventListener('focusin', function () {
    if (started) return;
    started = true;
    if (window.dzenTrack) window.dzenTrack('lead_form_start', { cta_location: 'english_home_enquiry' });
  });
  form.addEventListener('submit', function (event) {
    if (!form.reportValidity()) { event.preventDefault(); return; }
    Object.keys(fields).forEach(function (name) {
      form.elements[fields[name]].value = form.elements[name].value.trim();
    });
    if (status) {
      status.hidden = false;
      status.textContent = 'Opening the confirmation page… If it does not open, please use the separate form link below.';
    }
    if (window.dzenTrack) window.dzenTrack('lead_form_submit_attempt', {
      lead_channel: 'google_form', cta_location: 'english_home_enquiry',
      retreat_date: form.elements.retreat_date.value || 'not_selected'
    });
    // Keep the entries. Do not report generate_lead or Meta Lead without
    // a verified receipt from the receiving service.
  });
}());
