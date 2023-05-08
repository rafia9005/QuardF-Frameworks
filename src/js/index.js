/*? no js js needed from me */
const navBox = document.querySelector('#nav-box');

document.querySelector('#nav-btn').onclick = () => {
    navBox.classList.toggle('active');
}

// get started button
function docs (){
    window.location.href='docs'
}
// get show modal button
const modalBox = document.querySelector('.get-box');
const buttonModal = document.querySelector('#show-get-btn');
const buttonModal1 = document.querySelector('#show-get-btn1');
const buttonExit = document.querySelector('#close-btn');

buttonModal.onclick = function(){
  modalBox.style.display = "block";
}
buttonModal1.onclick = function(){
  modalBox.style.display = "block";
}
buttonExit.onclick = function(){
  modalBox.style.display = "none";
}

// copy code button
function copyText() {
  navigator.clipboard.writeText
      ('https://cdn.rafii.site/quardf/styles.css');
}
