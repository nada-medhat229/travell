let heart=document.querySelectorAll(".bi-heart");
for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function() {
       heart[i].classList="bi bi-heart-fill"
      });
}