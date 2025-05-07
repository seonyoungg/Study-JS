"use strict";
// 타입 별칭으로 객체의 타입 선언
(() => {
    var _a;
    const u1 = {
        // name: '하루',
        age: 5,
    };
    const u2 = {
        // name: '나무',
        age: 8,
    };
    console.log(u1.age, (_a = u2.name) === null || _a === void 0 ? void 0 : _a.toUpperCase());
})();
