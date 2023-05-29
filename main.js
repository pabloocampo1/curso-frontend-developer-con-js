
//menu destok

const menuDestok = document.querySelector('.desktop-menu');
const navbarEmail = document.querySelector('.navbar-email');

navbarEmail.addEventListener("click", function() {
   const isAsideclosed =  detallesProductos.classList.contains('inactive');
   
   if (!isAsideclosed){
      detallesProductos.classList.add('inactive');
   }

   menuDestok.classList.toggle('inactive');
  });


 //menu mobile


 const menuMobile = document.querySelector('.mobile-menu');
 const logoMenuMobile = document.querySelector('.menuLogo');

 logoMenuMobile.addEventListener("click", function() {
   const isAsideclosed =  detallesProductos.classList.contains('inactive');
   
   if (!isAsideclosed){
      detallesProductos.classList.add('inactive');
   }

   menuMobile.classList.toggle('inactive');
 });


 //carrito de compras (mostrar nuestros productos seleccionados)

 
 const detallesProductos = document.querySelector('.product-detail');
 const carChoppingIcon = document.querySelector('.navbar-shopping-cart');

 carChoppingIcon.addEventListener("click", function(){
   const isMobileMenuclosed =  menuMobile.classList.contains('inactive');
   
   if (!isMobileMenuclosed){
      menuMobile.classList.add('inactive');
   }
  detallesProductos.classList.toggle('inactive');
 })
