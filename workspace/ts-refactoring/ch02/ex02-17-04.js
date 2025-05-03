// lodash의 partial 대신 js자체의 bind함수를 통한 구현
var count = 0;
const myObj = {
    count:0,
    visit:function(){
        //방문자를 한명 증가시킨다.
        this.count++ // this=myObj
        const visitN = function(n){
            this.count += n
        };
        visitN.call(this,2); // count를 2씩 증가
        visitN.call(this,2); // count를 2씩 증가

        const visit3 = visitN.bind(this,3); //bind는 call처럼 this를 전달하는 기능이 있음
        visit3();
        visit3();
    },
};

myObj.visit(); //this=myObj
myObj.visit();
console.log('방문자수',myObj.count);//2


