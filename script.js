const nav=document.querySelector("nav");
const ul=nav.querySelector("ul");
const bar=nav.querySelector(".hamburger");
const xmark=nav.querySelector(".close");



nav.removeChild(xmark)

nav.addEventListener("click",(e)=>{
    if(e.target.classList.contains("hamburger"))
    {
     nav.removeChild(bar)
     nav.appendChild(xmark)
     xmark.classList.add("sm-close")
     ul.classList.add("list")
    }
    else{
      nav.removeChild(xmark)
      nav.appendChild(bar)
        ul.classList.remove("list")
    }   
})

