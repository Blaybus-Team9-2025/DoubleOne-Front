export const getKeyByValue = (options, value) => {
  const foundObj = options.find((obj) => Object.values(obj)[0] === value);
  return foundObj ? Object.keys(foundObj)[0] : null;
};
