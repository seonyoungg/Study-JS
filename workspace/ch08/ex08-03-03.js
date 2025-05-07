"use strict";
// 에러 핸들링 - 에러 전달(throw)
// ex08-02.ts 복사
(() => {
    function f1() {
        const fn = new Function('x', 'y', 'reurn x+y');
        console.log(fn(10, 20));
    }
    function f2() {
        f1();
    }
    try {
        f2();
    }
    catch (err) {
        if (err instanceof Error) {
            // 에러가 여기까지 전달되어 잡힘
            console.error('에러발생', err.message);
        }
    }
    console.log('종료');
})();
// 에러가 발생하면 해당 에러가 호출 스택을 타고 상위 함수로 전달된다는 것
/**
 * JavaScript에서 함수 내부에서 발생한 에러는 해당 함수를 호출한 곳으로 전파
 * 아무도 catch하지 않으면 최종적으로 프로그램이 중단
 * 위 예제에서 f1 → f2 → try-catch 순서로 호출되었기 때문에, 에러는 f1에서 발생했지만 try에서 잡게됨
 */
