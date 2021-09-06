if (document.querySelector('.calc')) {
  const cleanBtn = document.querySelector('.calc__symptom-clean'),
    checkBox = document.querySelectorAll('.calc__symptom-checkbox'),
    price = document.querySelector('.calc__price-num-span');

  cleanBtn.addEventListener('click', () => {
    checkBox.forEach((item)=> {
      if(item.checked) {
        item.checked = false;
      }
    })
    price.textContent = 0;
  });





  checkBox.forEach(getCheckBoxAttr);

  function getCheckBoxAttr(item) {
    if(!item.checked) {
      item.addEventListener('click', () => {
        function pluser() {
          const currentCheck = item,
            currentCheckPrice = currentCheck.getAttribute('value');
          return Array.prototype.slice.call(currentCheckPrice).reduce(addMe, 0);
        }
  
        function addMe(p, c) {
          return +(p) + +(c);
        };
  
        price.textContent = pluser();
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


        checkBox.forEach((item)=> {
          if(item.checked) {
            item.checked = false;
          }
        })
        price.textContent = 0;
      });
    }
  
    document.querySelector('.calc__client-tab-btn').click();
  }

  calcTab();



  
}
