dropdown = document.querySelector(".dropdown");
menu = document.getElementById("menu");
menu.addEventListener("click",function(){
    if(dropdown.style.display=="block"){
        menu.innerHTML="<i class='bx bx-menu bx-sm'></i>"
        dropdown.style.display="none";
    }
    else{
        menu.innerHTML="<i class='bx bx-x bx-sm'></i>"
        dropdown.style.display="block";
    }
})