const sum = function(x, y){
  return x + y;
}

// lodash의 curry함수를 사용해서 sum을 커링
// const currySum = _.curry(sum);

// console.log(sum(10, 20, 30));
// console.log(currySum(30)(40));

// lodash의 partial 함수를 사용해서 부분 적용 함수 생성
const sum100 = _.partial(sum,100);
console.log(sum100(10));
console.log(sum100(30));

const sum200 = _.partial(sum,200);
console.log(sum200(10));
console.log(sum200(30));

// lodash의 partial 대신 js자체의 bind함수를 통한 구현 => 02-17-04.js 참조