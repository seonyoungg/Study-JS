"use strict";
// 내장 객체 - Date
(() => {
    const today = new Date();
    console.log(today);
    console.log(today.getFullYear());
    console.log(today.getMonth() + 1);
    console.log(today.getDate());
    console.log(today.getHours());
    console.log(today.getMinutes());
    console.log(today.getSeconds());
    console.log(today.getTime());
})();
