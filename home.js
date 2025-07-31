const postsContainer = document.getElementById("feed");

// Array of post image filenames
const postImages = ["post1.jpg", "post2.jpg", "post3.jpg", "post4.jpg", "post5.jpg", "post6.jpg"];

// Shuffle array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Get random 5 images
const randomPosts = shuffle(postImages);

// Create and add each post
randomPosts.forEach((img, index) => {
  const post = document.createElement("div");
  post.classList.add("post");

  post.innerHTML = `
    <img src="${img}" alt="Post ${index + 1}" />
    <div class="actions">
      <span class="username">@user${index + 1}</span>
      <span class="like-btn">❤️</span>
    </div>
  `;

  postsContainer.appendChild(post);
});

// Like functionality
document.querySelectorAll(".like-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
  });
});
