let edits = document.querySelectorAll(".edit");
let trash = document.querySelectorAll(".delete");
let tabla = document.getElementById("panel-tabla");
let from = document.getElementById("from")

edits.forEach( edit =>{
    edit.addEventListener("click", () => {
        tabla.classList.toggle("active"); 
        from.classList.toggle("active");
    });
});

trash.forEach( trash =>{
    trash.addEventListener("click",() =>{
        tabla.classList.remove("active"); 
        from.classList.remove("active");
    });
});

