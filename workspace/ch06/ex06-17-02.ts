// echo 함수 - 제네릭 함수
// ex06-17.ts 복사
(() => {
  // // FIXME string 타입 매개변수를 받고 string 타입을 리턴하는 함수의 타입 지정
  // function echoString(msg: string): string {
  //   return msg;
  // }
  // // FIXME number 타입 매개변수를 받고 number 타입을 리턴하는 함수의 타입 지정
  // function echoNumber(msg: number): number {
  //   return msg;
  // }
  // // FIXMEboolean 타입 매개변수를 받고 boolean 타입을 리턴하는 함수의 타입 지정
  // function echoBoolean(msg: boolean): boolean {
  //   return msg;
  // }

  // T가 아닌 아무 문자나 사용 가능하지만 관례적으로 Type의 첫 글자인 T를 사용
  function echo<T>(msg: T): T {
    return msg;
  }

  console.log(echo<string>('hello'));
  console.log(echo<number>(100));
  console.log(echo<boolean>(true));

  function echo2<T extends { length: number }>(msg: T): T {
    return msg;
  }

  const str2 = echo2<string>('hello');
  const num2 = echo2<number[]>([10, 20]);

  console.log(str2.length, num2.length);
})();
