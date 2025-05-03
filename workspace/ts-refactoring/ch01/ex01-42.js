/*
기본값 매개변수(Default parameters)
*/


function sum(a,b){
    return a+b;
}

console.log(sum(10,20)); // 30  
console.log(sum(50)); // NaN


function sum(a,b){
    if(b === undefined){
        return a
    }else{
    return a+b;
    }
}

function sum(a,b){
    if(b === undefined){
        b=0;
    }return a+b;
}

function sum(a,b){
    b = b || 0; // b가 undefined일 경우 0으로 초기화
    return a+b;
}

function sum(a,b=0){
  return a+b;
}
console.log(sum(10,20)); // 30  
console.log(sum(50)); // 50  