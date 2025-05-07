// Named Import: 모듈에서 export된 이름을 정확히 맞춰서 가져옴
// import { plus, minus } from './math.js';
import { plus as add, minus } from './math.js';
// plus 함수를 add라는 이름으로 사용 가능
plus(1, 2); // ❌ 에러! plus는 안 가져옴 (add로 별칭만 가져옴)
minus(2, 3); // minus 함수는 그대로 가져왔으므로 사용 가능
add(7, 8); // plus 대신 add 이름으로 호출
// Default Import: 모듈에서 `export default`로 내보낸 것을 가져옴
import MyMath from './math.js';
// MyMath 객체 안에 plus, minus, multiply 메서드가 있는 경우
MyMath.plus(1, 2); // default 객체 안에서 호출
MyMath.minus(2, 3);
MyMath.multiply(3, 4);
// Mixed Import (권장하지 않음): default export와 named export를 동시에 가져옴
import YourMath, { plus } from './math.js';
// YourMath는 default export, plus는 별도로 가져옴
YourMath.multiply(9, 10);
// 타입스크립트에서 `type` 키워드로 타입만 가져옴 (컴파일 후 사라짐)
const haru = {
    name: '하루',
    age: 5,
};
console.log(haru);
// 특정 조건에서 동적으로 모듈을 로드
if (MyMath.minus(5, 6) < 0) {
    // ✅ 동적 import: 조건부로 모듈을 불러오는 방식
    // 방식 1: ES2015 - Promise 사용
    import('./math.js').then((dymamicMath) => {
        dymamicMath.plus(5, 6); // import가 완료된 후에 호출 가능
    });
    // 방식 2: ES2017 - async/await 사용 (위 코드가 async 함수 안이어야 함)
    const dymamicMath2 = await import('./math.js');
    dymamicMath2.plus(5, 6);
}
