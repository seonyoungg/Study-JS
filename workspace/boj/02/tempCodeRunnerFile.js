function main() {
  const data = getData();

  if (data.a > data.b) {
    console.log('>');
  } else if (data.a < data.b) {
    console.log('<');
  } else {
    console.log('==');
  }
}
main();

function getData() {
  const fs = require('fs');
  const fileData = fs.readFileSync(0).toString().trim().split(' ');

  const result = new Object();

  result.a = parseInt(fileData[0]); 
  result.b = parseInt(fileData[1]); 

  return result;
}
