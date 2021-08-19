'use strict';

// Promise is a JavaScript object for asynchronous operation.
// 1. state
// 2. producer
// 3. consumer

// state : pending -> fulfilled or rejected
// Producer vs Consumer 

//1. Producer : when new Promise is created, the executor
// runs automatically.
// promise 가 만들어지는 순간 우리가 전달한 executor가 바로 실행된다. 
// 만약 네트워크 요청을 사용자가 요구했을때만 해야하는 경우라면, 
// 아래와 같이 작성하면, 사용자의 요구 없이도 executor가 실행되기 때문에 낭비가
// 생길 수 있지?
// Promise's arguments are callback functions. (resolve, reject)
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

//2. Consumers : then, catch, finally( 성공하던, 실패하던 무조건 마지막에 실행됨)
promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });

//3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        })
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });
const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(`${hen} error`), 1000);
    });
getHen()
.then(getEgg)
.catch(error => {
    return '빵';
})
.then(meal => console.log(meal))
.catch(console.log);


