/*
국어, 영어, 수학 점수의 총점과 평균을 출력하는 프로그램
*/

// let kor = 100;
// let eng = 90;
// let math = 85;

// let sum = kor + eng + math;
// let avg = sum / 3;

// console.log('총점', sum);
// console.log('평균', avg);

const score = new Object();
score.userName = '차차핑';
score.kor = 100;
score.eng = 90;
score.math = 85;
// console.log(score);

let scoreLength = Object.keys(score).length - 1;
// console.log(scoreLength);

score.sum = score.kor + score.eng + score.math;
score.avg = score.sum / scoreLength;

console.log(`${score.userName}의 합계 :, ${score.sum}`);
console.log(`${score.userName}의 평균 :, Math.round(${score.avg})`);
