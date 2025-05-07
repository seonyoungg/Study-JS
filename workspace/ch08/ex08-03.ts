// 에러 핸들링 - try...catch 문
// ex08-02.ts 복사

(() => {
  function f1() {
    // const obj = null;
    // obj.fn(); // TypeError

    try {
      const fn = new Function('x', 'y', 'reurn x+y');
      console.log(fn(10, 20));
    } catch (err) {
      if (err instanceof Error) {
        console.error('에러발생', err.message);
      }
    }
  }

  function f2() {
    f1();
  }

  f2();
  console.log('종료');
})();
