

// Fade Transition --------------------

const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
            entry.target.classList.add('show');
      } else {
            entry.target.classList.remove('show');
      }
   });
});


// Pre-loader Fade Transition --------------------

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const fade = () => {
      const wrapper =
      document.querySelector('.wrapper');
      wrapper.classList.add('fade');
};
window.addEventListener('load', fade);

