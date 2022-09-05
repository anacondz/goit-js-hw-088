var throttle = require('lodash.throttle');

const refs = {
iEmail: document.querySelector('input'),
iTextarea: document.querySelector('textarea'),
bSubmit: document.querySelector('button'),
};
const STORAGE_KEY = 'feedback-form-state';
const formData = {};


refs.iEmail.addEventListener('input',throttle(thr,500))
refs.iTextarea.addEventListener('input',throttle(thr,500))

function thr () {
    formData.message = refs.iTextarea.value;
    formData.email = refs.iEmail.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
}

if(JSON.parse(localStorage.getItem(STORAGE_KEY))){
    refs.iTextarea.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
    refs.iEmail.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
    thr();
}

refs.bSubmit.addEventListener('click', newForm)

function newForm (event) {
console.log(` message = ${formData.message} and email = ${formData.email}`)
event.preventDefault();
localStorage.removeItem(STORAGE_KEY);
refs.iEmail.value = '';
refs.iTextarea.value = '';
}