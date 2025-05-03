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
    constructor(kor, eng, math) {
        super(kor, eng); // kor, eng는 부모한테 전달
        this.math = math; // math는 College에서 따로 추가
    }

    sum() {
        // 3과목 합산
        return this.kor + this.eng + this.math;
    }

    avg() {
        return Math.round(this.sum() / 3);
    }

    grade() {
        const number = this.avg();

        if (number >= 90) return "A";
        else if (number >= 80) return "B";
        else if (number >= 70) return "C";
        else if (number >= 60) return "D";
        else return "F";
    }
}

const c1 = new College(90, 95,80);
console.log(c1.sum());   
console.log(c1.avg());   
console.log(c1.grade()); 