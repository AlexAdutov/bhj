// document.addEventListener("DOMContentLoaded", function () {
//     const modalMain = document.getElementById("modal_main");
//     const modalSuccess = document.getElementById("modal_success");
//     const modalCloseButtons = Array.from(document.getElementsByClassName('modal__close'));
//     //const modalCloseButtons = document.getElementsByClassName('modal__close');
  
//     modalMain.classList.add("modal_active");
//     //modalSuccess.classList.add("modal_active");
  
//     modalCloseButtons.forEach(function (button) {
//       button.addEventListener("click", function () {
//         modalMain.classList.remove("modal_active");
//         modalSuccess.classList.remove("modal_active");
//       });
//     });
  
//     const showSuccessButton = document.querySelector(".show-success");
//     showSuccessButton.addEventListener("click", function (event) {
//       event.preventDefault();
//       modalMain.classList.remove("modal_active");
//       modalSuccess.classList.add("modal_active");
//     });
  
//     const goodJobButton = document.querySelector(".btn_success");
//     goodJobButton.addEventListener("click", function (event) {
//       event.preventDefault();
//       modalSuccess.classList.remove("modal_active");
//     });
//   });
  

// const main = document.getElementById('modal_main');
// const success = document.getElementById('modal_success');
// const button = document.querySelector('a.show-success');
// let closeCrosses = document.querySelectorAll('div.modal__close');

// function active(tagName) {
//     tagName.classList.add('modal_active');
// }

// function closed(tagName) {
//     tagName.classList.remove('modal_active');
// }

// active(main); 
// button.onclick = function(){
//     active(success);
//     closed(main);
// };



// closeCrosses.forEach(function(closeButton) {
//     closeButton.onclick = function() {
//         closed(main);
//         closed(success);  
//         return false;      
//     }

// })

// closeCrosses.forEach(function(closeButton) {
//     closeButton.onclick = function() {
//         closed(this.parentElement.parentElement);
//     }

const main = document.getElementById('modal_main');
const success = document.getElementById('modal_success');
const buttonRed = document.querySelector('.btn_danger');
const buttonGreen = document.querySelector('.btn_success');
let closeCrosses = Array.from(document.querySelectorAll('.modal__close_times'));

function active(tagName) {
    tagName.classList.add('modal_active');
}

function closed(tagName) {
    tagName.classList.remove('modal_active');
}

const toggle = (e) => {
  
  e.preventDefault();
  console.log(e)
  active(success);
  closed(main);
}
active(main); 
buttonRed.addEventListener('click', toggle);

// buttonRed.onclick = function(){
//     active(success);
//     closed(main);
//     return false; 
// };
buttonGreen.onclick = function(){
    active(main);
    closed(success);
    // buttonRed.removeEventListener('click', toggle);
    return false; 
};

closeCrosses.forEach((elem) => {
    elem.onclick = function(event) {
      // const parent = elem.closest('.modal');
      const parent = event.target.closest('.modal');
        closed(parent);           
    }
})