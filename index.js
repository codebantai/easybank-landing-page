const hamburger=document.querySelector('.hamburger')
const navBar=document.querySelector('.nav-bar')
const body=document.querySelector('body')
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('hamburger-close')
    if(hamburger.classList.contains('hamburger-close')){
        navBar.style.left="50%"
        body.style.overflow="hidden"
    }
    else{
        body.style.overflow="auto"
        navBar.style.left="-50%"
    }
})