// 02-23.js 복사

// 함수의 Prototype으로 메모이제이션 기능 추가
Function.prototype.memo = function(key){ //this=isPrime
    
    // 캐시를 위한 코드
    this._cache = this._cache || {};
    if (this._cache[key] !== undefined) {
        // 한번이라도 key에 대해서 계산이 끝나고 캐시된 경우
        return this._cache[key];
    }else{
        return this._cache[key] = this(key);
    }
};

const sayHello = function(name){
    console.log(`안녕 나는 ${name}`)
}

sayHello('라라핑');
sayHello.memo('나무핑');
sayHello.memo('나무핑');

// 지정한 수가 소수인지 여부를 반환
const isPrime = function (num) {
    
    // 소수 판결 코드
    let prime = true;
  
    // for (let i = 2; i < num/2; i++) {
    // for (let i = 2; i < num; i++){
    for(let i=2;i<=Math.sqrt(num);i++){
      if (num % i === 0) {
        prime = false;
        break;
      }
    }
    return prime;
  };

console.time('소요시간');
console.log('3 -> ', isPrime(3));
console.log('4 -> ', isPrime(4));
console.log('5 -> ', isPrime(5));
console.log('6 -> ', isPrime(6));
console.log('7 -> ', isPrime(7));
console.log('8 -> ', isPrime(8));
console.log('9 -> ', isPrime(9));
console.log('1000000007 -> ', isPrime.memo(1000000007));
console.log('1000000007 -> ', isPrime.memo(1000000007));
console.log('1000000007 -> ', isPrime.memo(1000000007));
console.timeEnd('소요시간');


// isPrime.memo(3)
// │
// ├─> memo 메서드 실행
// │    ├─> 캐시 확인/초기화
// │    ├─> 캐시에 3이 없으므로
// │    │    └─> isPrime(3) 실행
// │    │         └─> 소수 판별 후 true 반환
// │    └─> 캐시에 저장 후 true 반환
// │
// isPrime(3)
// └─> isPrime 함수 바로 실행
//      └─> 소수 판별 후 true 반환