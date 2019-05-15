const fetch = require("node-fetch");

const postUrl = 'https://jsonplaceholder.typicode.com/posts';
let posts1 = fetch(postUrl).then(result => result.json()).then(data => data.filter(p => p.id === 1));
let posts2 = fetch(postUrl).then(result => result.json()).then(data => data.filter(p => p.id === 2));
let posts3 = fetch(postUrl).then(result => result.json()).then(data => data.filter(p => p.id === 3));

Promise.race([posts1, posts2, posts3])
    .then(result => console.log(result))
    .catch(err => console.log(err));