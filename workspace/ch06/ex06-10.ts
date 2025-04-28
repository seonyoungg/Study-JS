// 인터페이스 사용 - 변수, 함수의 매개변수, 리턴타입
// ex06-09.ts 복사

(() => {
  // 인터페이스 생성
  interface User {
    name: string;
    age: number;
  }

  // 객체를 만들 때 인터페이스를 사용
  const u1: User = {
    name: "haru",
    age: 5,
  };
  const u2: User = {
    name: "namu",
    age: 8,
  };

  console.log(u1.age, u2.name.toUpperCase());

  
  // 함수 리턴 타입으로 인터페이스 사용
  const createUser = function (name: string, age: number): User {
    const user = {
      name:name,
      age:age
    }

    return user
    // return { name, age };
  };
  
  const u3: User = createUser("유저핑", 9);
  console.log(u3);

  
  // 함수 매개변수 타입으로 인터페이스 사용
  function getAge(user: User): number {
    return user.age;
  }
  console.log(getAge(u1));
  console.log(getAge(u2));
})();

// 객체 타입 지정	인터페이스를 사용해 객체 구조를 강제한다.
// 함수 리턴 타입	함수가 리턴하는 객체도 인터페이스 구조를 따라야 한다.
// 함수 매개변수 타입	함수에 들어가는 객체도 인터페이스 구조를 따라야 한다.