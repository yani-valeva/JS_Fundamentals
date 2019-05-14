const fetch = require("node-fetch");

const url = 'https://jsonplaceholder.typicode.com/comments';
let comments1 = fetch(url).then(result => result.json()).then(data => data.filter(c => c.postId === 1));
let comments2 = fetch(url).then(result => result.json()).then(data => data.filter(c => c.postId === 2));
let comments3 = fetch(url).then(result => result.json()).then(data => data.filter(c => c.postId === 3));

Promise.all([comments1, comments2, comments3])
    .then(data => console.log(data))
    .catch(err => console.log(err));