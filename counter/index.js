const decrease = document.querySelector('.btnD');
const reset = document.querySelector('.btnR');
const increase = document.querySelector('.btnI')
const div = document.querySelector('div');
const number = document.querySelector('p');

let counter = 0;

// decrease.addEventListener('click',()=>{
//     counter--
//     number.innerText = counter;
// })

// reset.addEventListener('click',()=>{
//     number.innerText = counter;
// })

// increase.addEventListener('click',()=>{
//     counter++
//     number.innerText = counter;
// })

div.addEventListener('click', e=>{
    
    console.log(e.target.innerText);
    if(e.target.innerText == 'Decrease'){
        counter--;
        
    }else if(e.target.innerText == 'Increase'){
        counter++;
        
    } else{
        counter = 0;
    }
    number.innerText = counter;
    
    if (counter < 0){
        number.style.color = 'red'
    }
    if (counter > 0){
        number.style.color = 'green'
    }
    if (counter == 0){
        number.style.color = 'black'
    }

    // if(number.innerText.toString(16).includes('-')){
    //     number.style.color = 'red'
    // } else {
    //     number.style.color = 'green'
    // }
})