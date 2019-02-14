/* 
// Console 내의 함수 확인
console.log(console); */

/* 
// function 사용
function sayHello(name) {
    return `Hello! ${name}`;
}

const greetSG = sayHello("SG");

console.log(greetSG); */

/*
// 요소 확인
const tt = document.getElementById("tt");

console.dir(tt); */

/*
// 참고 : window 에서는 컴퓨터의 와이파이 상태 변화도 알 수 있다.

function handleOffline() {
    console.log("OffLine");
}

function handleOnline() {
    console.log("OnLine");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline); */

/* 
#2 최종작업 이전 연습 파일
마우스가 움직일 때 마다 글씨 색 바꾸기

const title = document.querySelector("#title");

// BASE_COLOR 해당 color 은 #0984e3
// js 에 설정할 때는 해당 HEX 값을 RGB 값으로 바꿔서 저장함
// 따라서 RGB 값으로 바꿔서 넣어주지 않으면 같은 것으로 인식하지 못함
const BASE_COLOR = "rgb(9, 132, 227)";
const OTHER_COLOR = "#00cec9";

function colorChange() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        console.log(`diff: ${currentColor}`);
        console.log(`BASE_COLOR: ${BASE_COLOR}`);
        title.style.color = OTHER_COLOR;
    } else {
        console.log(`diff: ${currentColor}`);
        console.log(`OTHER_COLOR: ${OTHER_COLOR}`);
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    // addEventListener 가 실행될 때 함수 실행시키려면 괄호를 뒤에 붙이지 말아햐 함
    // mouseenter: mouse 가 영역 안으로 들어올 경우
    title.addEventListener("mouseenter", colorChange)
}

init();
*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    //toggle 역할 : 있으면 add, 옆으면 remove 를 실행시킴
    title.classList.toggle(CLICKED_CLASS);
    /* const hasClass = title.classList.contains(CLICKED_CLASS);
    if (!hasClass) {
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    } */
}

function init() {
    title.addEventListener("click", handleClick);
}
init();