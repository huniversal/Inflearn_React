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
let varC = () => {
  return 1;
}
console.log(varC())
// >> 1