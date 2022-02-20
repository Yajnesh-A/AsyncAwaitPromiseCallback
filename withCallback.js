const posts = [
    {
        title: "First Post",
        content: "This is first post"
    },
    {
        title: "Second Post",
        content: "This is second post"
    },
];

function getPosts(){
    setTimeout(() => {
        posts.forEach(post => {
            console.log("Title is ",post.title)
        });
    }, 1000);
}

function addPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

addPost({
    title: "Third Post",
    content: "This is third post"
},getPosts)