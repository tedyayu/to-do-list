const addButton=document.querySelector('.addButton');
const theForm=document.querySelector('.theForm');
const todo=document.querySelector('.todo-container');
const todoTitle=document.querySelector('.todo-title');
const dueDate=document.querySelector('#date');
const description=document.querySelector('#message');
const priority=document.querySelector('#priority');
const addToDo=document.querySelector('.addtodo');

addButton.addEventListener('click',showtodoform);
let isShowing='no';

function showtodoform(){
    
    if(isShowing=='no'){
        theForm.style.display='block';
        isShowing='yes';
    }
    else if(isShowing=='yes') {
        theForm.style.display='none';
        isShowing='no';
    }
    
}
addToDo.addEventListener('click', addLists);


function addLists(){
    let todoTitleValue=todoTitle.value;
    let dueDateValue=dueDate.value;
    let descriptionValue=description.value;
    let priorityValue=priority.value;

    class Todolist{
        constructor(todoTitleValue,dueDateValue,descriptionValue,priorityValue){
            this.todoTitleValue=todoTitleValue;
            this.dueDateValue=dueDateValue;
            this.descriptionValue=descriptionValue;
            this.priorityValue=priorityValue;
        }
    }

    let TodolistArray=[];
    let myTodolist=new Todolist(todoTitleValue,dueDateValue,descriptionValue,priorityValue)
    TodolistArray.push(myTodolist);

    for(let i=0;i<TodolistArray.length;i++){
        let cards=document.createElement('div');
        cards.classList.add('theNew');
        let title=document.createElement('p')
        title.textContent=TodolistArray[i].todoTitleValue;
        let theDueDate=document.createElement('p');
        theDueDate.textContent=TodolistArray[i].dueDateValue;
        let thedescription=document.createElement('p');
        thedescription.textContent=TodolistArray[i].descriptionValue;
        let thepriority=document.createElement('p');
        thepriority.textContent=TodolistArray[i].priorityValue;

        edit=document.createElement('button');
        edit.textContent='edit'
        let deletebutton=document.createElement('button');
        deletebutton.textContent='delete'

        cards.appendChild(title);
        cards.appendChild(theDueDate);
        cards.appendChild(thedescription);
        cards.appendChild(thepriority);
        cards.appendChild(edit);
        cards.appendChild(deletebutton);
        todo.appendChild(cards);

        edit.addEventListener('click',()=>{editValue(title)});
        function editValue(title){
            title.textContent=todoTitle.value;
            cards.removeChild(edit)
            cards.removeChild(deletebutton)
            let save=document.createElement('button');
            save.textContent='save';
            cards.appendChild(save)
    
            
    
            save.addEventListener('click',()=>{saveValue(title)});
            
        }
        function saveValue(title){
            title.textContent=todoTitle.value;
            cards.removeChild(save);
            let edit=document.createElement('button');
            edit.textContent='edit'
            let deletebutton=document.createElement('button');
            deletebutton.textContent='delete'
            cards.appendChild(edit);
            cards.appendChild(deletebutton);
            edit.addEventListener('click',()=>{editValue(title)});
        }
        

       
        
        
    }
    
    
}
