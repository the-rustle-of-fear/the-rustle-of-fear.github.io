const humburger = document.querySelector('#main-screen_hamburger'),
      menu = document.querySelector('.header__nav'),
      logo = document.querySelector('.header__img'),
      ul = document.querySelector('.header__ul'),
      close = document.querySelector('.close_humburger'),
      body = document.querySelector('body');

humburger.addEventListener('click', () => {
    ul.style = 'height: 100vh; flex-direction: column; ';
    menu.style = 'display: flex; justify-content: space-between; background-color: rgba(125,125,55, 0.8); height: 100vh;';
    humburger.style.display = 'none';
    close.style.display = 'block';
    body.style = 'overflow: hidden';
    console.log(close.style.display);
});

close.addEventListener('click', () => {
    ul.style = '';
    menu.style = '';
    logo.style.display = 'flex';
    close.style.display= 'none';
    body.style = '';
    if (window.innerWidth <= 760){
        humburger.style.display = 'flex';
    }
    console.log(window.innerWidth);
    console.log(close.style.display);
    
})

window.addEventListener('resize', () => {
    if (window.innerWidth <= 760 && close.style.display == 'none'){
        humburger.style.display = 'flex';
    }
});

window.addEventListener('scroll', function() {
    if (Math.round(window.pageYOffset) <= 346) {
        document.querySelector('.header__nav').style.background = 'none';
        humburger.className = 'hamburger up';
        
    } else {
        document.querySelector('.header__nav').style = 'background: linear-gradient(90deg, rgba(255,0,224,0.7738445720084909) 0%, rgba(0,31,255,1) 100%);';
        humburger.className = 'hamburger hamburger__down';
    
    }
    
  });
