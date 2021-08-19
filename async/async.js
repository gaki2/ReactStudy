// async & await
// clear style of using promise :)

// 1. async 를 함수 앞에 쓰면 코드 블록이 promise 로 자동으로 바뀐다. 
async function fetchUser() {
    return 'ellie';
}

const user = fetchUser();
user.then(console.log)
console.log(user);

// 2. await : async 가 붙은 함수 안에서만 쓸 수 있음.

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return 'apple';
}

async function getBanana() {
    await delay(1000);
    return 'banana';
}

// function pickFruits() {
//     return getApple()
//     .then(apple => {
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`);
//     })
// }

// async function pickFruits() {
//     const applePromise = getApple();
//     const bananaPromise = getBanana();

//     const apple = await applePromise;
//     const banana = await bananaPromise;
//     console.log(1);
//     return `${apple} + ${banana}`;
// }

// pickFruits().then(console.log)

// 3. useful Promise API
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log)