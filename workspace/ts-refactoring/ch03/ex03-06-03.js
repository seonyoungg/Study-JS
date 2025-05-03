/*
* 클래스 정의와 상속
* ex03-05.js 복사
*/
/**
 * 고등학교 성적관리 생성자 함수(총점과 평균 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
class HighSchool {
    constructor(...scores) {
        this.scores = scores; // 점수들을 배열로 저장
    }

    sum() {
        return this.scores.reduce((acc, val) => acc + val, 0);
        // let acc = 0;
        // for (let i = 0; i < scores.length; i++) {
            // acc = acc + scores[i];
        // }
    }

    avg() {
        return Math.round(this.sum() / this.scores.length);
    }
}

// reduce()
// array.reduce((누적값, 현재값) => { ... }, 초기값)
// 누적값 (acc) : 계산된 값이 누적돼서 전달됨
// 현재값 (val) : 배열을 순회하며 하나씩 전달됨
// 초기값 : 누적값의 시작값

const s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());

/**
 * 대학교 성적관리 생성자 함수(총점, 평균과 학점 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */

class College extends HighSchool {
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