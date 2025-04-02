/*
반복문 - for문
*/

/*
for문
*/

/*
 *
 **
 ***
 ****
 *****
 */

const lines = 5;
let star='';

for (let i = 0; i < lines; i++) {
  star += '*';
  console.log(star);
}

// for(let a=1;a<=5;a++){
//   let star='';

//   for(let b=1;b<=a;b++){
//     star += '⭐'
//   }
//   console.log(star);
// }

console.log('----------------------------------------')

for(let i=5;i>=1;i--){
  let tree='';
  for(let j=0;j<=i;j++){
    tree += '🌲'
  }
  console.log(tree);
}

console.log('----------------------------------------')

// const lines = 5;
for(let c=0;c<lines;c++){
  let space = '';
  let star='';

  for(let d=0;d<lines-c-1;d++){
    space += ' ';
  }
  for(let d=0;d<=c;d++){
    star += '*'
  }
  console.log(space,star);
}
