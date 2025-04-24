// count 속성과 ride(), getCount() 메서드 작성
const Counter = function(){
    let count = 0;
    this.getCount = function(){
        return count;
    };

    this.ride = function(){
        if(count<40){
            count++;
        }else{
            console.log('정원이 초과되었습니다.!');
        }
    };
};

const c = new Counter();
c.ride(); //1
c.ride(); //2

// for(let i=0;i<40;i++){
//     c.ride();
// }

c.count+=40; //영향받지 않음
console.log('전체 탑승자', c.getCount());