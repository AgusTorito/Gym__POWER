 // Scroll Reveal con IntersectionObserver
 const posts = document.querySelectorAll('.post');
 const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       entry.target.classList.add('visible');
     }
   });
 }, { threshold: 0.1 });
 posts.forEach(post => observer.observe(post));

 // Modo oscuro
 const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
 if (prefersDark) document.body.classList.add('dark');