// 1. 함수 표현식
function fncA() {
  // console.log("fncA");
}

let varA = fncA;
console.log(fncA)

let varB = function () {
  // console.log("funcB");
}

varB();

// 2. 화살표 함수
let varC = (value) => {
  return value+1;
}
console.log(varC(10))
// >> 1