if(document.querySelector('.price')) {
  function priceTab() {
    const tabBtn = document.querySelectorAll('.price__tab-btn'),
      tabContent = document.querySelectorAll('.price__tab-content');
  
    tabBtn.forEach(onTabBtnClick);
  
    function onTabBtnClick(item) {
      item.addEventListener('click', () => {
        const currentBtn = item,
          tabId = currentBtn.getAttribute('data-price-tab'),
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
  
    document.querySelector('.price__tab-btn').click();
  }

  priceTab();
}