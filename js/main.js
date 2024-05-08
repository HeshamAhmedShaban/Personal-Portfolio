

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

