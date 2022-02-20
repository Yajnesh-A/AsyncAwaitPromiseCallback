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

function addPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
        const err = false;
        if(!err){
            resolve();
        }
        reject("Error");
    },2000);
    })
}

async function main(){
    await addPost({
        title: "Third Post",
        content: "This is third post"
    })
    getPosts();
}

main();