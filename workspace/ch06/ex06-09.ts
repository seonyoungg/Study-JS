// 인터페이스로 객체의 타입 선언
// ex06-07.ts 복사

(() => {
  // 타입 별칭 생성
  // type User = {
  interface User {
    name?: string;
    age?: number;
    // getAge(): number; //메서드 정의
  };

  const u1: User = {
    name: '하루',
    age: 5,
  };
  const u2: User = {
    name: '나무',
    age: 8,
  };
  
  console.log(u1.age,u2.name?.toUpperCase());
})();
