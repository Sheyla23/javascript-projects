const button = document.querySelector('input');
const offer = document.querySelector('section');

button.addEventListener('click', e =>{
      offer.setAttribute('class', 'clicked');
      
});

offer.addEventListener('click', e=> {
   if(e.target.id == 'cancel') {
    offer.setAttribute('class', 'offer');
   }
});