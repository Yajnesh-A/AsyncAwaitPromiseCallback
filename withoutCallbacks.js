const posts = [
    {
        title: "First Post",
        content: "This is first post"
    },
    {
        title: "Second Post",
        content: "This is second post"
    }
];

function getPosts(){
    setTimeout(() => {
        posts.forEach((post) => {
            console.log("Post Title "+post.title)
        });
    }, 2000);
}

function addPost(post){
    setTimeout(() => {
        posts.push(post)  
    }, 4000);
}

getPosts();
addPost({ title: "Third Post", content: "This is third post" })