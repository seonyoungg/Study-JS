/*
  함수 생성 1 (선언문)
*/

// 선언문 방식의 함수 선언

function add(a,b){
  const result = a+b ;
  return result;
}

console.log(add(10, 20)); // 30, this=>window

console.log(add.call({name:'call'},30,40)); // 70. this=>{}
console.log(add.apply({name:'apply'},[30,40])); // 70. this={} //apply는 매개변수 최대 2개