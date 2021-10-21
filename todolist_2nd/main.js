//1. add 버튼을 눌렀을 때, list가 추가되도록
//2. enter 키보드 키를 눌렀을 때 list가 추가되도록
//3. 쓰레기통을 누르면 지워지도록.
//4. 오늘만보기, 내일만보기, 함꼐보기 필터링 적용


//1. add버튼을 눌렀을 때, list가 추가되도록
//a. add버튼을 눌렀을 때, input의 value를 가져오기
//b. 가져온 value를 바탕으로, list 만들기

//우리가 조작해야할 html tag.
//input.todos__input, todos__add, .todoes__items

//DOM 요소를 가져오는 방법
const input = document.querySelector(".todos__input");
const addBtn = document.querySelector(".todos__add");
const items = document.querySelector(".todos__items");

addBtn.addEventListener('click', function(){
    console.log('input.value',input.value);
    const li=document.createElement("li");
    const div=document.createElement("div");
    const deleteBtn=document.setAttribute("class", "todos__delete");

    //태그를 만드는 과정

    li.setAttribute("class, "todos__item");
    span.setAttribute("class", "todos__name");
    deleteBtn.setAttribute("class", "todos__delete");


    deleteBtn.innerText = "X";

    items.appentChild(li);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    input.value=" ";

    
});
//2. enter 키보드 키를 눌렀을 때 list가 추가되도록 =>addBtn을 누르는 과정과 동일
input.addEventListener('keyup',() =>{
    console.log ('event', event.key);
    if (event.key === "Enter"){

    }28
    console.log('scroll');

})