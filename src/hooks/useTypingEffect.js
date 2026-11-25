import { useEffect, useState } from 'react';

// Types each word, holds it, deletes it, then moves to the next one.
// When disabled (reduced motion) it simply shows the first word.
export const useTypingEffect = (
  words,
  {
    enabled = true,
    typeMs = 100,
    deleteMs = 50,
    holdMs = 2000,
    nextMs = 500,
    startMs = 1000,
  } = {}
) => {
  const wordKey = words.join('|');
  const [text, setText] = useState(enabled ? '' : words[0] ?? '');

  useEffect(() => {
    const list = wordKey ? wordKey.split('|') : [];
    if (!enabled || !list.length) {
      setText(list[0] ?? '');
      return undefined;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = list[wordIndex];
      charIndex += deleting ? -1 : 1;
      setText(word.slice(0, charIndex));

      let delay = deleting ? deleteMs : typeMs;
      if (!deleting && charIndex === word.length) {
        deleting = true;
        delay = holdMs;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % list.length;
        delay = nextMs;
      }
      timer = setTimeout(tick, delay);
    };

    setText('');
    timer = setTimeout(tick, startMs);
    return () => clearTimeout(timer);
  }, [wordKey, enabled, typeMs, deleteMs, holdMs, nextMs, startMs]);

  return text;
};
