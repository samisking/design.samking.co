export const sortByKey = key => (a, b) => {
  if (a[key] < b[key]) return -1;
  if (a[key] > b[key]) return 1;
  return 0;
};

export const debounce = (func, wait) => {
  let timeout;

  return function (...args) { // eslint-disable-line func-names
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), (wait || 1));
  };
};
