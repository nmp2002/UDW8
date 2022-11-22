//navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (scrollY >= 180) {
        navbar.classList.add('bg');
    } else {
        navbar.classList.remove('bg');
    }
})
//user icon popup
let userIcon = document.querySelector('.user-icon');
let userPopupIcon = document.querySelector('.user-icon-popup');
userIcon.addEventListener('click', () => userPopupIcon.classList.toggle('active'))

//image collage
 // const collageImages = [...document.querySelectorAll('.collage-img')]
 // collageImages.map((item, 1) => {
 //     item.addEventListener('mouseover', () => {
//         collageImages.map((image, index) => {
 //             if (index != i) {
 //                 image.getElementsByClassName.filter = 'blur(10px)';
 //                 item.style.zIndex = 2;
 //             }
 //         })
//     })
    
 //     item.addEventListener('mouseleave', () => {
 //         collageImages.map((image, index) => {
 //             image.style = null;
 //         })
 //     })
  // })

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