"use strict";

//1.nav__period를 클릭하면, dropdown이 생기게 한다
//2.dropdown 버튼 중 하나를 클릭하면, nav__period 글자가 바뀌게 한다
//3.dropdown 버튼 중 하나를 클릭하면, 버튼 속 글짜 색깔이 바뀌게 한다.
const navTime = document.querySelector(".nav__time");
const navDropdown = document.querySelector(".nav__dropdown");
const navActiveTime = document.querySelector(".nav__time--active");

navTime.addEventListener ("click", () => {
    navDropdown.classList.toggle("visible");
});

//이친구들은 대체 무엇이 문제일까요 왜 적용되지 않죠..?
navDropdown.addEventListener("click", () =>{
    navActiveTime.innerText = e.target.innerText;

    Array.from(navDropdown.children)
    .filter((list) => list.classList.contains("active")) [0]
    .classList.remove("active");
    e.target.classList.add("active");
});


//모달 구현
const cardContainer = document.querySelector(".cards");
cardContainer.addEventListener("click", (e) => {
    let el = e.target;
    while(el && !el.classList.contains("card")){
        el=el.parentNode;
    }

    if(!el.classList || el.classList.contains("card__modal")) return;
    const modalBg = document.createElement("div");
    const modalCard = document.createElement("article");
    const modalCloseBtn=document.createElement("button");

    modalBg.setAttribute("class", "card__modal-bg");

    modalCard.innerHTML = el.innerHTML;
    modalCard.setAttribute("class", "card card__modal");

    modalCloseBtn.innerText = "X";
    modalCloseBtn.setAttribute("class", "card__modal-close-btn");

    modalBg.appendChild(modalCard);
    document.body.appendChild(modalBg);
    modalCard.appendChild(modalCloseBtn);

    document.body.style.overflow = "hidden";
    modalCloseBtn.addEventListener("click", ()=> {
        modalBg.remove();
        document.body.style.overflow = "visible";
    });
});

const tagBox = document.querySelector (".form__tag");
const inputTag = document.querySelector(".form__input-tag");
let whatTags =[;

const deleteTag = (e) =>{
    let targetTag = e.target;

    for(let i=0; i<whatTags.length; i++){
        if(whatTags[i] === e.target.innerText){
            whatTags.splice(i,1);
            i--;
        }
    }
}
