// 인터페이스 다중 상속

(() => {
  // 할일 등록시 사용
  interface TodoRegist {
    title: string;
    content: string;
  }

  // 할일 목록 조회시 사용
  interface TodoList {
    id: number;
    title: string;
    done: boolean;
  }

  // 할일 상세 조회시 사용
  interface TodoInfo extends TodoRegist, TodoList {
    createdAt: Date;
    updatedAt: Date;
  }

  const todo1: TodoRegist = {
    title: '할일1',
    content: '할일내용1',
  };

  console.log(todo1);

  const todo2: TodoList = {
    id: 123,
    title: '제목제목',
    done: false,
  };

  console.log(todo2);

  const todo3: TodoInfo = {
    id: 1,
    title: '할일제목',
    content: '할일내용',
    createdAt: new Date(),
    updatedAt: new Date(),
    done: true,
  };

  console.log(todo3);

  // 추가적인내용
  // 유틸리티타입
  // TodoList 에서 id와 title만 선택적으로 들고온다.

  type TodoInfo2 = Pick<TodoList, 'id' | 'title'>;
  const todo4: TodoInfo2 = {
    title: '하이',
    id: 321,
  };

  console.log(todo4);
})();
