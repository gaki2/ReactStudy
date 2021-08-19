'use strict';
// JavaScript is synchronous.
// Execute the code block by order after hoisting : 동기적
// hoisting : var, function declaration 은 모두 호이스팅됨. 

//async : 언제 실행될지 가늠 할 수 없는 것.
//callback function: 나중에 다시 불러줘 ! 라고 말하는 함수

console.log('1');
setTimeout(function () {
    console.log(5);
}, 1000)
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello World'));


// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('hello my world'), 2000);
