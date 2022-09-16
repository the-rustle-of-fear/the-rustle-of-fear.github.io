function animated(name, anim, pageY, ...style) {
    window.addEventListener('scroll', function() {
        if (Math.round(window.pageYOffset) > pageY) {
            this.document.querySelector(name).classList.add('animate__animated'); 
            this.document.querySelector(name).classList.add(anim);    
            if (style) {
                this.document.querySelector(name).style = style;   
            }     
        }
        console.log(Math.round(window.scrollY));
     
      });
      
    
}




animated('.about__title', 'animate__bounceInLeft' ,64);

animated('.about__text', 'animate__wobble',580, 'display: block');
animated('.about__photo', 'animate__flip',580, 'display: block');

animated('.portfolio_title', 'animate__bounceInLeft',900, 'display: block');
animated('.portfolio_wrapper', 'animate__bounceInLeft',1100, 'display: flex');

animated('.skills__title', 'animate__fadeInDownBig',1600, 'visibility: visible');
animated('.skills__subtitle', 'animate__rollIn',1680, 'visibility: visible');
animated('.skills__items', 'animate__backInUp',1700, 'display: grid');