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
const inputs = document.querySelectorAll(".todos__input");
const addBtns = document.querySelectorAll(".todos__add");
const allItems = document.querySelectorAll(".todos__items");

addBtns.forEach((btn, index) =>
  btn.addEventListener("click", () => {
    onAdd(index);
  })
);
//태그를 만드는 과정
console.log("addBtns");

inputs.forEach((input, index) =>
  input.addEventListener("keyup", (event) => {
    //엔터치면 추가되게 하기
    if (event.key === "Enter") {
      onAdd(index);
    }
  })
);
//여기까진 이해됬어여

const onAdd = (index) => {
  if (!inputs[index].value) return;
  const li = document.createElement("li");
  //   <li></li>
  const span = document.createElement("span");
  //   <span></span>
  const deleteBtn = document.createElement("button");

  li.setAttribute("class", "todos__item");
  span.setAttribute("class", "todos__name");
  deleteBtn.setAttribute("class", "todos__delete");

  //여기 설명이 필요해요...

  deleteBtn.innerText = "X";
  span.innerText = inputs[index].value;

  allItems[index].appendChild(li);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  inputs[index].value = " ";

  //삭제
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
};

const nav = document.querySelector(".options");
const todos = document.querySelectorAll(".todos > section");

nav.addEventListener("click", (event) => {
  if (event.target.className.includes("options__today")) {
    todos[0].classList.add("open");
    todos[1].classList.remove("open");
  } else if (event.target.className.includes("options__tomorrow")) {
    todos[0].classList.remove("open");
    todos[1].classList.add("open");
  } else if (event.target.className.includes("options__both")) {
    todos[1].classList.add("open");
    todos[0].classList.add("open");
  }
});
