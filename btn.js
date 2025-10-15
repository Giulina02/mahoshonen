// MOUSE ENTER
const interfacehover = new Audio("sounds/interfacehover.mp3");
let buttons = document.querySelectorAll(".btn");
buttons.forEach( btn => {
    btn.addEventListener( "mouseenter", () => {
        interfacehover.play();
    })
})

// REDIRECT
const interfaceclick = new Audio("sounds/interfaceclick.mp3");
let links = document.querySelectorAll("a");
links.forEach( a => {
    a.addEventListener( "click", (event) => {
        event.preventDefault();
        interfaceclick.play();
        setTimeout(() => {
            window.location.href = a;
        }, 1200)
    })
})