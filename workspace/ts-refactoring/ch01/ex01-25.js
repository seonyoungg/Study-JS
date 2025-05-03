/*
객체의 속성 관리
*/

const foo = {
  name: '푸푸핑',
  mainJob: 'magician',
};

console.log(foo);

//객체 프로퍼티 읽기
//마침표표기법
console.log(foo.name);
//대괄호표기법
console.log(foo['mainJob']);

//객체 프로퍼티 갱신
foo.mainJob = 'fairy';
console.log(foo.name, foo['mainJob'], foo.subJob);

//객체 프로퍼티 동적  생성
foo.subJob = 'celeb';
console.log(foo.name, foo['mainJob'], foo.subJob);

//객체 프로퍼티 삭제 (동시에 여러개 삭제는 되지 않음)
delete foo.mainJob;
console.log(foo.name, foo['mainJob'], foo.subJob);

//객체의 모든 프로퍼티 읽기
for (let props in foo) {
  //1) props = 'name'
  //2) props ='subJob;

  // console.log(props); // 속성값 반환
  // console.log(foo[props]); // 마침표 표기법 활용용
  console.log(props, ':', foo[props]);
}
