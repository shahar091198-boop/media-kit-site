document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('video-modal');
  const frame = document.getElementById('video-modal-frame');
  const title = document.getElementById('video-modal-title');
  let savedScrollY = 0;
  let lastTrigger = null;

  function openModal(youtubeId, videoTitle, triggerEl) {
    savedScrollY = window.scrollY;
    lastTrigger = triggerEl;
    title.textContent = videoTitle || 'נגן וידאו';

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&playsinline=1`;
    iframe.title = videoTitle || 'YouTube video';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    frame.innerHTML = '';
    frame.appendChild(iframe);

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeydown);
    modal.querySelector('.video-modal__close').focus();
  }

  function closeModal() {
    modal.hidden = true;
    frame.innerHTML = '';
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKeydown);
    window.scrollTo({ top: savedScrollY, behavior: 'auto' });
    if (lastTrigger) lastTrigger.focus();
  }

  function onKeydown(e) {
    if (e.key === 'Escape') closeModal();
  }

  document.querySelectorAll('[data-video-trigger]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openModal(btn.dataset.youtubeId, btn.dataset.videoTitle, btn);
    });
  });

  modal.querySelectorAll('[data-close-modal]').forEach((el) => {
    el.addEventListener('click', closeModal);
  });
});
