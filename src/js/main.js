function darkToggle() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
const moreInfo = document.querySelector('.nav-box')

document.querySelector('.nav-btn').onclick = () => {
  moreInfo.classList.toggle('active');
}
// info modal show button
const modalBox = document.querySelector('.more-info');
const buttonModal = document.querySelector('#more-info-btn');
const buttonExit = document.querySelector('#modal-exit');

buttonModal.onclick = function(){
  modalBox.style.display = "block";
}

buttonExit.onclick = function(){
  modalBox.style.display = "none";
}
// notif
const notif = document.querySelector('.notif');
const closeNotif = document.querySelector('.close-notif')

closeNotif.onclick = function(){
  notif.style.display = "none";
}