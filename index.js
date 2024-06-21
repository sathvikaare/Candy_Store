burger=document.querySelector('.burger');
navbarList=document.querySelector(".navbar");
nav=document.querySelector('.items');

burger.addEventListener('click',()=>{
    navbarList.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})