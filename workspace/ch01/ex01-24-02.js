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

const score = {
  userName: '차차핑',
  kor: 100,
  eng: 90,
  math: 85,

  // sum = kor + eng + math  //이렇게는 되지않음
  sum: function () {
    //TODO this
    // 객체의 메서드가 자신의 속성을 접근할 때 this 사용
    // 메서드 내부에서 this가 사용될 때 this는 메서드를 가진 객체를 가리킴
    return this.kor + this.eng + this.math;
  },
  avg: function () {
    return this.sum() / 3;
  },
};

let sum = score.kor + score.eng + score.math;
let avg = sum / 3;

console.log(`${score.userName}의 합계 : ${score.sum()}`);
console.log(`${score.userName}의 평균 : ${Math.round(score.avg())}`);
