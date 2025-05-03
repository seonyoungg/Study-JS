/*
변수 선언
*/

var a; //선언
var b, c; //동시 선언(사용 지양)
var d = 10; //선언과 동시에 할당
var e = 100,
  f = 200; //동시 선언 및 할당(사용 지양)

var user = '하츄핑';
var user2 = '아차핑';
var user3 = `포실핑`;

var message = '아차핑 "안녕';
var message = "하츄핑 '안녕'";
var message = '피곤핑 "피곤해" 피곤해'; //이스케이프 문자(\)
var message = '몰라핑 \n몰라 몰\t라';

console.log(message);
console.log(user, message);

/* ****************************************************** */

var $money = 4;
var $4 = 4;

var pi = 3.14;
var _ = 200;

var $ = $4;

// var user-name='안돼핑';
var userName = '낙타핑';
var userAge = 30;
var userGender = '여자';
var userEmail = 'ping@gmail.com';

console.log('ping@gmail.com') === console.log(userEmail);
console.log('ping@gmail.com' === userEmail);
