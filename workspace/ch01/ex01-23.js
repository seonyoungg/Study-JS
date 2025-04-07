/*
new Object() - 생성자 함수로 객체 생성

객체는 하나의 변수에 여러의 데이터를 저장할 수 있음음
*/

const userName = '몰라핑';
const userNo = 3;
const userGender = 'Male';
const userLevel = 'diamond';
const userPassword = '1234';
const userAge = 6;
const userEmail = 'tjsduddlfma1@naver.com';

// 몰라핑 회원의 속성(객체, Object)
const user1 = new Object();
user1.userName = '몰라핑';
user1.userNo = 3;
user1.userGender = 'male';
user1.userLevel = 'diamond';
user1.userPassword = '1234';
user1.userAge = 6;
user1.userEmail = 'uzoolove@gmail.com';
console.log(user1);

// 호정핑 회원의 속성(객체, Object)
const user2 = new Object();
user2.userName = '호정핑';
user2.userNo = 4;
user2.userGender = 'female';
user2.userLevel = 'gold';
user2.userPassword = '1234';
user2.userAge = 30;
user2.userEmail = 'hojung@gmail.com';

console.log(user2);
console.log(user2.userName);
