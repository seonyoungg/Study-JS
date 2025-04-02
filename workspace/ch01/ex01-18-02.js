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
