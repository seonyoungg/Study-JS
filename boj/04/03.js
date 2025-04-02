/*
제목: 최소, 최대
설명: 최솟값과 최댓값을 찾는 문제
제출: 

문제
N개의 정수가 주어진다. 
이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 
둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 
모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

출력
첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

예제 입력 1
5
20 10 35 30 7

예제 출력 1
7 35
*/

const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");

const count = parseInt(fileData[0]);
const array = fileData[1].split(" ").map(Number);
// const min = Math.min(...array);
// const max = Math.max(...array);

// console.log(min, max);


let maxNumber = array[0];
let minNumber = array[0];

for(let i=0;i<count;i++){
  
  if(maxNumber < array[i]){
    maxNumber = array[i]
  };

  if(minNumber > array[i]){
    minNumber = array[i]
  };
}

console.log(minNumber,maxNumber);