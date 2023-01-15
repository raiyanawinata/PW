const burgerToggle = document.querySelector('.burger input');
const nav = document.querySelector('nav ul');

  burgerToggle.addEventListener('click', function ()  {
    nav.classList.toggle('slide')
  });

