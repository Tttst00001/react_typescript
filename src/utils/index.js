import { useEffect, useState } from "react";

const isFalsy = (value) => (value === 0 ? false : !value);

// 清理value为空的属性
const cleanObject = (obj) => {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

// 自定义hook
const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

// 防抖
const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const time = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(time);
  }, [value, delay]);
  return debounceValue;
};

export { cleanObject, useMount, useDebounce };
