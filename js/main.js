const commentField = document.querySelector(".comment-field");
const clickToPost = document.querySelector(".click-to-post");


const addComment = () => {
  const commentContent = commentField.value;
  const newDiv = document.createElement('div');
  newDiv.innerText = commentContent;
  const newComment = document.querySelector(".new-comment");
  newComment.appendChild(newDiv);
  this.value = "";
}

clickToPost.addEventListener("click", addComment);

commentField.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    addComment();
  }
});
