
/* card next-prev */
let activeIndex = 0;
const groups = document.getElementsByClassName("cards-group");

const handleNextClick = () => {
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
  const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  currentGroup.dataset.status = "before";
  nextGroup.dataset.status = "becoming-active-frm-after";
  setTimeout(() =>{
    nextGroup.dataset.status = "active"; 
    activeIndex = nextIndex; 
  })            
};

const handleLoveClick = () => {
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
  const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  currentGroup.dataset.status = "after";
  nextGroup.dataset.status = "becoming-active-frm-before";
  setTimeout(() =>{
  nextGroup.dataset.status = "active"; 
  activeIndex = nextIndex; 
})          
};

document.getElementById("next-button").addEventListener("click", handleNextClick);
document.getElementById("like-button").addEventListener("click", handleLoveClick);

/* card -text*/
document.querySelectorAll('.cards-box').forEach(box => {
  const spotlight = box.querySelector('.spotlight');
  const textOverlay = box.querySelector('.text-overlay');
  box.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlight.style.left = `${x}px`;
    spotlight.style.top = `${y}px`;
    textOverlay.style.left = `${x}px`;
    textOverlay.style.top = `${y}px`;
  });
});

/* In wild sec slider */
        const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}



window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);






/* copy right sec*/
const currentYear = new Date().getFullYear();

  // Create the copyright text
  const copyrightText = `&copy; ${currentYear} Petsy Pty Ltd. All rights reserved.`;

  // Insert the copyright text into the specified HTML element
  document.getElementById('copyright').innerHTML = copyrightText;


  /* carsouel sec*/
  $(document).ready(function(){
    $('.carousel1').owlCarousel({
      loop:true,
      margin:10,
      dots:false,
      autoplay:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  })
/* second carsouel*/
        $('.owl-carousel-2').owlCarousel({
      loop:true,
      margin:10,
      autoplay:true,
      dots:false,
      autoplayTimeout:1000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
  })
  });

  /* toogle navbar sec*/
  document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    const isBigScreen = () => window.innerWidth >= 992;

    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        navbar.classList.add('navbar-hidden');
      } else {
        navbar.classList.remove('navbar-hidden');
      }
      lastScrollTop = scrollTop;

      const threshold = isBigScreen() ? 200 : 400;
      if (scrollTop > threshold) {
        navbar.classList.add('navbar-sticky');
      } else {
        navbar.classList.remove('navbar-sticky');
      }
    });
  });