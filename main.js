const dropDownMenu = function() {

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.nav_container');

  burger.addEventListener('click', () => {
    menu.classList.toggle('nav_active');
  });

  menu.addEventListener('click', hideMenu, false);

  function hideMenu(e) {
    if (e.target !== e.currentTarget) {
      menu.classList.remove('nav_active')
    }
  }
}

dropDownMenu();