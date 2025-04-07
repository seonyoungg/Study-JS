function main() {
  const data = getData();

  const A = data.a;
  const B = data.b;
  const C = data.c;
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
}
main();

/*
 * 표준 입력장치(콘솔)에서 한 줄로 입력된 한 건의 데이터를 읽어서 반환한다.
 * @returns {string || number} 읽은 데이터
 */

function getData() {
  const fs = require('fs');
  const fileData = fs.readFileSync(0).toString().trim().split(' ');
  const result = new Object();

  result.a = parseInt(fileData[0]);
  result.b = parseInt(fileData[1]);
  result.c = parseInt(fileData[2]);

  return result;
}
