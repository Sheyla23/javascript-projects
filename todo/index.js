const addTodo = document.querySelector('.add');
const list = document.querySelector('ul');
const searchForm = document.querySelector('.search input');



//to add new todos
const template = (newlist)=>{
    
    html = `<li>
    <span>${newlist}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`
    list.innerHTML += html;
};



addTodo.addEventListener('submit', e=>{
    e.preventDefault();
    const newlist = addTodo.add.value.toLowerCase().trim();
    if (newlist.length){
        template(newlist);
    }  
    addTodo.reset();
});

//to delete todos
list.addEventListener('click' ,e=>{
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    } 
});

//to search todos

const search = (keyword) => {
    Array.from(list.children)
        .filter((todo)=>{
            return !todo.textContent.includes(keyword);
        })
        .forEach((todo)=>{
            todo.classList.add('filtered')
        });
    
    
};

searchForm.addEventListener('keyup', (e)=>{
       const keyword = searchForm.value.toLowerCase();
        search(keyword);

});



