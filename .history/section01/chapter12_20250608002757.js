
function fncA() {
  console.log("fncA");
}

let varA = fncA;
console.log(fncA)

let varB = function funcB() {
  console.log("funcB");
}

varB();