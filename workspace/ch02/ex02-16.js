/*
* 함수 호출 방법 2 - 메서드
  - this는 메서드를 정의한 객체
  - 화살표 함수는 함수 내부에 arguments나 this가 생성되지 않고 상위 컨텍스트의 arguments, this를 사용하게 됨 
*/

// window.name='global'; // window - 브라우저가 가지고 있는 전역 객체
// global.name = 'global' // gloabal - Node.js가 가지고 있는 전역 객체
globalThis.name = 'global'; // 브라우저는 window,  Node.js는 global 객체

const getPingName = ()=>{
 return this.name; //화살표 함수에서 this 못찾으므로 상위 scope의 this를 찾게됨 // window
}

const baro = new Object();
baro.name='바로핑';
baro.age=9;
baro.getName=getPingName;

const rara = {
  name : '라라핑',
  age:8,
  getName:getPingName
}

// 함수 호출하는 방법 1 : 일반 함수로 호출 ( 이 때 this는 window 객체)
console.log(getPingName());

// 함수 호출하는 방법 2 : 메서드로 호출 ( 이 때 this는 메서드를 정의한 객체)
console.log(baro.age, baro.getName()); // getName()의 this는 baro
console.log(rara.age, rara.getName()); // getName()의 this는 rara