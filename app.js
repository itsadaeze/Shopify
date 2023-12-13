// alert
function alert() {
    const alertTrigger =
      document.querySelector("#alert-menu");
    const alert = document.querySelector(
      "#alert-menu-content"
    );
  
    const allAlertMenuItems = alert.querySelectorAll(
      '[role="alertitem"]'
    );
  
    function closeAlertMenu() {
      alertTrigger.ariaExpanded = "false";
      alertTrigger.focus();
    }
  
    function handleAlertMenuEscapeKeypress(event) {
      
      if (event.key === "Escape") {
        toggleAlertMenu();
      }
    }
  
    function handleAlertMenuItemArrowKeyPress(
      event,
      menuAlertItemIndex
    ) {
    
      const isLastMenuAlertItem =
        menuAlertItemIndex === allAlertMenuItems.length - 1;
      const isFirstAlertMenuItem = menuAlertItemIndex === 0;
  
      const nextMenuAlertItem = allAlertMenuItems.item(
        menuAlertItemIndex + 1
      );
      const previousMenuAlertItem = allAlertMenuItems.item(
        menuAlertItemIndex - 1
      );
  
  
      if (
        event.key === "ArrowRight" ||
        event.key === "ArrowDown"
      ) {
       
        if (isLastMenuAlertItem) {
          allAlertMenuItems.item(0).focus();
  
          return;
        }
       
        nextMenuAlertItem.focus();
      }
  
      
      if (
        event.key === "ArrowUp" ||
        event.key === "ArrowLeft"
      ) {
        if (isFirstAlertMenuItem) {
          allAlertMenuItems.item(allAlertMenuItems.length - 1).focus();
          return;
        }
  
        previousMenuAlertItem.focus();
      }
     
    }
  
    function openAlertMenu() {
      alertTrigger.ariaExpanded = "true";
      allAlertMenuItems.item(0).focus();
  
      alert.addEventListener(
        "keyup",
        handleAlertMenuEscapeKeypress
      );
  
      
      allAlertMenuItems.forEach(function (
        alertItem,
        menuAlertItemIndex
      ) {
       alertItem.addEventListener("keyup", function (event) {
          handleAlertMenuItemArrowKeyPress(event, menuAlertItemIndex);
        });
      });
    }
  
    function toggleAlertMenu() {
      const isExpanded =
        alertTrigger.attributes["aria-expanded"].value ===
        "true";
      alert.classList.toggle("alert-active");
  
      if (isExpanded) {
        closeAlertMenu();
      } else {
        openAlertMenu();
      }
    }
  
    alertTrigger.addEventListener("click", toggleAlertMenu);
  }
  
  alert();
  
  
  
  
  //menu section
  
  function app() {
    const menuTrigger =
      document.querySelector("#profile-menu");
    const menu = document.querySelector(
      "#profile-menu-content"
    );
  
    const allMenuItems = menu.querySelectorAll(
      '[role="menuitem"]'
    );
  
    function closeMenu() {
      menuTrigger.ariaExpanded = "false";
      menuTrigger.focus();
    }
  
    function handleMenuEscapeKeypress(event) {
      
      if (event.key === "Escape") {
        toggleMenu();
      }
    }
  
    function handleMenuItemArrowKeyPress(
      event,
      menuItemIndex
    ) {
    
      const isLastMenuItem =
        menuItemIndex === allMenuItems.length - 1;
      const isFirstMenuItem = menuItemIndex === 0;
  
      const nextMenuItem = allMenuItems.item(
        menuItemIndex + 1
      );
      const previousMenuItem = allMenuItems.item(
        menuItemIndex - 1
      );
  
  
      if (
        event.key === "ArrowRight" ||
        event.key === "ArrowDown"
      ) {
       
        if (isLastMenuItem) {
          allMenuItems.item(0).focus();
  
          return;
        }
       
        nextMenuItem.focus();
      }
  
      
      if (
        event.key === "ArrowUp" ||
        event.key === "ArrowLeft"
      ) {
        if (isFirstMenuItem) {
          allMenuItems.item(allMenuItems.length - 1).focus();
          return;
        }
  
        previousMenuItem.focus();
      }
     
    }
  
    function openMenu() {
      menuTrigger.ariaExpanded = "true";
      allMenuItems.item(0).focus();
  
      menu.addEventListener(
        "keyup",
        handleMenuEscapeKeypress
      );
  
      
      allMenuItems.forEach(function (
        menuItem,
        menuItemIndex
      ) {
        menuItem.addEventListener("keyup", function (event) {
          handleMenuItemArrowKeyPress(event, menuItemIndex);
        });
      });
    }
  
    function toggleMenu() {
      const isExpanded =
        menuTrigger.attributes["aria-expanded"].value ===
        "true";
      menu.classList.toggle("menu-active");
  
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    }
  
    menuTrigger.addEventListener("click", toggleMenu);
  }
  
  app();
  
  //guide container
  
  function toggleDiv() {
      var contentDiv = document.getElementById('content');
      var arrowIcon = document.getElementById('arrow-icon');
  
      // Toggle the visibility of contentDiv
      contentDiv.classList.toggle('hidden');
  
      // Toggle the visibility of arrow-up and arrow-down images
      var arrowUp = arrowIcon.querySelector('.arrow-up');
      var arrowDown = arrowIcon.querySelector('.arrow-down');
  
      arrowUp.classList.toggle('hidden', !contentDiv.classList.contains('hidden'));
      arrowDown.classList.toggle('hidden', contentDiv.classList.contains('hidden'));
  }
  
  
  document.getElementById('content').classList.remove('hidden');
  
  
  
  // Add your existing toggleWrapper code here
  function toggleWrapper(wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    // const wrapperALL = document.getElementsById('contentWrapperAll');
    const wrappersToClose = ['themeWrapper', 'productWrapper', 'customWrapper', 'storeWrapper', 'paymentWrapper'];
  
    // Close other wrappers
    closeOtherWrappers(wrappersToClose.filter(id => id !== wrapperId));
  
    // Toggle the current wrapper
    wrapper.classList.toggle('open');
  
    // Update the progress bar
    updateProgressBar(wrapperId);
  
   // Add background color and border radius styling to the wrapper and its text
    if (wrapper.classList.contains('open')) {
       wrapper.style.backgroundColor = '#F3F3F3';
      wrapper.style.borderRadius = '8px';
      // wrapperALL.style.backgroundColor = 'red';
  
      // Apply styling to the text inside the wrapper
      const wrapperText = wrapper.querySelector('.toggleText'); // Assuming a class "toggleText" for the text
      if (wrapperText) {
        wrapperText.style.color = 'white'; // Change text color to white (or any other desired color)
      }
    } else {
       //Reset styling if the wrapper is closed
      wrapper.style.backgroundColor = '';
      wrapper.style.borderRadius = '';
  
     //  Reset styling for the text inside the wrapper
      const wrapperText = wrapper.querySelector('.toggleText'); // Assuming a class "toggleText" for the text
      if (wrapperText) {
        wrapperText.style.color = ''; // Reset text color
      }
    }
  }
  
  function closeOtherWrappers(wrappersToClose) {
    wrappersToClose.forEach(wrapperId => {
      const wrapper = document.getElementById(wrapperId);
      if (wrapper.classList.contains('open')) {
        wrapper.classList.remove('open');
        // Reset styling when closing other wrappers
        wrapper.style.backgroundColor = '';
        wrapper.style.borderRadius = '';
  
        // Reset styling for the text inside the wrapper
        const wrapperText = wrapper.querySelector('.toggleText'); // Assuming a class "toggleText" for the text
        if (wrapperText) {
          wrapperText.style.color = ''; // Reset text color
        }
      }
    });
  }
  
  
  
  document.getElementById('themeWrapperBtn').addEventListener('click', () => toggleWrapper('themeWrapper'));
  document.getElementById('productWrapperBtn').addEventListener('click', () => toggleWrapper('productWrapper'));
  document.getElementById('customWrapperBtn').addEventListener('click', () => toggleWrapper('customWrapper'));
  document.getElementById('storeWrapperBtn').addEventListener('click', () => toggleWrapper('storeWrapper'));
  document.getElementById('paymentWrapperBtn').addEventListener('click', () => toggleWrapper('paymentWrapper'));
  
  
  
  
  function updateProgressBar(section) {
    const progressBar = document.querySelector('.progress-bar');
  const progressLine = document.querySelector('.progress-line');
    const sections = ['themeWrapper', 'productWrapper', 'customWrapper', 'storeWrapper', 'paymentWrapper', /* Add other wrappers here as needed */];
  
  
    const sectionIndex = sections.indexOf(section) + 1;
  
    progressBar.textContent = `${sectionIndex}/5 completed`;
  
     
  }
  
  function closeDiv() {
    // Get the reference to the div with class "trial-text"
    var trialTextDiv = document.querySelector('.trial-container');

    // Hide the div by adding the "hidden" class
    trialTextDiv.classList.add('hidden');
}
