const x1 = 2;
const y1 = 3;
const x2 = 2;
const y2 = 8;
const x3 = 8;
const y3 = 3;

const a = (x1-x2) + (y1-y2);
const b = (x2-x3) + (y2-y3);
const c = (x3-x1) + (y3-y1);
const p = (a+b+c)/2;
document.write("p =",p)
console.log(1);
document.write('\n');
const S = Math.sqrt(p*(p-a)*(p-b)*(p-c));
document.write("S =",S);










