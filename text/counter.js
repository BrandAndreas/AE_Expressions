// Counts from the first to the second marker of the layer

const countFrom = 0;
const countTo = 100;
Math.floor(linear(time, marker.key(1).time, marker.key(2).time, countFrom, countTo));