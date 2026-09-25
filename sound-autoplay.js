(() => {
  const video = document.querySelector('.hero-video');
  const button = document.querySelector('.sound');
  if (!video || !button) return;

  // Remove the old click handler and install one clear sound control.
  const control = button.cloneNode(true);
  button.replaceWith(control);

  const setState = (muted) => {
    video.muted = muted;
    control.classList.toggle('is-on', !muted);
    const english = document.documentElement.lang === 'en';
    const label = muted
      ? (english ? 'Sound on' : 'Включить звук')
      : (english ? 'Sound off' : 'Выключить звук');
    control.setAttribute('aria-label', label);
    const text = control.querySelector('.sound-label');
    if (text) text.textContent = label;
  };

  const startVideo = async () => {
    setState(false);
    try {
      await video.play();
    } catch {
      // Browsers may block audible autoplay. Keep the video playing muted and
      // leave the visible control ready for a single tap to enable sound.
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
