"use strict";
// 인터페이스 상속
(() => {
    const todo1 = {
        // id:1,
        title: '할일1',
        content: '내용1',
        // done:false
    };
    console.log('등록', todo1);
    const todo2 = {
        id: 1,
        title: '할일2',
        content: '내용2',
        done: false
    };
    console.log('할일상세조회', todo2);
})();
