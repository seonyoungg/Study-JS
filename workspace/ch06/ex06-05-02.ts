// // 유니언 타입과 타입 가드

(() => {
  // FIXME: print 함수의 타입을 정의하고 msg의 타입에 따라서 결과값 출력
  /*   function print(msg: string | number | boolean) {
    // string일 경우
    if (typeof msg === 'string') {
      console.log(`${msg} 글자수: ${msg.length}`);
      // number일 경우
    } else if (typeof msg === 'number') {
      console.log(`${msg} + 10 = ${msg + 10}`);
      // boolean일 경우
    } else if (typeof msg === 'boolean') {
      console.log(`${msg}: ${msg ? '참' : '거짓'}`);
    }
  } */

  function print(msg: string | number | boolean) {
    switch (
      typeof msg // typeof로 타입을 체크해야 해요
    ) {
      case 'string':
        // string일 경우
        console.log(`${msg} 글자수: ${(msg as string).length}`);
        break;
      case 'number':
        // number일 경우
        console.log(`${msg} + 10 = ${msg + 10}`);
        break;
      case 'boolean':
        // boolean일 경우
        console.log(`${msg}: ${msg ? '참' : '거짓'}`);
        break;
      default:
        console.log('값에 해당하지 않음');
        break;
    }
  }

  print('world');
  print(200);
  print(false);
})();
