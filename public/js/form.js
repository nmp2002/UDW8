//form
let formBtn = document.querySelector('.submit-btn');

formBtn.addEventListener('click', () => {
    let fullname = document.querySelector('#name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let number = document.querySelector('#number');

    //form validation
    if (fullname.value.length < 3) {
        showFormError('name must be 3 letters long');
    } else if (!email.value.length) {
        showFormError('Enter your email');
    } else if (password.value.length < 8) {
        showFormError('Password must be 8 letter long');
    } else if (Number(number) || number.value.length < 10) {
        showFormError('invalid number,please enter valid one');
    }

})
//user icon popup
let userIcon = document.querySelector('.user-icon');
let userPopupIcon = document.querySelector('.user-icon-popup');
userIcon.addEventListener('click', () => userPopupIcon.classList.toggle('active'))