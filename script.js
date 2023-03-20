'use strict'

// Ref HTML Documents
const showBtn = document.querySelector('.show-button');
const closeBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const allBtns = document.querySelectorAll('.show-button');

// Show modal function
const showModal = (e) => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// Close modal function
const closeModal = (e) => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// For testing purpose single button 😊
// showBtn.addEventListener('click', showModal);
// closeBtn.addEventListener('click', closeModal);

for (let i = 0; i < allBtns.length; i++) {
  allBtns.forEach(btn => {
    btn.addEventListener('click', showModal);
  });
  closeBtn.addEventListener('click', closeModal);
}

