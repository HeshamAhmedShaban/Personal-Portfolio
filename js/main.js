

const divMenu= document.querySelector(".menu");

const menuTrigger = document.querySelector(".menu-trigger");

menuTrigger.addEventListener("click", ()=>{
    setTimeout(function(){
        if(!divMenu.classList.contains("show")){
            divMenu.classList.add("show");
            document.body.classList.add("menu-visible");
        }
    },0)
})


// auto close menu by clicking outside

document.addEventListener("click", (e)=>{
    if(!e.target.closest(".menu") && divMenu.classList.contains("show")){
        divMenu.classList.remove("show");
        document.body.classList.remove("menu-visible");
    }
})

const nameElement = document.getElementById('name-animation');
const myName = "I'm Hesham Ahmed Shaban";
let index = 0;

function writeName() {
    if (index < myName.length) {
        nameElement.textContent += myName[index];
        index++;
        setTimeout(writeName, 100); 
    } else {
        setTimeout(eraseName, 1000); 
    }
}

function eraseName() {
    if (index >= 0) {
        nameElement.textContent = myName.substring(0, index);
        index--;
        setTimeout(eraseName, 100); 
    } else {
        index = 0;
        setTimeout(writeName, 1000); 
    }
}

writeName(); 

