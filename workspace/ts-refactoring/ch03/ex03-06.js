/*
* 클래스 정의와 상속
* ex03-05.js 복사
*/
/**
 * 고등학교 성적관리 생성자 함수(총점과 평균 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
class HighSchool{
    constructor(kor,eng){
        this.kor=kor;
        this.eng=eng;
    }

    sum(){
        return this.kor+this.eng;
    }

    avg(){
        return Math.round(this.sum()/2);
    }
}

const s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());

/**
 * 대학교 성적관리 생성자 함수(총점, 평균과 학점 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */

class College extends HighSchool {
    //생성자에 특별한 추가 로직이 없다면, College의 생성자 생략도 가능
    // constructor(kor,eng){
    //     super(kor,eng)
    // }

    // constructor()를 생략할 경우 자동으로 추가 (이런형태임)
    // constructor(...args){
    //     super(...args);
    // }  


    grade() {
        const number = this.avg();

        if (number >= 90) return "A";
        else if (number >= 80) return "B";
        else if (number >= 70) return "C";
        else if (number >= 60) return "D";
        else return "F";
    }
}

const c1 = new College(80, 99);
console.log(c1.sum());   // 179
console.log(c1.avg());   // 90
console.log(c1.grade()); // A