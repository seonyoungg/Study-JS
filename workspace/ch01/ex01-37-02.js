console.log('1. 프로그램 시작.');

function a(n1){ //10
  console.log('2. a 시작.',n1); //10

  const n2 = b(n1) //10 =>  20

  console.log('7. a 종료.',n2);// 20
}

function b(n3){ //10
  console.log('3. b 시작.',n3); //10

  const n4 = c(n3) //10 => 20

  console.log('6. b 종료.',n4); // 20
  return n4; // 20
}

function c(n5){ //10
  console.log('4. c 시작.',n5); //10

  const  n6 = n5 + 10 //20 = 10 +10

  console.log('5. c 종료.',n6); //20

  return n6;
}

a(10);
console.log('8. 프로그램 종료.');