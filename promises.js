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
      let error = false;

      if (!error) {
        resolve();
      } else {
        reject("ERROR: Something went wrong");
      }
    }, 2000);
  });
};

// getPosts();
createPost({ title: "post three", content: "This is post three" })
  .then(getPosts)
  .catch(err => console.log(err));
