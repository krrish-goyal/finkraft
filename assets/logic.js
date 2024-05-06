// Footer section cod4 here

const copy = document.querySelector('.copyright-text');
const curYear = new Date().getFullYear();
copy.innerHTML = `&copy; ${curYear} Finkraft.ai All Right Reserved`;


/* const openMenu = document.querySelector('.menu-bar');
const menu = document.querySelector('.navigation');

openMenu.addEventListener('click', () =>{
    menu.classList.toggle('active');
}); */

// sticky header
window.addEventListener('scroll', () => {
  let navigation = document.querySelector('.header');
  if (window.pageYOffset >= 500) {
    navigation.classList.add('sticky');
  } else {
    navigation.classList.remove('sticky');
  }
});

// navigation bar
document.querySelector('.mobile-menu').addEventListener('click', () => {
  let nav = document.querySelector('.navigation');
  nav.classList.toggle('active');
});

// cookie code here
const cookie = document.querySelector('.cookie-popup');
const accept = document.querySelector('#accept-cookie');
const cancel = document.querySelector('#decline-cookie');

//Click event here
accept.addEventListener('click', () => {
  cookie.style = 'opacity: 0; visibility: hidden; transform: scale(0)';
  document.cookie = 'usercookie=ture; max-age=31104000; path=/';
});
cancel.addEventListener('click', () => {
  cookie.style = 'opacity: 0; visibility: hidden; transform: scale(0)';
  document.cookie = 'usercookie=flase; max-age=2592000; path=/';
});

//Check the cookie
const checkcookies = () => {
  let check = document.cookie.split('=');
  if (check[0] == 'usercookie') {
    cookie.style = 'display: none';
  } else {
    cookie.style = 'display: block';
  }
}
window.addEventListener('load', checkcookies());
