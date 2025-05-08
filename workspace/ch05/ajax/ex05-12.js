import { appendImages } from './utils.js';
const url = 'https://api.thecatapi.com/v1/images/search';
const btn = document.querySelector('button');
// 버튼 클릭이벤트 getImages 함수실행
// btn?.addEventListener('click', () => {
//   getImages();
// });
btn?.addEventListener('click', getImages); // getImages() 함수호출한 값을 넣지않도록 주읜
function getImages() {
    /**
     * Ajax 프로그래밍 순서
     * 1. XMLHTTP Request 객체 생성
     * 2. 요청 준비(Open)
     * 3. 응답 데이터 처리
     * 4. 서버에 요청(Send)
     */
    // 1. XMLHTTP Request 객체 생성
    const xhr = new XMLHttpRequest();
    // 2. 요청 준비(Open)
    xhr.open('GET', url, true);
    // true 비동기
    // false 동기
    // 3. 응답 데이터 처리
    xhr.addEventListener('load', function () {
        const result = this.responseText;
        // console.log(result);
        const data = JSON.parse(result);
        console.log(data);
        appendImages(data);
    });
    // 4. 서버에 요청(Send)
    xhr.send();
}
