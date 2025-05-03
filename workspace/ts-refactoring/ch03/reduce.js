
// reduce를 이용해서 곱셈 결과 24를 만들어보세요
const nums = [2, 3, 4];

let result =0;
result = nums.reduce((acc,val)=>acc*val,1);

// let result = nums.reduce((acc, val) => acc * val, 1);

console.log(result);

// --------------------------------------------------------------//

// reduce를 이용해서 "I love JavaScript" 문자열을 만들어보세요
const words = ["I", "love", "JavaScript"];

//방법 1
// const str = words.join(" ");

//방법 2
const str = words.reduce((acc, val) => acc + " " + val);

console.log(str); // I love JavaScript ✅

// --------------------------------------------------------------//

// reduce를 이용해서 가장 큰 수 100을 구해보세요
const scores = [88, 97, 54, 100, 76];

const maxNum = scores.reduce((acc, val) => (val > acc ? val : acc));
console.log(maxNum);

// --------------------------------------------------------------//
// reduce를 이용해서 전체 문자열 길이의 합 22를 구해보세요
const words2 = ["hello", "world", "javascript"];

const wordsLength = words2.reduce((acc,val)=> acc+val.length,0);
console.log(wordsLength);


// --------------------------------------------------------------//
// reduce를 이용해서 짝수의 개수 3을 구해보세요
const numbers = [1, 4, 7, 10, 12];

const numberSum = numbers.reduce((arr,val)=>arr+(val%2===0?1:0),0);
console.log(numberSum);


// --------------------------------------------------------------//
// reduce를 이용해서 가장 긴 단어 "watermelon"을 구해보세요
const words3 = ["apple", "banana", "kiwi", "watermelon"];

const wordSearch = words3.reduce((arr,val)=>(val.length>arr.length?val:arr));
console.log(wordSearch);