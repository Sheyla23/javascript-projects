const menu = document.querySelector('#menu');
const aside = document.querySelector('.sidebar');
const cancel = document.querySelector('.cancel')

menu.addEventListener('click',()=>{
    aside.classList.toggle('none');
})

cancel.addEventListener('click',()=>{
    aside.classList.toggle('none')
})