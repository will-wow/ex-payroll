import R from "ramda";

const basicAdd = (x, y) => x + y;
const basicAddOne = x => basicAdd(x, 1);

const partialAdd = x => y => x + y;
const partialAddOne = partialAdd(1);

const curriedAdd = R.curry(basicAdd);
const curriedAddOne = curriedAdd(1);

const ramdaAddOne = R.add(1);

basicAddOne(2); // 3
partialAddOne(2); // 3
curriedAddOne(2); // 3
ramdaAddOne(2); // 3
