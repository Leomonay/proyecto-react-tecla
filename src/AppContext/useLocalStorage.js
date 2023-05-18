import { useState } from "react";

export default function useLocalStorage(itemName, intialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  const value = localStorageItem ? JSON.parse(localStorageItem) : intialValue;
  const [item, setItem] = useState(value);
  const saveItem = (newValue) => {
    localStorage.setItem(itemName, JSON.stringify(newValue));
    setItem(newValue);
  };
  return [item, saveItem];
}
