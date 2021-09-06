const headerLink = document.querySelectorAll('.header__list-link');

for (var i = headerLink.length - 1; i >= 0; i--) {
  if (headerLink[i].href == document.URL) {
    headerLink[i].classList.add('active');
  }
};

let listButton = document.querySelector('.header__list-button'),
  list = document.querySelector('.header__list-outer'),
  body = document.body;


listButton.addEventListener('click', () => {
  if (!listButton.classList.contains('active')) {
    listButton.classList.add('active');
    list.classList.add('active');
    body.classList.add('lock');
  } else {
    listButton.classList.remove('active');
    list.classList.remove('active');
    body.classList.remove('lock');
  }
});
