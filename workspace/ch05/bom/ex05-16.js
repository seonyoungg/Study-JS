"use strict";
// URL 정보 표시 - 현재 페이지의 URL 정보들을 화면에 출력
const urlInfo = document.querySelector('#urlInfo');
if (urlInfo) {
    urlInfo.textContent = `
    전체URL : ${location.href}             // 현재 전체 주소
    프로토콜 : ${location.protocol}        // http:, https: 등
    호스트 : ${location.host}             // 도메인 + 포트 (예: localhost:3000)
    포트 : ${location.port}               // 포트 번호 (없으면 공백)
    경로 : ${location.pathname}           // 도메인 뒤의 경로 (/test/index.html 등)
    쿼리스트링 : ${location.search}       // ?page=1&keyword=test 등
  `;
}
// location.assign 테스트 - 클릭 시 구글로 이동 (히스토리에 기록됨, 뒤로가기 가능)
document.getElementById('testAssign')?.addEventListener('click', () => {
    location.assign('http://google.com');
});
// location.href 직접 대입 - 클릭 시 다음(daum.net)으로 이동 (assign과 동일하게 작동)
document.getElementById('testHref')?.addEventListener('click', () => {
    location.href = 'http://daum.net';
});
// location.replace 테스트 - 클릭 시 네이버로 이동 (현재 페이지를 대체, 뒤로가기 불가)
document.getElementById('testReplace')?.addEventListener('click', () => {
    location.replace('http://naver.com');
});
// 페이지 새로고침 테스트
document.getElementById('testReload')?.addEventListener('click', () => {
    location.reload(); // 현재 페이지를 새로고침
});
// 호스트네임 변경 테스트 - URL 객체로 만든 후 호스트명만 바꿈 (실제로 이동은 안 함)
document.getElementById('changeHostname')?.addEventListener('click', () => {
    const newHostName = 'www.example.com';
    const url = new URL(location.href); // 현재 URL을 기반으로 URL 객체 생성
    console.log(url); // 변경 전 URL 객체 콘솔 출력
    url.hostname = newHostName; // 호스트 이름 변경
    // location.href = url.toString();   // 실제 이동하려면 이 줄의 주석 해제
});
// URL 파라미터 추가 테스트 - 현재 주소에 ?page=2&keyword=dogs 를 붙임 (실제 이동은 안 함)
document.getElementById('addParameter')?.addEventListener('click', () => {
    const currentUrl = new URL(location.href); // 현재 주소를 URL 객체로
    currentUrl.searchParams.set('page', '2'); // page 파라미터 추가 또는 변경
    currentUrl.searchParams.set('keyword', 'dogs'); // keyword 파라미터 추가 또는 변경
    location.href = currentUrl.toString(); // 이동하려면 주석 해제
});
