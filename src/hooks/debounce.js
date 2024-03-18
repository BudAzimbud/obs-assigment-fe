import { useDebouncedCallback } from 'use-debounce';

export const useDebounce = (duration = 500) => {
  const debounced = useDebouncedCallback((action) => {
    action();
  }, duration);

  return debounced;
};
