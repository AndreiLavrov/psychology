interface IServeLocStorageResults {
  setToLocStorage: (key: string, value: any[]) => void;
  getFromLocStorage: (key: string) => any[];
}

export const serveLocalStorage = (): IServeLocStorageResults => {
  const setToLocStorage = (key: string, value: any[]) => localStorage.setItem(key, JSON.stringify(value));
  const getFromLocStorage = (key: string) => JSON.parse(localStorage.getItem(key) || '[]');

  return {
    setToLocStorage,
    getFromLocStorage,
  }
};
