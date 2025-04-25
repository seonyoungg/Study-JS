"use strict";
// 기본 타입
(() => {
    let str = ' hello'; //문자열
    let age = 123; //숫자
    let done = true; //불린
    // done = 100; //TypeError
    let nullVal = null; // null
    let emptyVal; //undefined
    let todo = { title: 'TypeScript공부', done: false }; //object
    let todoList = ['JavaScript', 'TypeScript']; // Array(string) 문자열배열
    let todoList2 = ['React', 'Next.js']; // Array(string) 문자열배열
    let todoListNum = [1, 2, 3, 4, 5, 6, 123]; // Array(number)
    // tuple : 길이가 고정되고 각 요소의 타입이 정의된 타입
    let items = ['타스핑', 10];
    //  가능한 사용X
    let userName = '이일구';
    userName = 219;
    // 차라리 unknown사용 -> 이것도 지양
    let userName2 = 'TSping';
    userName2 = 540;
    console.log(userName.toUpperCase());
    // console.log(userName2.toUpperCase()); // =>Error
})();
