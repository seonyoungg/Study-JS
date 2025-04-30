"use strict";
// 인터페이스 다중 상속
(() => {
    const todo1 = {
        title: '할일1',
        content: '할일내용1',
    };
    console.log(todo1);
    const todo2 = {
        id: 123,
        title: '제목제목',
        done: false,
    };
    console.log(todo2);
    const todo3 = {
        id: 1,
        title: '할일제목',
        content: '할일내용',
        createdAt: new Date(),
        updatedAt: new Date(),
        done: true,
    };
    console.log(todo3);
    const todo4 = {
        title: '하이',
        id: 321,
    };
    console.log(todo4);
})();
