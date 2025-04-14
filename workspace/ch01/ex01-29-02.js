/*
2차원 배열
FEBC 수강생의 이름을 저장하는 배열을 작성해 보자.
*/

const students13 = ['임한길', '이호정', '김현지', '이도울', '박선영', '김하영'];
const students12 = ['십이기핑', '몰라핑', '안가르쳤어핑'];

const febcStudents = [
  '십이기핑',
  '몰라핑',
  '안가르쳤어핑',
  '임한길',
  '이호정',
  '김현지',
  '이도울',
  '박선영',
  '김하영',
];

const bebcStudents = [
  '십이기핑',
  '몰라핑',
  '안가르쳤어핑',
  '임한길',
  '이호정',
  '김현지',
  '이도울',
];

const aosbcStudents = ['십이기핑', '몰라핑', '안가르쳤어핑'];

const lionStudents = [
  [
    '십이기핑',
    '몰라핑',
    '안가르쳤어핑',
    '임한길',
    '이호정',
    '김현지',
    '이도울',
    '박선영',
    '김하영',
  ],
  [
    '십이기핑',
    '몰라핑',
    '안가르쳤어핑',
    '바로핑',
    '이호정',
    '김현지',
    '이도울',
  ],
  ['십이기핑', '몰라핑', '안가르쳤어핑'],
];

//각 캠프의 수강생이 몇명인가
let sum = 0;
let col = 0;
let row = 0;

let colsub = 0;
let rowsub = 0;

for (let i = 0; i < lionStudents.length; i++) {
  const campStudents = lionStudents[i];
  sum += lionStudents[i].length;

  console.log('수강생: ', campStudents.length, '명');

  // 바로핑이라는 수강생이 있는가?
  for (let k = 0; k < campStudents.length; k++) {
    if (lionStudents[i][k] === '바로핑') {
      col = i;
      row = k;
    }
  }
  if (campStudents.includes('바로핑')) {
    colsub = i;
    rowsub = campStudents.indexOf('바로핑');
  }
}

console.log(col, row, '바로핑');
console.log('col: ', colsub, 'row: ', rowsub, '바로핑');

console.log('전체 인원: ', sum, '명');
