let contenScroll = document.getElementById("contentscroll");
let card = document.querySelector(".container-position ");

document.addEventListener('click', (e) =>{

    if (e.target.matches("#scrollright")) {
        
        contenScroll.scrollLeft +=card.offsetWidth;
    }
    if (e.target.matches("#scrollleft")) {
        
        contenScroll.scrollLeft -=card.offsetWidth;
        
    }
})