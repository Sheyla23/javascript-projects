const images = document.querySelector('.slides');
const buttons = document.querySelectorAll('button');
const numberOfImages =  document.querySelectorAll('.slides img').length;

let imageIndex = 1;
let translate =0;


buttons.forEach(button =>{
    button.addEventListener('click',e =>{
        
        if(e.target.id == 'next'){
            if(imageIndex!==numberOfImages){
                imageIndex++;
                translate -= 300;
            }
        } else{
            if(imageIndex !== 1){
                imageIndex--;
                translate +=300;
            }
        }
        images.style.transform =`translateX(${translate}px)`;
       
    })
})