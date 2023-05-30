const productoDetalleDetail = document.querySelector('#productDetail');
const exitDetalleDetail = document.querySelector('.product-detail-close');
//menu destok

const menuDestok = document.querySelector('.desktop-menu');
const navbarEmail = document.querySelector('.navbar-email');

navbarEmail.addEventListener("click", function() {
   const isAsideclosed =  chopingCardContainer.classList.contains('inactive');
   
   if (!isAsideclosed){
      chopingCardContainer.classList.add('inactive');
   }

   menuDestok.classList.toggle('inactive');
  });


 //menu mobile


 const menuMobile = document.querySelector('.mobile-menu');
 const logoMenuMobile = document.querySelector('.menuLogo');

 logoMenuMobile.addEventListener("click", function() {
   const isAsideclosed =  chopingCardContainer.classList.contains('inactive');
   
   if (!isAsideclosed){
      chopingCardContainer.classList.add('inactive');
   }

   productoDetalleDetail.classList.add('inactive');
   menuMobile.classList.toggle('inactive');
 });


 //carrito de compras (mostrar nuestros productos seleccionados)


 const chopingCardContainer = document.querySelector('#chopingCardContainer');
 const carChoppingIcon = document.querySelector('.navbar-shopping-cart');

 carChoppingIcon.addEventListener("click", function(){
   const isMobileMenuclosed =  menuMobile.classList.contains('inactive');
   
   if (!isMobileMenuclosed){
      menuMobile.classList.add('inactive');
   }
   const isProductDetailClosed =  productoDetalleDetail.classList.contains('inactive');
   
   if (!isProductDetailClosed){
      productoDetalleDetail.classList.add('inactive');
   }
   chopingCardContainer.classList.toggle('inactive');

})



 //products list


 const productList = [];
 productList.push({
   name:"bike",
   price:120,
   image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 })
 productList.push({
   name:"tv",
   price:420,
   image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 })
 productList.push({
   name:"car",
   price:2.220,
   image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 })
 productList.push({
   name:"motocicle",
   price:4.000,
   image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 })


 //maquetacion html desde js para los productos

 function renderProducts(arr){
   for(product of arr){
      const cardContainer = document.querySelector('.cards-container');
   
   
      const productCard = document.createElement('div');
      productCard.classList.add('product-card')
   
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.addEventListener("click", function(){

         chopingCardContainer.classList.add('inactive');
         productoDetalleDetail.classList.remove('inactive');
      });


      exitDetalleDetail.addEventListener('click', function(){
         productoDetalleDetail.classList.add('inactive');
      });
   
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
   
      const productInfodiv = document.createElement('div');
      
      const productPrice = document.createElement('p');
      productPrice.innerHTML = '$' + product.price;
   
      const productName = document.createElement('p');
      productName.innerHTML = product.name;
   
      productInfodiv.appendChild(productPrice);
      productInfodiv.appendChild(productName);
   
      const productFigure = document.createElement('figure');
      const productFigureImg = document.createElement('img');
      productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
      productFigure.appendChild(productFigureImg);
   
      productInfo.appendChild(productInfodiv)
      productInfo.appendChild(productFigure)
   
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
      
      cardContainer.appendChild(productCard);
   
    }
 }
 
 renderProducts(productList);

 

