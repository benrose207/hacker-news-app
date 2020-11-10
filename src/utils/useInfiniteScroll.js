import { useState, useEffect } from 'react';

const STORY_TOTAL = 500;
const STORY_INCREMENT = 30;

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);

  useEffect(() => {
    if (!loading) return;

    if (count + STORY_INCREMENT >= STORY_TOTAL) {
      setCount(STORY_TOTAL);
    } else {
      setCount(count + STORY_INCREMENT);
    }

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    let observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || loading) return false;
      setLoading(true);
    }, options);

    let target = document.querySelector('.loading');
    observer.observe(target);

    return () => {
      observer.disconnect();
    }
  }, []);

  return { count };
}