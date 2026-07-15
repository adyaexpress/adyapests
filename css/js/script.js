// =========================
// AdyaPests JavaScript
// =========================

// Smooth appearance animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

// Sticky header shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 80){

    header.style.background = "#083B7C";
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";

  }else{

    header.style.background = "#0B4EA2";
    header.style.boxShadow = "0 8px 25px rgba(0,0,0,.1)";

  }

});

// Contact form
const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you for contacting AdyaPests! We will contact you shortly.");

form.reset();

});

}
