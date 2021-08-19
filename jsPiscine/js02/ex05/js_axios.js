// import axios from '../axios';
const axios = require('axios');

function createRandomNumber() {
    const numbers = [];

    while (numbers.length < 5) {
        let randomNumber = Math.floor(Math.random() * 100 + 1);
        if (!numbers.includes(randomNumber)) numbers.push(randomNumber);
    }
    return numbers;
}

function getAndPrintItem () {
    const numbers = createRandomNumber();
    const posts = [];
    const comments = [];
    
    for (let i = 0; i < 5; i++) {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${numbers[i]}`)
        .then((response) => {
            let post = response.data;
            console.log(`${post.title}
${post.body}
----------------------------
            `)})
        .catch((error) => console.log(error));

        axios.get(`https://jsonplaceholder.typicode.com/posts/${numbers[i]}/comments`)
        .then((response) => {
            let comment = response.data;
            for (let k = 0; k < 5; k++) {
                console.log(`댓글 작성자 : ${comment[k].name}
이메일 주소 : ${comment[k].email}
${comment[k].body}
------
                `)
            }
        })
        .catch((error) => console.log(error));
    }
}

getAndPrintItem()