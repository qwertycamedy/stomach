if(document.querySelector('.labEq')) {
  function labEqTab() {
    const tabBtn = document.querySelectorAll('.labEq__tab-btn'),
      tabContent = document.querySelectorAll('.labEq__tab-content');
  
    tabBtn.forEach(onTabBtnClick);
  
    function onTabBtnClick(item) {
      item.addEventListener('click', () => {
        const currentBtn = item,
          tabId = currentBtn.getAttribute('data-labEq-tab'),
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
      });
    }
  
    document.querySelector('.labEq__tab-btn').click();
  }

  labEqTab();
}


