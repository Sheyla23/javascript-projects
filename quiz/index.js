const quiz = document.querySelector('.quizform');
const result = document.querySelector('p');

const correctAnswers = ['A','A','A','A','A'];




quiz.addEventListener('submit', e => {
   e.preventDefault();
   let score = 0;
   const userAnswers= [quiz.q1.value, quiz.q2.value, quiz.q3.value, quiz.q4.value, quiz.q5.value];
   userAnswers.forEach((answer,index)=>{
      if(answer === correctAnswers[index]){
         score += 20;
      }
   });
   scrollTo(0,0);
   result.style.display ='block';

   let count = 0;
   const counter = setInterval(()=>{
      result.firstElementChild.innerText = `${count}`;
      if (count === score){
         clearInterval(counter);
      } else{
         count++;
      }
   },10);
   
});
  