const axios = require('axios');

async function printPost(i) {

    const post = await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${i}`)
    .then((response) =>  response.data )
    .catch((error) => console.log(error));

    const comments = await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${i}/comments`)
    .then((response) => response.data )
    .catch((error) => console.log(error));

    console.log(`제목: ${post.title}\n\n${post.body}`);
    comments.forEach((e) => {
      console.log("---");
      console.log(`댓글 작성자: ${e.name}`);
      console.log(`이메일: ${e.email}`);
      console.log(e.body);
    })
}

for (let i = 0; i < 5; i++) {
    printPost(Math.floor(Math.random() * 100) + 1);
}
