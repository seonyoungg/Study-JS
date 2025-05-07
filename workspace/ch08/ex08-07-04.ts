// 비동기 함수 - 콜백 방식
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 콜백 함수 사용
// 비동기 함수의 작업 결과를 전달할 경우 콜백 함수에 인자값 전달
// 비동기 함수를 여러개 호출할 경우 결과의 순서가 보장되지 않음
// ex08-07-03.ts 복사

(() => {
  function f1(resolve: (result: string) => void) {
    //비동기함수
    console.log('3.f1 호출됨.');

    const delay = Math.floor(Math.random() * 1000 * 10);
    console.log(`4.${delay}ms 동안 작업중...`);

    setTimeout(() => {
      console.log(`f1 작업 완료`);
      // resolve(`f1 작업 결과`);
      resolve(`f1 작업결과`);
    }, delay);
    console.log('5.f1 리턴됨.');
  }

  function test() {
    console.log('2.test 호출됨.');
    f1((result) => {
      //콜백함수전달
      console.log(`8. f1 작업 완료된 후에 호출.`, result);
    });
    f1((result) => {
      //콜백함수전달
      console.log(`9. f1 작업 완료된 후에 호출.`, result);
    });
    f1((result) => {
      //콜백함수전달
      console.log(`10. f1 작업 완료된 후에 호출.`, result);
    });
    f1((result) => {
      //콜백함수전달
      console.log(`11. f1 작업 완료된 후에 호출.`, result);
    });
    f1((result) => {
      //콜백함수전달
      console.log(`12. f1 작업 완료된 후에 호출.`, result);
    });
    console.log('6.test 리턴됨');
  }

  // FIXME 프로그램 실행 흐름에 맞춰서 콘솔 출력 메세지 앞에 번호 추가
  console.log('1.작업 시작.');
  test();
  console.log('7.작업 종료.');
})();
