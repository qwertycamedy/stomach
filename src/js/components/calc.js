if (document.querySelector('.calc')) {
  const cleanBtn = document.querySelector('.calc__symptom-clean'),
    checkBox = document.querySelectorAll('.calc__symptom-checkbox'),
    price = document.querySelector('.calc__price-num-span'),
    teeth = document.querySelectorAll('.calc__client-oral-span'),
    calcForm = document.querySelector('.calc__symptom-form');
    let allCheckVal = 0;




  cleanBtn.addEventListener('click', () => {
    checkBox.forEach((item) => {
      if (item.checked) {
        item.checked = false;
      }
    });

    allCheckVal = 0;
    price.textContent = 0;

    teeth.forEach((item) => {
      item.classList.remove('active');
    });
  });














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

        allCheckVal = 0;
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

      price.textContent = 0;
      allCheckVal = 0;

      currentTooth.classList.add('active');


      checkBox.forEach(getCheckBoxAttr);

      function getCheckBoxAttr(item) {
        item.addEventListener('click', () => {
          if (item.checked) {
            allCheckVal += +item.value;
          } else {
            allCheckVal -= +item.value;
          }
          price.textContent = allCheckVal;
        });
      }


      checkBox.forEach((item) => {
        if (item.checked) {
          item.checked = false;
        }
      });







    });



  }


}
