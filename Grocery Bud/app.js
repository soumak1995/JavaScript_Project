// ****** SELECT ITEMS **********
const alert=document.querySelector('.alert')
const form =document.querySelector('.grocery-form')
const grocery =document.querySelector('#grocery')
const submitBtn=document.querySelector('.submit-btn')
const container=document.querySelector('.grocery-container')
const list=document.querySelector('.grocery-container');
const clearBtn=document.querySelector('.clear-btn')
// edit option
let editElement;
let editFlag = false;
let editID="";
// ****** EVENT LISTENERS **********

//submit form
form.addEventListener("submit",addItem);
//clear item
clearBtn.addEventListener("click",clearItem);
// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id=new Date().getTime().toString();
    console.log(id);
    if(value && !editFlag){
       const element = document.createElement('article');
       element.classList.add('grocery-item');
       const attr = document.createAttribute('data-id');
       attr.value = id;
       element.innerHTML = `
       <p class="title">${value}</p>
       <div class='btn-container'> 
         <button type="button" class="edit-btn">
              <i class="fas fa-edit"></i>
         </button>
         <button type="button" class="delete-btn">
           <i class="fas fa-trash"></i>
        </button>
       </div>`;
       list.appendChild(element);
       dispayAlert("Item added to the list","success");
       container.classList.add("show-container");
       setBackToDefault();
    }else if(value && editFlag){
        console.log('editing')
    }else{
        dispayAlert('Please enter value','danger');
    }
}
//display alert
function dispayAlert(text,action){
    alert.textContent=text;
    alert.classList.add(`alert-${action}`);
    setTimeout(function(){
        alert.textContent='';
        alert.classList.remove(`alert-${action}`);
    },1000)
}
//set backto default
  function setBackToDefault(){
       grocery.value="";
       editFlag=false;
       editID= "";
       submitBtn.textContent = "submit";

  }
  //clearItem
  function clearItem(){
      const items = document.querySelectorAll(".grocery-item");
      console.log(items)
      if(items.length > 0){
          items.forEach(function(item){
              console.log(item)
             list.removeChild(item);
          })
      }
        // container.classList.remove("show-container")
  }
// ****** LOCAL STORAGE **********
 function addToLocalStorage(id,value){
     console.log("added to local storage")
 }
// ****** SETUP ITEMS **********
