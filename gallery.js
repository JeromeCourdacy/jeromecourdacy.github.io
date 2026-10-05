document.querySelectorAll('.project-media').forEach((gallery) => {
    const slides = Array.from(gallery.children);
    if (slides.length < 2) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'project-gallery';
    wrapper.setAttribute('role', 'group');
    wrapper.setAttribute('aria-label', gallery.getAttribute('aria-label'));
    gallery.before(wrapper);
    wrapper.append(gallery);
    gallery.classList.add('gallery-track');

    const previous = document.createElement('button');
    const next = document.createElement('button');
    previous.type = next.type = 'button';
    previous.className = 'gallery-arrow gallery-previous';
    next.className = 'gallery-arrow gallery-next';
    previous.textContent = '‹';
    next.textContent = '›';
    previous.setAttribute('aria-label', 'Previous project media');
    next.setAttribute('aria-label', 'Next project media');

    wrapper.append(previous, next);

    let current = 0;
    const update = () => {
        const width = gallery.clientWidth;
        if (!width) return;
        const index = Math.max(0, Math.min(slides.length - 1, Math.round(gallery.scrollLeft / width)));
        if (index !== current) {
            slides[current].querySelectorAll('video').forEach((video) => video.pause());
        }
        current = index;
        slides.forEach((slide, i) => { slide.inert = i !== current; });
    };
    const go = (direction) => {
        const index = (current + direction + slides.length) % slides.length;
        gallery.scrollTo({
            left: index * gallery.clientWidth,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        });
    };
    previous.addEventListener('click', () => go(-1));
    next.addEventListener('click', () => go(1));
    gallery.addEventListener('scroll', update, { passive: true });
    new ResizeObserver(() => {
        gallery.scrollTo({ left: current * gallery.clientWidth, behavior: 'instant' });
        update();
    }).observe(gallery);
    update();
});
