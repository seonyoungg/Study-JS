const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim();

const score = Number(fileData);

// score가 90 이상 100 이하이면 "A" 출력
if (score >= 90 && score <= 100) {
  console.log('A');
}
// score가 80 이상 90 미만이면 "B" 출력
if (score >= 80 && score < 90) {
  console.log('B');
}
// score가 70 이상 80 미만이면 "C" 출력
if (score >= 70 && score < 80) {
  console.log('C');
}
// score가 60 이상 70 미만이면 "D" 출력
if (score >= 60 && score < 70) {
  console.log('D');
}
// score가 60 미만이면 "F" 출력

if (score < 60) {
  console.log('F');
}

// if (score >= 90 && score < 100) {
//   console.log('A');
// } else if (score < 90) {
//   console.log('B');
// } else if (score < 80) {
//   console.log('C');
// } else if (score < 70) {
//   console.log('D');
// } else if (score < 60) {
//   console.log('F');
// }

switch (Math.floor(score / 10)) {
  case 10:
  case 9:
    console.log('A');
    break;
  case 8:
    console.log('B');
    break;
  case 7:
    console.log('C');
    break;
  case 6:
    console.log('D');
    break;
  default:
    console.log('F');
}
