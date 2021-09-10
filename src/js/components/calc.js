if (document.querySelector('.calc')) {
  const cleanBtn = document.querySelector('.calc__symptom-clean'),
    checkBox = document.querySelectorAll('.calc__symptom-checkbox'),
    price = document.querySelector('.calc__price-num-span'),
    teeth = document.querySelectorAll('.calc__client-oral-span'),
    calcForm = document.querySelector('.calc__symptom-form');
    let allCheckVal = 0;

    const valueOld = {
      tooth_1: [50, 60, 70, 80, 90, 100, 110, 120],
      tooth_2: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_3: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_4: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_5: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_6: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_7: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_8: [50, 60, 70, 80, 90, 100, 110, 120],
      tooth_9: [50, 60, 70, 80, 90, 100, 110, 120],
      tooth_10: [50, 60, 70, 80, 90, 100, 110, 120],
      tooth_11: [50, 60, 70, 80, 90, 100, 110, 120],
      tooth_12: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_13: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_14: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_15: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_16: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_17: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_18: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_19: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_20: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_21: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_22: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_23: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_24: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_25: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_26: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_27: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_28: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_29: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_30: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_31: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      tooth_32: [500, 600, 700, 800, 900, 1400, 1110, 1120]
    };

    const valueChild = {
      c_tooth_1: [50, 60, 70, 80, 90, 100, 110, 120],
      c_tooth_2: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_3: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_4: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_5: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_6: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_7: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_8: [50, 60, 70, 80, 90, 100, 110, 120],
      c_tooth_9: [50, 60, 70, 80, 90, 100, 110, 120],
      c_tooth_10: [50, 60, 70, 80, 90, 100, 110, 120],
      c_tooth_11: [50, 60, 70, 80, 90, 100, 110, 120],
      c_tooth_12: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_13: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_14: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_15: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_16: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_17: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_18: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_19: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_20: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_21: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_22: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_23: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_24: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_25: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_26: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_27: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_28: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_29: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_30: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_31: [500, 600, 700, 800, 900, 1400, 1110, 1120],
      c_tooth_32: [500, 600, 700, 800, 900, 1400, 1110, 1120]
    };



    checkBox.forEach(item => item.disabled = true);



  cleanBtn.addEventListener('click', () => {
    checkBox.forEach((item) => {
      if (item.checked) {
        item.checked = false;
      }
      item.disabled = true;
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
          item.disabled = true
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
    item.addEventListener('click', (e) => {
      let currentTooth = item;

      let target = e.target; 
      if(target && target.classList.contains('child__tooth')) {
        let id = target.id,
        arr = valueChild[id];
        console.log('this');
        console.log(arr);

        for( let i = 0; i < checkBox.length; i++) {
          checkBox[i].value = '';
          checkBox[i].value = arr[i];
          console.log(checkBox[i].value);
        }
      }

      if(target && target.classList.contains('old__tooth')) {
        let id = target.id,
        arr = valueOld[id];
        console.log('this is:');
        console.log(arr);

        for(let i = 0; i < checkBox.length; i++) {
          checkBox[i].value = '';
          checkBox[i].value = arr[i];
          console.log(checkBox[i].value);
        }
      }


      checkBox.forEach((item) => {
        if(item.disabled == true) {
          item.disabled = false;
        }
      });
      if (!currentTooth.classList.contains('active')) {
        teeth.forEach((item) => {
          item.classList.remove('active');
        });
      }

      allCheckVal = 0;
      price.textContent = 0;

      currentTooth.classList.add('active');



      checkBox.forEach((item) => {
        if (item.checked) {
          item.checked = false;
        }
      });







    });



  }

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

}
