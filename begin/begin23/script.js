let A = 4;
let B = 5;
let C = 6;
document.writeln("A=",A , " B=",B, "C=",C);


let S = A;
A = B;
B = C;
C = S;
document.write(" | ");
document.writeln("A=",A , " B=",B, "C=",C);
