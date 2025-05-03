/*
if문을 이용하여 사용자와 로그인 상태를 출력하세요.

*/

const isLogin = true;
const isUser = true;
const isSeller = false;
const isAdmin = false;

// isLogin이 true이면 "로그인 상태" 출력
// isLogin이 false이면 "로그아웃 상태" 출력
// isLogin ? console.log('로그인 상태') : console.log('로그아웃 상태');

if (isLogin === true) {
  console.log('로그인 상태');
} else {
  console.log('로그아웃 상태');
}

// isUser가 true이면 "사용자" 출력
// isUser ? console.log('사용자') : console.log(null);

if (isUser === true) {
  console.log('사용자');
} else {
  console.log(null);
}

// isSeller가 true이면 "판매자" 출력
// isSeller ? console.log('판매자') : console.log(null);

if (isSeller === true) {
  console.log('판매자');
}
// else {
//   console.log(null);
// }

// isAdmin이 true이면 "관리자" 출력
// isAdmin ? console.log('관리자') : console.log(null);

if (isAdmin === true) {
  console.log('관리자');
}
// else {
//   console.log(null);
// }

let loginStatus = '';
if (isLogin === true) {
  loginStatus = '로그인 상태';
  // isLogin이 true이고 isUser가 true 이면 "사용자 로그인 상태" 출력
  if (isUser === true) {
    console.log('사용자', loginStatus);
  }
  // isLogin이 true이고 isSeller가 true이면 "판매자 로그인 상태" 출력
  if (isSeller === true) {
    console.log('판매자', loginStatus);
  }
  // isLogin이 true이고 isAdmin이 true이면 "관리자 로그인 상태" 출력
  if (isAdmin === true) {
    console.log('관리자', loginStatus);
  }
}
if (isLogin === false) {
  loginStatus = '로그아웃 상태';
  // isLogin이 false이고 isUser가 true이면 "사용자 로그아웃 상태" 출력
  if (isUser === true) {
    console.log('사용자', loginStatus);
  }
  // isLogin이 false이고 isSeller가 true이면 "판매자 로그아웃 상태" 출력
  if (isSeller === true) {
    console.log('판매자', loginStatus);
  }
  // isLogin이 false이고 isAdmin이 true이면 "관리자 로그아웃 상태" 출력
  if (isAdmin === true) {
    console.log('관리자', loginStatus);
  }
}

// if (isLogin === true) {
//   loginStatus = '로그인 상태';
// } else {
//   loginStatus = '로그아웃 상태';
// }

// let loginStatus = isLogin ? '로그인 상태' : '로그아웃 상태';

// let loginStatus = '';
if (isLogin === true) {
  loginStatus = '로그인 상태';
}
if (isLogin === false) {
  loginStatus = '로그아웃 상태';
}

if (isUser === true) {
  userType = '사용자';
}
if (isSeller === true) {
  userType = '판매자';
}
if (isAdmin === true) {
  userType = '관리자';
}

console.log(loginStatus);
console.log(userType);
console.log(userType, loginStatus);
