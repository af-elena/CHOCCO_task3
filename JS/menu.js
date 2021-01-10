let menu = (function (options) {

  let buttonOpen = document.querySelector(options.buttonOpen);
  let buttonClose = document.querySelector(options.buttonClose);
  let menu = document.querySelector(options.menu);
  let body = document.querySelector('body');

  let _toggleMenu = function (e) {
    menu.classList.toggle('overlay--open');
    body.classList.toggle('body-active-menu');
  }

  let addListeners = function () {
    buttonOpen.addEventListener('click', _toggleMenu);
    buttonClose.addEventListener('click', _toggleMenu);
  }

  return {
    open: addListeners
  };
})({
  buttonOpen: '#open',
  buttonClose: '#close',
  menu: '#overlay'
});

menu.open();

  // console.log(menu)


