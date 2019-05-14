const fetch = require("node-fetch");

const id = 1;
const usersUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
fetch(usersUrl).then(result => result.json()).then(data => console.log('CURRENT_USER\n', data));

let postsIds = [];
const postUrl = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
fetch(postUrl).then(result => result.json()).then(data => {
    postsIds= data.map(d => d.id);
    console.log('POSTS\n', data);
});

const commentsUrl = `https://jsonplaceholder.typicode.com/comments`;
fetch(commentsUrl).then(result => result.json()).then(data => console.log('COMMENTS\n', data.filter(d => postsIds.indexOf(d.postId) !== -1)));
