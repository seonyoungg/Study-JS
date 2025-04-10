/*
TODO 유사배열 객체

Like-Array Object
- 배열은 객체의 일종
- 유사배열객체 : 배열과 비슷하게 사용할 수 있는 객체  / 사용법을 보면 배열 같지만 실제 배열이 아닌 객체

1. index를 통한 접근
2. length속성
3. 배열메서드없음(forEach, map)
4. arguments,NodeList, String등 내장 객체가 유사 배열객체로 되어 있음
*/

/**
 * 전달받은 배열의 모든 요소를 인덱스와 함께 출력
 * @param {any[]} arr-배열  :: //TODO 이후 타입스크립트 참조
 */
function printArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}
// const colorArr = ['orange', 'yellow', 'green'];
// printArr(colorArr);

//0부터터 시작해서 1씩 증가하는 속성 추가
const arr = {
  length: 3,
  0: 'orange',
  1: 'yellow',
  2: 'green',
  /**
   * (유사배열) 맨 끝에 지정한 element를 추가
   * @param {*} elem - 추가할 요소
   */
  push: function (elem) {
    arr[arr.length] = elem;
    arr.length++;
  },
};
arr.push('black'); //배열이 아니기에 배열메서드 되지 않음
arr.push('white');
printArr(arr);

// 유사배열객체를 통해 배열메서드를 막을 수 있음 // 배열의 Readme..?
