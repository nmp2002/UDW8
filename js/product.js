let ratingStarInput = document.querySelectorAll('.rating-star');

ratingStarInput.map((star,index) => {
    star.addEventListener('click',() => {
        for(let i = 0; i<5; i++) {
            if(i <= index) {
                ratingStarInput[i].src = 'img/fill star.png';
            }else {
                ratingStarInput[i].src = 'img/no fill star.png';
            }
        }
    })
})

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
