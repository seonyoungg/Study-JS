/*
매개변수를 가진 함수 - 도어락
도어락은 비밀번화가 입력되면 문이 열린다
잘못된 비밀번호가 입력되면 경보음이 울린다
*/

function doorLock(password) {
  const pwd = 1234;
  const subPwd = password.slice(-4);
  // const subPwd = password?.slice(-4);
  // const subPwd = String(password).substring(-4); //substring은 음수반환되지 않음

  console.log(subPwd);
  if (pwd === password) {
    console.log('비밀번호가 일치합니다.');
  } else {
    console.log('비밀번호가 일치하지 않습니다.');
  }
}

doorLock('11111111');
doorLock('123411111234');
doorLock(); // undefined => 함수 사용에 있어서 오류 발생
