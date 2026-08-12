/* Inline SVG icon sprite, injected once at page load so every <svg><use> works
   without a network request. Add new icons here if the design needs one. */
document.addEventListener('DOMContentLoaded', () => {
  const sprite = document.createElement('div');
  sprite.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
    <symbol id="icon-instagram" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/>
    </symbol>
    <symbol id="icon-tiktok" viewBox="0 0 24 24">
      <path d="M14 3v10.8a2.9 2.9 0 1 1-2.4-2.85" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 3c.3 2.2 1.9 3.9 4 4.2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>
    <symbol id="icon-youtube" viewBox="0 0 24 24">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M10.5 9.3v5.4l4.6-2.7z" fill="currentColor"/>
    </symbol>
    <symbol id="icon-facebook" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M13.5 20v-6.2h2.1l.3-2.4h-2.4V9.9c0-.7.2-1.2 1.2-1.2h1.3V6.6c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.1-3.2 3.3v1.9H8.9v2.4h2v6.2" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
    </symbol>
    <symbol id="icon-eye" viewBox="0 0 24 24">
      <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" stroke-width="1.5"/>
    </symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24">
      <path d="M12 20s-7.5-4.6-9.7-9.1C.8 7.7 2.3 4.5 5.6 4c2.1-.3 3.9.8 6.4 3.3C14.5 4.8 16.3 3.7 18.4 4c3.3.5 4.8 3.7 3.3 6.9C19.5 15.4 12 20 12 20Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    </symbol>
    <symbol id="icon-bookmark" viewBox="0 0 24 24">
      <path d="M6 3.5h12v17l-6-4.2-6 4.2Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    </symbol>
    <symbol id="icon-share" viewBox="0 0 24 24">
      <path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6M16 6l-4-4-4 4M12 2.5V15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>
    <symbol id="icon-comment" viewBox="0 0 24 24">
      <path d="M4 4.5h16v11H9l-4 3.7v-3.7H4Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    </symbol>
    <symbol id="icon-person" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="3.4" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M4.5 20c1-4 4-5.8 7.5-5.8s6.5 1.8 7.5 5.8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </symbol>
    <symbol id="icon-play" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10.2" fill="rgba(255,254,253,0.9)" stroke="currentColor" stroke-width="1"/>
      <path d="M10 8.3v7.4l6.2-3.7z" fill="currentColor"/>
    </symbol>
    <symbol id="icon-menu" viewBox="0 0 24 24">
      <path d="M3 6.5h18M3 12h18M3 17.5h18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </symbol>
    <symbol id="icon-close" viewBox="0 0 24 24">
      <path d="M5 5l14 14M19 5 5 19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </symbol>
    <symbol id="icon-clock" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M12 7v5.3l3.5 2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>
    <symbol id="icon-phone" viewBox="0 0 24 24">
      <path d="M6.6 3.5 9 8l-2 1.6c1 2.4 3 4.4 5.4 5.4L14 13l4.5 2.4c.3 1.5-.1 3-1.4 3.9-1.7 1.2-4.2.8-6.6-.6-3.1-1.8-6-4.7-7.8-7.8C1.3 8.5.9 6 2.1 4.3 3 3 4.5 2.6 6 2.9Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
    </symbol>
    <symbol id="icon-mail" viewBox="0 0 24 24">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    </symbol>
  </svg>`;
  document.body.prepend(sprite.firstElementChild);
});
