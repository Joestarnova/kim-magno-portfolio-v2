import { useEffect, type RefObject } from 'react';

/** Keeps the nav link fill on whichever section is currently in view, and
 * locks it to the clicked link while a smooth-scroll settles. */
export function useNavSpy(navRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = navRef.current;
    if (!root) return;

    const links = Array.from(root.querySelectorAll<HTMLAnchorElement>('.km-navlink'));
    if (!links.length) return;

    const sections = links.map((a) => {
      const key = a.getAttribute('data-nav') ?? '';
      const el = key === 'home' ? null : document.querySelector<HTMLElement>('#' + key);
      return { key, link: a, el };
    });

    const ordered = sections
      .filter((s): s is { key: string; link: HTMLAnchorElement; el: HTMLElement } => !!s.el)
      .sort((a, b) => a.el.getBoundingClientRect().top - b.el.getBoundingClientRect().top);

    const setActive = (key: string) => {
      sections.forEach((s) => s.link.classList.toggle('active', s.key === key));
    };

    let navLock: string | null = null;
    let navSettle: ReturnType<typeof setTimeout> | undefined;

    const onScroll = () => {
      if (navLock) {
        setActive(navLock);
        return;
      }
      const line = 140;
      let current = 'home';
      ordered.forEach((s) => {
        if (s.el.getBoundingClientRect().top <= line) current = s.key;
      });
      const y = window.scrollY || document.documentElement.scrollTop;
      if (window.innerHeight + y >= document.documentElement.scrollHeight - 4) {
        const last = ordered[ordered.length - 1];
        if (last) current = last.key;
      }
      setActive(current);
    };

    const clickHandlers = links.map((a) => {
      const handler = () => {
        const key = a.getAttribute('data-nav') ?? '';
        setActive(key);
        navLock = key;
        clearTimeout(navSettle);
        const settle = () => {
          clearTimeout(navSettle);
          navSettle = setTimeout(() => {
            navLock = null;
            window.removeEventListener('scroll', settle);
            onScroll();
          }, 120);
        };
        window.addEventListener('scroll', settle, { passive: true });
        settle();
      };
      a.addEventListener('click', handler);
      return { a, handler };
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      clickHandlers.forEach(({ a, handler }) => a.removeEventListener('click', handler));
      clearTimeout(navSettle);
    };
  }, [navRef]);
}
