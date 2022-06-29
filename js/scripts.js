const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector('#loading');
const postsContainer = document.querySelector("#posts-container")

// Getting all the posts
async function getAllPosts() {
    const response = await fetch(url);

    console.log(response);
}

getAllPosts();