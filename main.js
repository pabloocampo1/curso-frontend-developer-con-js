
//menu destok

const menuDestok = document.querySelector('.desktop-menu');
const navbarEmail = document.querySelector('.navbar-email');

navbarEmail.addEventListener("click", function() {
   menuDestok.classList.toggle('inactive');
  });

 //menu mobile

 const menuMobile = document.querySelector('.mobile-menu');
 const logoMenuMobile = document.querySelector('.menuLogo');


 logoMenuMobile.addEventListener("click", function() {
   menuMobile.classList.toggle('inactive');
 });
