const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const animationObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('animating');
        } else {
            entry.target.classList.remove('animating');
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
const animateElements = document.querySelectorAll(".animate");

hiddenElements.forEach(el => observer.observe(el));
animateElements.forEach(el => animationObserver.observe(el));
