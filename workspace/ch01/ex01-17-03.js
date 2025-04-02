/*
if문을 이용하여 사용자와 로그인 상태를 출력하세요.

*/

const isLogin = true;
const isUser = false;
const isSeller = true;
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
if (isUser === true) {
  console.log('사용자');
}

// isSeller가 true이면 "판매자" 출력
if (isSeller === true) {
  console.log('판매자');
}

// isAdmin이 true이면 "관리자" 출력
if (isAdmin === true) {
  console.log('관리자');
}

if (isLogin) {
  if (isUser) {
    // isLogin이 true이고 isUser가 true 이면 "사용자 로그인 상태" 출력
    console.log('사용자 로그인 상태');
  } else {
    if (isSeller) {
      // isLogin이 true이고 isSeller가 true이면 "판매자 로그인 상태" 출력
      console.log('판매자 로그인 상태');
    } else {
      if (isAdmin) {
        // isLogin이 true이고 isAdmin이 true이면 "관리자 로그인 상태" 출력
        console.log('관리자 로그인 상태');
      }
    }
  }
} else {
  if (!isLogin) {
    if (isUser) {
      // isLogin이 false이고 isUser가 true 이면 "사용자 로그아웃 상태" 출력
      console.log('사용자 로그아웃 상태');
    } else {
      if (isSeller) {
        // isLogin이 false이고 isSeller가 true이면 "판매자 로그아웃 상태" 출력
        console.log('판매자 로그아웃 상태');
      } else {
        if (isAdmin) {
          // isLogin이 false이고 isAdmin이 true이면 "관리자 로그아웃 상태" 출력
          console.log('관리자 로그아웃 상태');
        }
      }
    }
  }
}

// if (isLogin === true) {
//   loginStatus = '로그인 상태';
// } else {
//   loginStatus = '로그아웃 상태';
// }

// let loginStatus = isLogin ? '로그인 상태' : '로그아웃 상태';

let loginStatus = '';
if (isLogin === true) {
  loginStatus = '로그인 상태';
} else {
  loginStatus = '로그아웃 상태';
}

if (isUser === true) {
  userType = '사용자';
} else {
  if (isSeller === true) {
    userType = '판매자';
  } else {
    if (isAdmin === true) {
      userType = '관리자';
    }
  }
}

console.log(loginStatus);
console.log(userType);
console.log(userType, loginStatus);
