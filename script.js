const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Reveal Animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const top = el.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (top < windowHeight - visiblePoint) {
      el.classList.add("active");
      startCounter();
    }
  });
}

window.addEventListener("scroll", revealOnScroll);


// Counter Animation
function startCounter() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    if (counter.classList.contains("counted")) return;

    counter.classList.add("counted");

    const target = +counter.getAttribute("data-target");
    let count = 0;
    const speed = target / 200;

    const updateCount = () => {
      count += speed;

      if (count < target) {
        counter.innerText = Math.floor(count).toLocaleString();
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    updateCount();
  });
}

// Scroll Reveal Animation
function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      el.classList.add("active");
      startCounter();
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// Counter Animation
function startCounter() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    if (counter.classList.contains("counted")) return;

    counter.classList.add("counted");

    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / 180;

    function update() {
      count += increment;
      if (count < target) {
        counter.innerText = Math.floor(count).toLocaleString();
        requestAnimationFrame(update);
      } else {
        counter.innerText = target.toLocaleString();
      }
    }

    update();
  });
}


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});


/*FAQ*/

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  const btn = item.querySelector(".accordion-question");

  btn.addEventListener("click", () => {

    // Close other items (optional but professional)
    accordionItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle current item
    item.classList.toggle("active");
  });
});

// more questions

revealOnScroll();

