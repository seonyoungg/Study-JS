"use strict";
// 인터페이스 사용 - 클래스의 타입 지정
(() => {
    // 자바스크립트 클래스 선언
    // class HighSchool {
    //   constructor(kor, eng) {
    //     this.kor = kor;
    //     this.eng = eng;
    //   }
    //   sum() {
    //     return this.kor + this.eng;
    //   }
    //   avg() {
    //     return this.sum() / 2;
    //   }
    // }
    // FIXME 타입 스크립트 클래스 선언(인터페이스 지정)
    class HighSchool {
        constructor(kor, eng) {
            this.kor = kor;
            this.eng = eng;
        }
        sum() {
            return this.kor + this.eng;
        }
        avg() {
            return this.sum() / 2;
        }
    }
    // 총점과 평균을 출력하는 함수
    function printScore(score) {
        console.log(score.sum(), score.avg());
    }
    const haru = new HighSchool(100, 90);
    printScore(haru);
})();
/* Score 인터페이스
├─ kor: number
├─ eng: number
├─ sum(): number
└─ avg(): number

HighSchool 클래스 (implements Score)
├─ kor
├─ eng
├─ sum()
│  └─ return this.kor + this.eng
└─ avg()
   └─ return this.sum() / 2

printScore(score: Score) 함수
├─ console.log(score.sum())
└─ console.log(score.avg())

haru 객체 생성
└─ new HighSchool(100, 90)

printScore(haru) 호출
├─ haru.sum() 실행
└─ haru.avg() 실행 */ 
