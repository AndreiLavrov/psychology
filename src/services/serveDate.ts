import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

interface IServeLocStorageResults {
  getDate: (date: Date, options: DateTimeFormatOptions) => string;
  getDateNow: () => number;
}

export const serveDate = (): IServeLocStorageResults => {
  const getDate = (date: Date = new Date, options: DateTimeFormatOptions) => date.toLocaleString("en-US", options);
  const getDateNow = () => Date.now();

  return {
    getDate,
    getDateNow,
  };
};
