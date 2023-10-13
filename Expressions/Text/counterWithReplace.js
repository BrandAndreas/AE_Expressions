// Counts from the first to the second marker of the layer

const countFrom = 0;
const countTo = 100;
const decimalPlaces = 2;
const replaceFrom = ",";
const replaceTo = ".";

linear(time, marker.key(1).time, marker.key(2).time, countFrom, countTo).toFixed(decimalPlaces).replace(replaceFrom, replaceTo);