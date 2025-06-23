// Promise
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 JS 내장 객체

// Promise는 작업에 따라서 3가지로 나눈다
// 1. Pending: 대기 상태
// 2. Fulfilled: 성공 상태
// 3. Rejected: 실패 상태

// 대기상태였다가 성공으로 바뀌는걸 resolve라고 하고, 
// 실패로 바뀌는걸 reject라고 한다.

const promise = new Promise((res, rej) => {
  // 비동기 작업을 실행하는 함수 
  // executor 함수

  setTimeout(() => {
    const num = 10;
    if(typeof num === 'number') {
      res(num + 10)
    } else {
      rej("num은 숫자여야 합니다.")
    }
  }, 2000)
})
// then 메소드 -> 그 후에

promise.then((value) => {
  console.log(value);
})

promise.catch((error) => {
  console.error(error);
});