const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim();

const score = Number(fileData);

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
