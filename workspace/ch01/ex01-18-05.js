/*
if-elseif

1. 정보처리 기사 필기 시험의 과목은 소프트웨어 설계, 소프트웨어 개발, 데이터베이스 구축, 프로그래밍 언어 활용, 정보 시스템 구축 관리 입니다.
다섯 과목의 점수가 다음과 같을 때 총점과 평균을 출력하는 프로그램을 작성하세요.
출력 결과:
총점: 303
평균: 60.6

2. 최고점과 최저점을 추가로 출력하세요
출력 결과:
총점: 303
평균: 60.6
최고점: 80
최저점: 48

3. 과목당 40점 이상, 전과목 평균 60점 이상이면 합격입니다.
합격 여부를 추가로 출력하세요.

축하합니다. 합격입니다.

4. 만약 불합격일 경우 불합격 사유를 추가로 출력하세요.

아쉽지만 불합격입니다. 사유: 평균 60점 미달(57점)
아쉽지만 불합격입니다. 사유: 과락 40점 미달(30점)
*/

const scoreSubject = {
  softwareDesign: 38,
  softwareDevelopment: 80,
  databaseSetup: 20,
  programmingUsage: 70,
  systemManagement: 55,
};

const total = Object.values(scoreSubject).reduce((a, b) => a + b, 0);
const average = total / Object.keys(scoreSubject).length;

const highest = Math.max(...Object.values(scoreSubject));
const lowest = Math.min(...Object.values(scoreSubject));

const criteriaScore = 40;
const criteriaAverage = 60;

console.log(`총점: ${total}`);
console.log(`평균: ${average}`);
console.log(`최고점: ${highest}`);
console.log(`최저점: ${lowest}`);

const failSubject = Object.entries(scoreSubject)
  .filter(([_, score]) => score < criteriaScore)
  .map(([subject, score]) => `${subject}:  ${score}점`);

if (average >= criteriaAverage && failSubject.length === 0) {
  console.log('축하합니다. 합격입니다.');
} else {
  console.log('아쉽지만 불합격입니다.');
  if (average < criteriaAverage) {
    console.log(`사유: 평균 ${criteriaAverage}점 미달(${average}점)`);
  }
  if (failSubject.length > 0) {
    console.log(
      `사유: 과락 ${criteriaScore}점 미달(${failSubject.join(', ')})`
    );
  }
}
