if (document.querySelector('.calc')) {
  const cleanBtn = document.querySelector('.calc__symptom-clean'),
    checkBox = document.querySelectorAll('.calc__symptom-checkbox'),
    price = document.querySelector('.calc__price-num-span'),
    teeth = document.querySelectorAll('.calc__client-oral-span');




  cleanBtn.addEventListener('click', () => {
    checkBox.forEach((item) => {
      if (item.checked) {
        item.checked = false;
      }
    });

    price.textContent = 0;

    teeth.forEach((item) => {
      item.classList.remove('active');
    });
  });





  checkBox.forEach(getCheckBoxAttr);

  function getCheckBoxAttr(item) {
    if (!item.checked) {
      item.addEventListener('click', () => {
        const currentCheck = item,
          currentCheckPrice = currentCheck.getAttribute('value'),
          sum = 0;

        for(var i = 0; i < checkBox.length; i++) {
          price.textContent = sum + +currentCheckPrice;
        }
      });
    }
  }






  function calcTab() {
    const tabBtn = document.querySelectorAll('.calc__client-tab-btn'),
      tabContent = document.querySelectorAll('.calc__client-tab-content');

    tabBtn.forEach(onTabBtnClick);

    function onTabBtnClick(item) {
      item.addEventListener('click', () => {
        const currentBtn = item,
          tabId = currentBtn.getAttribute('data-calc-tab'),
          currentTabContent = document.querySelector(tabId);


        if (!currentBtn.classList.contains('acitve')) {
          tabBtn.forEach((item) => {
            item.classList.remove('active');
          });
          tabContent.forEach((item) => {
            item.classList.remove('active');
          });


          currentBtn.classList.add('active');
          currentTabContent.classList.add('active');
        }


        checkBox.forEach((item) => {
          if (item.checked) {
            item.checked = false;
          }
        });

        price.textContent = 0;

        teeth.forEach((item) => {
          item.classList.remove('active');
        });
      });
    }

    document.querySelector('.calc__client-tab-btn').click();
  }

  calcTab();





  teeth.forEach(clickTeeth);

  function clickTeeth(item) {
    item.addEventListener('click', () => {
      let currentTooth = item;

      if (!currentTooth.classList.contains('active')) {
        teeth.forEach((item) => {
          item.classList.remove('active');
        });
      }

      currentTooth.classList.add('active');

      checkBox.forEach((item) => {
        if (item.checked) {
          item.checked = false;
        }
      });

      price.textContent = 0;
    });
  }


}
