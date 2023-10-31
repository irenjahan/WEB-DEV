

function myfunction()
{
  let n=parseInt(prompt("Enter a number "));
  let guess=(Math.floor(Math.random()*5))+1;
  if(n==guess)
  
     {
      alert("Congrulations you get " +guess+"discount"+guess);
    } 
  else{
    alert("sorry you didn't get a discount"+guess+"number");
  }
}


const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});

var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay:{
    delay:7500,
    disableOnInteraction: false,

  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    
    },
    768: {
      slidesPerView: 2,
      
    },
    1020: {
      slidesPerView: 3,
    
    },
  },
});