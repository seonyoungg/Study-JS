// 비동기 함수 - await 사용
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 async/await 사용
// ex08-09.ts 복사

// Promise를 반환하는 함수 p1
function p1() {
  return new Promise((resolve, reject) => {
    resolve(`p1 결과`); // 작업 성공 처리
  });
}
// async 키워드를 이용한 비동기 함수 a1
async function a1() {
  // 비동기 함수지만 내부 동작은 즉시 결과를 반환하는 동기처럼 보임
  return `a1 결과`;
}

// 실패하는 Promise를 반환하는 함수 p2
function p2() {
  return new Promise((resolve, reject) => {
    reject(`p2 에러`); // 작업 실패 처리
  });
}
// async 함수지만 내부에서 에러를 발생시키는 함수 a2
async function a2() {
  throw `a2 에러`; // 명시적으로 예외 발생
}

// 전체 비동기 흐름 테스트 함수
async function test() {
  try {
    const a1Result = await a1();
    console.log(a1Result);

    const p1Result = await p1();
    console.log(p1Result);

    const a2Result = await a2();
    console.log(a2Result);

    const p2Result = await p2();
    console.log(p2Result);
  } catch (err) {
    console.error(`실패`, err);
  }
}

// 프로그램 시작
console.log('1. 작업 시작.');

// 비동기 흐름 시작
test();

// test()의 비동기 결과와 관계없이 즉시 실행됨
console.log(
  '2. 작업 종료. 이 메세지가 f1 작업 완료 보다 먼저 나오면 비동기로 호출된다는 의미'
);
const a1Result = await a1();
console.log(a1Result);

export {}; // 빈 export를 추가해서 TS에게 모듈로 인식
