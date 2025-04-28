"use strict";
// 인터페이스 정의 - 선택적 속성, 읽기 전용 속성
(() => {
    const todo1 = {
        id: 1,
        title: '할일1',
        content: '내용1',
        done: false
    };
    console.log(todo1);
    const todo2 = {
        id: 2,
        title: '할일2',
        content: '내용2',
        done: false
    };
    // todo2.id=3  //readonly 속성으로 인한 수정불가
    todo2.content = '내용변경';
})();
