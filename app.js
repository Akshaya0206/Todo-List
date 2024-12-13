let input=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
    btn.addEventListener("click",function(){
        let li=document.createElement("li");
        let delbtn=document.createElement("button");
        delbtn.innerText="Delete";
        delbtn.classList.add("delete");
        li.innerText=input.value;
        ul.appendChild(li);
        li.append(delbtn);
        input.value="";
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let liitem=event.target.parentElement;
        liitem.remove();
    }
});