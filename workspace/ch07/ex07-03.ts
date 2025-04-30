// 주요 내장 함수 - clearTimeout
// ex07-02.ts 복사

(()=>{

  console.log('시작');

  const timerId = setInterval((a:number,b:number)=>{
    console.log('3초 후에 실행됩니다',a+b);
  },3000,10,20);

  console.log('종료');
  

  //timeout 작업취소
  clearInterval(timerId);
})();


