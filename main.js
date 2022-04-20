let edits = document.querySelectorAll(".edit");
let trash = document.querySelectorAll(".delete");
let tabla = document.getElementById("panel-tabla");
let from = document.getElementById("from")
let cerrar = document.getElementById("close")
let menu = document.getElementById("dropdown")
let buttonArrow = document.getElementById("top-menu-button-icon-arrow")


edits.forEach( edit =>{
    edit.addEventListener("click", () => {
        tabla.classList.add("active"); 
        from.classList.add("active");
    });
});

trash.forEach( trash =>{
    trash.addEventListener("click",() =>{
        tabla.classList.remove("active"); 
        from.classList.remove("active");
    });
});

buttonArrow.addEventListener("click", () =>{
    menu.classList.toggle("active"); 
});
