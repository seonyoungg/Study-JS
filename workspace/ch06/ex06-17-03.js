"use strict";
// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사
(() => {
    // T가 아닌 아무 문자나 사용 가능하지만 관례적으로 Type의 첫 글자인 T를 사용
    function echo(msg) {
        return msg;
    }
    console.log(echo('hello'));
    console.log(echo(100));
    // console.log(echo<boolean>(true)); // 타입 에러
    const str = echo('string');
    const num = echo(123.123);
    console.log(str.toUpperCase(), num.toFixed(2));
})();
