import { useEffect, useState } from "react";
const apiUrl = process.env.REACT_APP_API_URL

const isFalsy = (value: any) => (value === 0 ? false : !value);

// 清理value为空的属性
const cleanObject = (obj: object) => {
  const result: object = { ...obj };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

// 自定义hook
const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// 防抖
const useDebounce = <Q>(value: Q, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const time = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(time);
  }, [value, delay]);
  return debounceValue;
};

const useArray = <V>(initialProps: V[])  => {
  const [value, setValue] = useState(initialProps)
  return {
    value,
    setValue,
    add: (item: V) => {
      setValue([...value, item])
    },
    clear: () => {},
    del: () => {}
  }
}

export { cleanObject, useMount, useDebounce, useArray }