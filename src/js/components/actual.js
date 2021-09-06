if(document.querySelector('.actual')) {
  function actualOpen(cardSelector) {
    const actualCard = document.querySelectorAll(cardSelector);

    actualCard.forEach(cardActive);

    function cardActive(item) {
      item.classList.add('active');

      item.addEventListener('click', () => {
        item.classList.remove('active');
      });
    }
  }

  actualOpen('.actual__card');
}