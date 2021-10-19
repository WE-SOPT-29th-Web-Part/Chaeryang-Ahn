"use strict"

// 1. add 버튼누르면, list 추가
// 2. enter 키보드 키를 눌렀을 때 list 가 추가되도록
// 3. 쓰레기통을 누르면 지워지도록.
// 4. 오늘만보기,내일만보기,함께보기 필터링 적용

// 우리가 조작해야할 html tag.
// .todos__input , todos__add , .todos__items

const inputs = document.querySelectorAll(".todos__input");
const addBtns = document.querySelectorAll(".todos__add");
const allItems = document.querySelectorAll(".todos__items");

addBtns.forEach(
    (
        btn, index
    )=>
        btn.addEventListener("click",() => {
            onAdd(index);
        })
);

inputs.forEach((input,index)=>
    input.addEventListener("keyup", (event) => {
        if(event.key === "enter"){
            onAdd(index);
        }
    })
);

const onAdd = (index) => {
    if(!inputs[index].value) return;
    const li = document.createElement ("li");
    const span = document.createElement ("span");
    const deleteBtn = document. createElement ("button");
}

li. setAttribute ("class", "todos__item");
span. setAttribute("class", "todos__name");
deleteBtn. setAttribute("class", "todos__delete");

deleteBtn.innerText = "X";
span.innerText = inputs [index].value;

allItems[index].appendChild(li);
li.appendChild(span);
li.appendChild(deleteBtn);

inputs[index].value ="";

deleteBtn.addEventListener("click", ()=> {
    li.remove();
});

const nav = document.querySelector(".options");
const todos = document.querySelectorAll(".todos > section");

nav. addEventListener("click", (event)=> {
    if(event.target.className.includes("options__today")) {
        todos[0].classList.add("open");
        todos[1].classList.remove("open");
    }
    else if (event.target.className.includes("options__tomorrow")){
        todos[0].classList.remove("open");
        todos[1].classList.add("open");
    }
    else if(event.target.className.includes("options__both")){
        todos[1].classList.add("open");
        todos[0].classList.add("open");
    }
});