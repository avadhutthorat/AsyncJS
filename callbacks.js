const posts = [
  { title: "post one", content: "This is post one" },
  { title: "post two", content: "This is post two" }
];

const getPosts = () => {
  let output = "";
  setTimeout(() => {
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

getPosts();
createPost({ title: "post three", content: "This is post three" }, getPosts);
