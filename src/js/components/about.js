if(document.querySelector('.about')) {
  function aboutTab() {
    const tabBtn = document.querySelectorAll('.about__tab-btn'),
      tabContent = document.querySelectorAll('.about__tab-content');
  
    tabBtn.forEach(onTabBtnClick);
  
    function onTabBtnClick(item) {
      item.addEventListener('click', () => {
        const currentBtn = item,
          tabId = currentBtn.getAttribute('data-about-tab'),
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
  
    document.querySelector('.about__tab-btn').click();
  }

  aboutTab();
}