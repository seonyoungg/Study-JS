// 내장 객체 - Math

(()=>{

  // FIXME 주사위를 던져서 1부터 6까지의 숫자 중 하나를 랜덤으로 반환하는 함수
  function rollDice(): number {
      return Math.floor((Math.random()*6)+1); 
  }

  // Math.random()  0<=x<1;
  // Math.random() * 6 0<=x<6;
  // Math.random() * 6 + 1 1<=x<7;

  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
  
})();