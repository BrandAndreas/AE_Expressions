const d = new Date(Date(0));
// Format Settings
const divider = "."
const yearLength = 4; // use 2 for YY, 4 for YYYY

function padZeros(n){
  if(n <= 9){
    return "0" + n;
  }
  return n
}

const yearTrim = (yearLength===2) ? 2 : 0;

const day = padZeros(d.getDate());
const month = padZeros(d.getMonth()+1);
const year = d.getFullYear().toString().substring(yearTrim,4);

day + divider + month + divider + year;