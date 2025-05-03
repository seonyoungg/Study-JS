/*
배열 생성, 읽기, 쓰기

- 배열 : 하나의 변수에 여러개의 값을 저장하는 데이터 구조
  => 순서 정보를 이용하여 각  요소를 참조(0부터 시작)
*/

// const arr = new Array(1, 2, 3);
const arr = [1, 2, 3];
arr.push(10); // [1, 2, 3, 10]
arr[4] = 20; // [1, 2, 3, 10, 20]
arr[5] = 30; // [1, 2, 3, 10, 20, 30]
arr[1] = 100; // [1, 100, 3, 10, 20, 30]
arr[8] = 200; // [ 1, 2, 3, 10, 20, 30, <2 empty items>, 200 ]

//배열의 마지막에 새로운 데이터 추가
//1의 방법보다 배열 Method Push 사용 추천
arr[arr.length] = 300; //[ 1, 100, 3, 10, 20, 30, <2 empty items>, 200, 300, 'last' ]
arr.push('last'); // [ 1, 2, 3, 10, 20, 30, <2 empty items>, 200, 300, 'last' ]

//배열의길이
console.log(arr.length);

//배열의 type확인
console.log(typeof arr, arr);

console.log(arr[7]); //undefined
