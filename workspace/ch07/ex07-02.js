"use strict";
// 주요 내장 함수 - setTimeout
(() => {
    console.log('시작');
    const timerId = setTimeout((a, b) => {
        console.log('3초 후에 실행됩니다', a + b);
    }, 3000, 10, 20);
    console.log('종료');
    //timeout 작업취소
    clearTimeout(timerId);
})();
