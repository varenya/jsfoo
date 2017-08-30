export const uniteUnique = (...args) =>
  args.reduce((acc, curr, index) => {
    const mapArray = makeObject(acc);
    const filter = curr.filter(item => !mapArray.hasOwnProperty(item));
    return [...acc, ...filter];
  });

const makeObject = arr =>
  arr.reduce((acc, curr) => {
    return {...acc, [curr]: curr};
  }, {});
