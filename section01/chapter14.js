// 스코프란?
// 변수나 함수에 접근하거나 호출할 수 있는 범위
// 전역 스코프 
// : 전체 영역에서 접근이 가능

// 지역 스코프 
// : 특정 영역에서만 접근 가능

let a = 1;  // 전역 스코프

function funcA() {
  let b = 2;  // 지역 스코프
  console.log(a);
}

funcA();
// console.log(b); // >> err