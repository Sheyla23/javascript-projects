const menus=document.querySelectorAll('.menu');

// menus.forEach(menu=>{
//     const view =menu.querySelector('.view');
//     view.addEventListener('click',()=>{
//         menu.classList.add('show-benefit');
//     });
// });

// menus.forEach(menu=>{
//     const close =menu.querySelector('.close');
//     close.addEventListener('click',()=>{
//         menu.classList.remove('show-benefit');
//     });
// });

menus.forEach(menu=>{
    const btns =menu.querySelectorAll('.btn');
    btns.forEach(btn =>{
        btn.addEventListener('click',()=>{
            menu.classList.toggle('show-benefit');
        });
    }); 
});