// 에러 핸들링 - 에러 전달(throw)
// ex08-02.ts 복사

(() => {
  function f1() {
    const fn = new Function('x', 'y', 'reurn x+y');
    console.log(fn(10, 20));
  }

  function f2() {
    try {
      f1();
    } catch (err) {
      if (err instanceof Error) {
        console.error('에러발생', err.message);
      }
    }
  }

  f2();
  console.log('종료');
})();
