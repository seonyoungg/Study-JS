"use strict";
// // 선택적 파라미터(optional parameter)
(() => {
    function user(name, age) {
        console.log(name, age);
    }
    //매개변수 뒤에 ?을 붙이면 undefined도 전달 가능 => 선택적 파라미터
    user('하루', 5);
    user('나무');
})();
