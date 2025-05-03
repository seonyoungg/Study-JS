const topLevel = '최상위 변수';

function outer(){
  const innerVal = 'outer의 지역변수'; //자유변수
  
  console.log(topLevel); // 하위 Scope에서 접근 가능
  console.log(innerVal); // 지역변수는 선언한 함수내에서만 접근 가능

  const fn = function(){
    console.log(innerVal);
  };
  return fn;
}

console.log('1. 변수에 함수 할당(이 때 outer() 실행 =>console.log 출력 및 return값 반환)')
const returnFn = outer();
console.log("2. 변수 호출",topLevel); // 같은 Scope 내에서 접근 가능
// console.log(innerVal); // 지역변수는 선언한 함수내에서만 접근 가능

console.log("3. 변수 호출(return으로 함수fn 호출)");
returnFn();

/*
 * Closure
 * - 외부함수의(outer)의 지역변수(innerVal) 
 *   외부함수의 실행이 완료된 후 내부함수의 호출로 참조되는 현상 또는 내부함수
 * 
 * - Closure 생성 조건
 * 1) 함수 내부에서 함수를 생성(중첩함수, 내부함수)
 * 2) 내부함수가 외부함수의 지역변수를 참조
 */