(() => {
  const video = document.querySelector('.hero-video');
  const button = document.querySelector('.sound');
  if (!video || !button) return;

  // Always request the full-quality hero file and bypass any cached low-quality copy.
  video.preload = 'auto';
  video.src = '/assets/hotel-hero.mp4?v=20260925-hq';
  video.load();

  const control = button.cloneNode(true);
  button.replaceWith(control);

  const setState = (muted) => {
    video.muted = muted;
    control.classList.toggle('is-on', !muted);
    const english = document.documentElement.lang === 'en';
    const label = muted ? (english ? 'Sound on' : 'Включить звук') : (english ? 'Sound off' : 'Выключить звук');
    control.setAttribute('aria-label', label);
    const text = control.querySelector('.sound-label');
    if (text) text.textContent = label;
  };

  const startVideo = async () => {
    setState(false);
    try {
      await video.play();
    } catch {
      setState(true);
      try { await video.play(); } catch {}
    }
  };

  control.addEventListener('click', () => {
    const muted = !video.muted;
    setState(muted);
    if (!muted) video.play().catch(() => setState(true));
  });

  video.addEventListener('loadedmetadata', startVideo, { once: true });
  if (video.readyState >= 1) startVideo();
})();
