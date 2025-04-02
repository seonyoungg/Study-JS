/*
if문을 이용하여 사용자와 로그인 상태를 출력하세요.

*/

const isLogin = true;
const isUser = false;
const isSeller = true;
const isAdmin = false;

let loginStatus = '';
if (isLogin) {
  loginStatus = '로그인 상태';
} else {
  loginStatus = '로그아웃 상태';
}

if (isUser) {
  userType = '사용자';
} else if (isSeller) {
  userType = '판매자';
} else if (isAdmin) {
  userType = '관리자';
}

console.log(loginStatus);
console.log(userType);
console.log(userType, loginStatus);
