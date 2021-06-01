const thumbsUp = document.querySelector(".btn-thumbs-up");
const thumbsDown = document.querySelector(".btn-thumbs-down");
const btnPlus = document.querySelector(".btn-plus");

const btnDown = document.getElementById('btn-down');
const cardOverlay = document.getElementById('card-overlay');
const btnUp = document.getElementById('btn-up');

btnPlus.addEventListener('click', () => {
    btnPlus.classList.toggle('thumb-selected');
})

thumbsUp.addEventListener('click', () => {
    thumbsUp.classList.toggle('thumb-selected');
    if (thumbsDown.classList.contains("thumb-selected")) {
        thumbsDown.classList.remove("thumb-selected");
      }
})

thumbsDown.addEventListener('click', () => {
    thumbsDown.classList.toggle('thumb-selected');
    if (thumbsUp.classList.contains("thumb-selected")) {
        thumbsUp.classList.remove("thumb-selected");
      }
})

btnDown.addEventListener('click', () => {
    cardOverlay.style.display = "block";
})

btnUp.addEventListener('click', () => {
    cardOverlay.style.display = "none";
})

