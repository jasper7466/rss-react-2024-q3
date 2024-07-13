import { useEffect, useState } from 'react';
import { Nullable } from '../types/common-types';

export const useLocalStorage = <T extends Record<string, unknown>>(
  key: string,
  initialData: Nullable<T> = null,
): [Nullable<T>, (data: T) => void] => {
  const [data, setData] = useState<Nullable<T>>(() => {
    const savedData = retrieve();
    return savedData || initialData;
  });

  useEffect(() => {
    if (data === null) {
      localStorage.removeItem(key);
      return;
    }

    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  function retrieve(): Nullable<T> {
    const stringifiedValue = localStorage.getItem(key);
    const data = stringifiedValue === null ? null : <T>JSON.parse(stringifiedValue);
    return data;
  }

  return [data, setData];
};
