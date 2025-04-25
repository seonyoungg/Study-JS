const mylib={};

// isPrime(5); 메모이제이션 안됨
// isPrime = isPrime.memoize();
// isPrime(5); 메모이제이션 된 결과 반환
// this.prototype 
Function.prototype.memoize = function(){
    const fn = this; // isPrime // original function 저장
    
    return function(){
        return fn.memo.apply(fn, arguments); // isPrime.memo(5) // 매개변수를 배열로 가지고 있을 때 apply를 통해 전달
    }
};

//  함수에 메모이제이션 기능 추가
Function.prototype.memo = function(key){
    
    // 캐시를 위한 코드
    this._cache = this._cache || {};
    if (this._cache[key] !== undefined) {
        // 한번이라도 key에 대해서 계산이 끝나고 캐시된 경우
        return this._cache[key];
    }else{
        return this._cache[key] = this(key);
    }
};

// Child가 Parent를 상속받는다.
mylib.inherite = function(Parent,Child){
    // Object.create() : 지정한 prototype 객체를 참조하는 인스턴스 생성
    Child.prototype=Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}