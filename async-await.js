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

const createPost = post => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 2000);
  });
};

// fetch post
(async function init() {
  await createPost({ title: "post three", content: "This is post three" });
  getPosts();
})();

// fetch users
(async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
})();
