// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사

(() => {
  // T가 아닌 아무 문자나 사용 가능하지만 관례적으로 Type의 첫 글자인 T를 사용
  function echo<T extends string | number>(msg: T): T {
    return msg;
  }

  console.log(echo<string>('hello'));
  console.log(echo<number>(100));
  // console.log(echo<boolean>(true)); // 타입 에러

  const str = echo<string>('string');
  const num = echo<number>(123.123);

  console.log(str.toUpperCase(), num.toFixed(2));
})();
