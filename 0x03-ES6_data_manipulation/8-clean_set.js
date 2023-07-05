const cleanSet = (set, startString) => {
  const newArray = [];

  if (
    !set || !(set instanceof Set) || !startString
    || typeof startString !== 'string'
  ) {
    return '';
  }

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const afterSubString = value.substring(startString.length);
      if (afterSubString !== '') {
        newArray.push(afterSubString);
      }
    }
  }

  return newArray.join('-');
};

export default cleanSet;
