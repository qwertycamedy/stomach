if(document.querySelector('.services-tab__tab-outer')) {
  function servicesTab() {
    const tabBtn = document.querySelectorAll('.services-tab__tab-btn'),
      tabContent = document.querySelectorAll('.services-tab__tab-content');
  
    tabBtn.forEach(onTabBtnClick);
  
    function onTabBtnClick(item) {
      item.addEventListener('click', () => {
        const currentBtn = item,
          tabId = currentBtn.getAttribute('data-services-tab-tab'),
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
  
    document.querySelector('.services-tab__tab-btn').click();
  }

  servicesTab();
}