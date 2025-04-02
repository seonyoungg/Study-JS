const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim();

const score = Number(fileData);

if (score >= 90 && score < 100) {
  console.log('A');
} else if (score < 90) {
  console.log('B');
} else if (score < 80) {
  console.log('C');
} else if (score < 70) {
  console.log('D');
} else if (score < 60) {
  console.log('F');
}

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
