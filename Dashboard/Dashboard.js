let sidebar = document.getElementById("sidebar");
let sidebarbtn = document.getElementById("icon");
let menu = document.getElementById("menu");

sidebarbtn.addEventListener("click", ()=>{
    if(sidebar.style.right == "-500px"){
        sidebar.style.right = "1px";
        sidebarbtn.innerHTML = `<i class="fas fa-times"></i>`
    }else{
        sidebar.style.right = "-500px";
        sidebarbtn.innerHTML = `<i class="fas fa-bars"></i>`
    }
})

document.querySelector("section").addEventListener("click", ()=>{
        sidebar.style.right = "-500px";
        sidebarbtn.innerHTML = `<i class="fas fa-bars"></i>`
})

let allbtn = [
    document.getElementById("btn1"),
    document.getElementById("btn2"),
    document.getElementById("btn3"),
    document.getElementById("btn4"),
    document.getElementById("btn5"),
    document.getElementById("btn6"),
    document.getElementById("btn7")
] 

let links = [
    'https://rashidkhan1234567.github.io/Todo-App/',
    'https://rashidkhan1234567.github.io/E-Commerce-Wedsite/',
    'https://rashidkhan1234567.github.io/Timer/',
    'https://rashidkhan1234567.github.io/MS-Word/',
    'https://rashidkhan1234567.github.io/Images-Slider/',
    'https://rashidkhan1234567.github.io/Text-to-Speech/',
    'https://rashidkhan1234567.github.io/Calculator/'
]

for(let i = 0; i < allbtn.length; i++){
    allbtn[i].addEventListener("click", ()=>{
        window.open(links[i], "_blank");
    })
}

window.addEventListener("mouseover",()=>{

    window.history.pushState(null,"",window.location.href);
    window.onpopstate(null,"",function(){
    window.history.pushState(null,"",window.location.href);
    
    })
})