console.log('hello from JS file');

const landing = document.querySelector('.landing');
const logoA = document.querySelector('.logo a');
const logoASpan = document.querySelector('.logo a span');
const NavItemTxt = document.querySelectorAll('.header-bin ul li a');
const NavButton = document.querySelector ('.header-bin button.right');

let statusas =  'normal';

// Add an event listener for the scroll event
window.addEventListener('scroll', _ => {
  
  if (window.scrollY > 50 ) {
    // Add the 'header-scrolled' class when scrolling
    statusas = 'scrolled';
  } else {
    // Remove the 'header-scrolled' class when back at the top
    statusas = 'normal';
  }
});


window.addEventListener('scroll', _ =>{
    if (statusas === 'scrolled'){
        landing.style.backgroundColor = 'var(--brand-green)';
        logoA.style.color = 'var(--white)';
        logoASpan.style.color = 'var(--white)';
        for(i = 0; i < NavItemTxt.length; i++){
            NavItemTxt[i].style.color = 'var(--white)';
        }
        NavButton.style.color = 'var(--white)';
        NavButton.style.backgroundColor = 'var(--brand-green)';
        NavButton.style.border = '1px solid var(--white)';
    } else {
        landing.style.backgroundColor = 'var(--brand-green-light)';
        logoA.style.color = 'black';
        logoASpan.style.color = 'var(--brand-green)';
        for(i = 0; i < NavItemTxt.length; i++){
            NavItemTxt[i].style.color = 'var(--brand-green)';
        }
        NavButton.style.color = 'var(--brand-green)';
        NavButton.style.backgroundColor = 'var(--brand-green-light)';
        NavButton.style.border = '1px solid var(--brand-green)';
    }
});