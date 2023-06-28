"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModal = function () {
  //console.log("Button Clicked");
  //当按键被触发时，modal中删除hidden，让文本显示出来
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//querySelectorAll is to select all .show-modal, because there are three buttons, this will crete a nodeList of 3 elements, we could use for loop to access to each element of it
const btnShowMOdal = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnShowMOdal.length; i++) {
  btnShowMOdal[i].addEventListener("click", openModal);
  //console.log(btnShowMOdal[i].textContent);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//"keydown" will fire when a key is press down, The "keypress" event will continue to trigger as long as a key is pressed down without being released， "keyup" will fire when the key is released;
document.addEventListener("keydown", function (e) {
  //console.log(e.key);

  //when press ESC, we want the modal to close. 1. check if user is pressing "ESC".   2. check if modal has "hidden", yes then it is not visiable, no then it is visiable
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
