// 인터페이스 선언 병합
// ex06-15.ts 복사

(() => {
  interface Todo {
    id: string;
    title: string;
    content: string;
  }

  interface Todo {
    // id: number; // 동일한 속성을 지정하려면 type이 같아야함
    title: string; //type이 같다면 동일한 속성도 상관 없음
    createdAt: Date;
    done: boolean;
  }

  const todo: Todo = {
    content: '스으트으링',
    id: '1',
    createdAt: new Date(),
    done: true,
    title: '제에모옥',
  };
  console.log(todo);
})();
