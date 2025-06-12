// hooks/useScrollReveal.js
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function useScrollReveal() {
  useEffect(() => {
    const srtop = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 1000,
      reset: true
    });

    // Home Section
    srtop.reveal('.home .content h2', { origin: 'left', delay: 400 });
    srtop.reveal('.home .content p', { origin: 'left', delay: 300 });
    srtop.reveal('.home .content .btn', { origin: 'left', delay: 400 });
    srtop.reveal('.home .image', { origin: 'right', delay: 1000, duration: 2000 });

    // Social Media
    srtop.reveal('.home .linkedin', { origin: 'bottom', interval: 200 });
    srtop.reveal('.home .github', { origin: 'bottom', interval: 300 });
    srtop.reveal('.home .twitter', { origin: 'bottom', interval: 400 });
    srtop.reveal('.home .instagram', { origin: 'bottom', interval: 500 });
    srtop.reveal('.home .facebook', { origin: 'bottom', interval: 600 });

    // About
    srtop.reveal('.about .heading', { delay: 200 });
    srtop.reveal('.about-container .image', { origin: 'left', delay: 1000, duration: 2000 });
    srtop.reveal('.about .content h2, .about .content .tag, .about .content p, .about .content .box-container, .about .content .resumebtn', { delay: 200 });

    // Skills
    srtop.reveal('.skills .heading', { delay: 200 });
    srtop.reveal('.skills .sub-heading', { origin: 'left', delay: 200 });
    srtop.reveal('.skills .bar-sub-heading', { origin: 'right', delay: 200 });

    // Contact
    srtop.reveal('.contact .heading', { delay: 200 });
    srtop.reveal('.contact .container, .contact .container .form-group', { delay: 400 });

    // Projects
    srtop.reveal('.projects .heading', { delay: 200 });
    srtop.reveal('.filters', { origin: 'right', delay: 400 });
    srtop.reveal('.project-container', { origin: 'left', delay: 400 });
    srtop.reveal('.show-more', { origin: 'right', delay: 400 });

    // Footer
    srtop.reveal('.footer .box', { delay: 200 });
    srtop.reveal('.footer .box .share a', { origin: 'right', delay: 400 });

  }, []);
}
