document.getElementById('menuToggle').addEventListener('click', () => {
    const leftMenu = document.getElementById('left-menu');
    leftMenu.classList.toggle('collapsed');
});




 function adjustPageZoom() {
    console.log("hello world")
     const width = window.innerWidth;
     if (width >= 992 && width <= 1600) {
         document.body.style.transform = 'scale(0.9)';
     } else if (width >= 700 && width <= 767) {
         document.body.style.transform = 'scale(0.8)';
     } else if (width >= 600 && width < 700) {
         document.body.style.transform = 'scale(0.75)';
     } else if (width <= 600) {
         document.body.style.transform = 'scale(0.5)';
     } else {
         document.body.style.transform = 'scale(1)';
     }
 }

 window.addEventListener('resize', adjustPageZoom);
 window.addEventListener('load', adjustPageZoom);