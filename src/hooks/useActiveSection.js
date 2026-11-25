import { useEffect, useState } from 'react';

// Reports which section currently crosses the middle of the viewport, so the
// navbar can highlight its link.
export const useActiveSection = (ids, enabled = true) => {
  const [active, setActive] = useState(ids[0]);
  const idKey = ids.join('|');

  useEffect(() => {
    if (!enabled) return undefined;
    const elements = idKey
      .split('|')
      .map(id => document.getElementById(id))
      .filter(Boolean);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [idKey, enabled]);

  return active;
};
