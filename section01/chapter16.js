// 1. 상수 객체
const animal = {
  type: "고양이", 
  name: "나비", 
  color: "black"
}

animal.age = 2; // 추가
animal.name = "까망이"  // 수정
delete animal.color;  // 삭제

// 2. 메소드
// -> 값이 함수인 프로퍼티
const person = {
  name: "이훈진", 
  sayHi: function () {
    console.log("훈진이 하이")
  },
}

person.sayHi();