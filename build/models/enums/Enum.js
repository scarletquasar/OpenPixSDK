class Enum {
  constructor(values) {
    values.forEach((value, index) => {
      if (typeof value === 'string') {
        this[value] = [index, value];
      }
    });
  }

}

export { Enum };