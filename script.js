// script.js

// AOS ANIMATIONS
AOS.init({
  duration:1200,
  once:true
});

// TILT EFFECT
VanillaTilt.init(document.querySelectorAll(".tilt-card"),{
  max:15,
  speed:400,
  glare:true,
  "max-glare":0.3
});

// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = '0';

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter,20);

    }else{

      counter.innerText = target;

    }

  };

  updateCounter();

});

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll",()=>{

  const navbar = document.querySelector(".navbar");

  navbar.classList.toggle(
    "scrolled",
    window.scrollY > 50
  );

});

// NEWSLETTER FORM
const form = document.getElementById("newsletter-form");

form.addEventListener("submit",(e)=>{

  e.preventDefault();

  alert("🔥 Welcome to Hustle Intelligence!");

});

// FUTURE ANALYTICS TRACKING
document.addEventListener("click",(e)=>{

  console.log("User clicked:", e.target);

  // Future:
  // Send click analytics to backend
  // Firebase / Supabase / MongoDB

});
