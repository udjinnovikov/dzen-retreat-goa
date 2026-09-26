(() => {
  const video = document.querySelector('.hero-video');
  const button = document.querySelector('.sound');
  if (!video || !button) return;

  // Start the hero video reliably. Browsers allow autoplay when it is muted.
  video.autoplay = true;
  video.loop = true;
  video.playsInline = true;
  video.muted = true;
  video.defaultMuted = true;
  video.preload = 'auto';
  video.dataset.chunks = '/assets/hotel-hero-chunks/part-00,/assets/hotel-hero-chunks/part-01,/assets/hotel-hero-chunks/part-02,/assets/hotel-hero-chunks/part-03'; video.removeAttribute('src'); if (typeof loadChunkedVideo === 'function') loadChunkedVideo(video);

  const control = button.cloneNode(true);
  button.replaceWith(control);

  const setState = (muted) => {
    video.muted = muted;
    control.classList.toggle('is-on', !muted);
    control.setAttribute('aria-pressed', String(!muted));
    const english = document.documentElement.lang === 'en';
    const label = muted ? (english ? 'Sound on' : 'Включить звук') : (english ? 'Sound off' : 'Выключить звук');
    control.setAttribute('aria-label', label);
    const text = control.querySelector('.sound-label');
    if (text) {
      text.dataset.ru = muted ? 'Включить звук' : 'Звук включён';
      text.dataset.en = muted ? 'Sound on' : 'Sound is on';
      text.textContent = english ? text.dataset.en : text.dataset.ru;
    }
  };

  const playMuted = () => {
    video.muted = true;
    video.play().catch(() => {});
  };

  const startVideo = () => {
    setState(true);
    playMuted();
  };

  setState(true);
  control.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false;
      video.defaultMuted = false;
      setState(false);
      video.play().catch(() => {
        setState(true);
        playMuted();
      });
    } else {
      setState(true);
      playMuted();
    }
  });

  video.addEventListener('loadedmetadata', startVideo);
  video.addEventListener('canplay', startVideo);
  video.addEventListener('loadeddata', startVideo);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && video.paused) playMuted();
  });
  window.addEventListener('pageshow', () => {
    if (video.paused) playMuted();
  });

  video.load();
  startVideo();
})();
