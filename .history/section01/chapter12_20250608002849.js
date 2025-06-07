
function fncA() {
  console.log("fncA");
}

let varA = fncA;
console.log(fncA)

let varB = function () {
  console.log("funcB");
}

varB();