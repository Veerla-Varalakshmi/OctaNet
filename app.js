let input = document.querySelector('.entered-list');
let addbtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup',() => {
    if (input.value.trim() !=0){
        addbtn.classList.add('active')
        
        }else{
            addbtn.classList.remove('active')
        }
})

addbtn.addEventListener('click',() => {
    if (input.value.trim() !=0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
         <p> ${input.value} </p>
        <div class="item-btn">
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-duotone fa-solid fa-rectangle-xmark"></i>
        </div>
        
        `
        tasks.appendChild(newItem) ;
        input.value='';

    }else{
        alert('Please enter a task ')
    }

})

tasks.addEventListener('click',(e) =>{
    if(e.target.classList.contains('fa-rectangle-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})

tasks.addEventListener('click',(e) =>{
    if(e.target.classList.contains('fa-pen-to-square')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})