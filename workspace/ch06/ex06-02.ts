// 기본 타입

(()=>{

    let str : string = ' hello'; //문자열
    let age : number = 123 ; //숫자
    let done : boolean = true; //불린
    
    // done = 100; //TypeError

    let nullVal : null = null; // null
    let emptyVal : undefined; //undefined

    let todo:object = {title:'TypeScript공부',done:false}; //object
    let todoList : Array<string> = ['JavaScript','TypeScript']; // Array(string) 문자열배열
    let todoList2 : string[] = ['React','Next.js']; // Array(string) 문자열배열
    let todoListNum : Array<number> = [1,2,3,4,5,6,123]; // Array(number)

    // tuple : 길이가 고정되고 각 요소의 타입이 정의된 타입
    let items:[string,number] = ['타스핑',10];

    //  가능한 사용X
    let userName : any = '이일구'; 
    userName = 219;

    // 차라리 unknown사용 -> 이것도 지양
    let userName2 : unknown = 'TSping';
    userName2 = 540;

    console.log(userName.toUpperCase());
    // console.log(userName2.toUpperCase()); // =>Error
})();