function theme(){
    let white = document.querySelector("body")
    let change =document.querySelector("#change")
    let item = document.querySelectorAll(".item")



    white.classList.toggle("white");
    change.classList.toggle("change");

    
   
for (let i = 0; i < item.length; i++) {
    item[i].classList.toggle("itemMod");

}
}
