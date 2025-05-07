"use strict";
// 비동기 함수 - async/await 사용
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 async/await 사용
// ex08-08.ts 복사
(() => {
    function f1() {
        return new Promise((resolve, reject) => {
            console.log('3.f1 호출됨.');
            const delay = Math.floor(Math.random() * 1000 * 10);
            console.log(`4.${delay}ms 동안 작업중...`);
            setTimeout(() => {
                console.log(`f1 작업 완료`);
                // resolve(`f1 작업 결과`);
                resolve(`f1 작업결과`);
            }, delay);
            console.log('5.f1 리턴됨.');
        });
    }
    async function test() {
        console.log('2.test 호출됨.');
        const result = await f1();
        console.log(`8. f1 작업 완료된 후에 호출.`, result);
        const result2 = await f1();
        console.log(`8. f1 작업 완료된 후에 호출.`, result2);
        console.log('6.test 리턴됨');
    }
    // FIXME 프로그램 실행 흐름에 맞춰서 콘솔 출력 메세지 앞에 번호 추가
    console.log('1.작업 시작.');
    test();
    console.log('7.작업 종료.');
})();
