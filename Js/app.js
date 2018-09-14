//selecting dom elements for manipulation
var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var spans = document.getElementsByTagName("span");
var atom = document.querySelector("#atom");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var fight = document.querySelector(".fightBtn");
var closeBtn = document.querySelector(".closeBtn");
var overlay = document.getElementById("overlay")


//function to delete item if delete span is clicked.
function deleteItem(){
  for(let span of spans){
    span.addEventListener ("click",function (){
      span.parentElement.remove();
      event.stopPropagation();
    });
  }
}

//function to load item if list is found in local storage.
function loadItem(){
  if(localStorage.getItem('itemList')){
    ul.innerHTML = localStorage.getItem('itemList');
    deleteItem();
  }
}

//event listener for input to add new item to the list.
input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
    //creating lists and span when enter is clicked
    var li = document.createElement("li");
    var spanElement = document.createElement("span");
    var icon = document.createElement("i");
        
    var newItem = this.value;
    this.value = " " ;
        
    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement,newItem);

    deleteItem();
    }
});

// event listener to linethrough list if clicked
ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },false
);

//hide input box,when atom icon is clicked
atom.addEventListener('click', function(){
  input.classList.toggle('display');
});

//save item list state so user can access it later
saveBtn.addEventListener('click',function(){
  localStorage.setItem('itemList',ul.innerHTML );
  
});

//clear all items when clear button is clicked
clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.removeItem('itemList',ul.innerHTML );
});

//display overlay when fight btn is clicked
fight.addEventListener("click",function(){
   overlay.style.height = "100%";
});

//close overlay when close btn is clicked
closeBtn.addEventListener("click",function(e){
  e.preventDefault;
  overlay.style.height = "0";
  
});

//delete item
deleteItem();

//load item
loadItem();
