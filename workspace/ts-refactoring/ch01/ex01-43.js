/*
나머지 매개변수(Rest parameters)
*/


function fn(...args){
    console.log(args); //가변인자

    for(let arg of args){
        console.log(arg);
    }
}

fn();
fn(1);
fn(1,2);
fn(1,2,3);
fn(1,2,3,5,6,7,1,123,24,21,2,3,)