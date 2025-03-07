const menuButton = document.getElementById('menu');  
const body = document.querySelector('body');
const closeBtn = document.querySelector('.close');  

menuButton.addEventListener('click', () => {
  body.classList.toggle('sidebar-open');  
});

closeBtn.addEventListener('click', () => {
  body.classList.remove('sidebar-open');  
});
