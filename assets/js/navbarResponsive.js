const btnMenu = document.querySelector(".hamburger");

btnMenu.onclick = () => {
   const menuElements = document.querySelector(".navbar");

   if (menuElements.classList.contains("active")) {
      menuElements.classList.remove("active");
   } else {
      menuElements.classList.add("active");
   }
};
