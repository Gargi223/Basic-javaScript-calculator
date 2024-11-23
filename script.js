let input =document.getElementById("input");
let button= document.querySelectorAll("button");

button.forEach(element=>{
    element.addEventListener("click",(e)=>{
        let curr=e.target.textContent;

        if(curr=="C"){
            input.innerText="";
        }else if(curr=="^"){
            input.innerText=input.innerText.slice(0,-1);
        }else if(curr=="="){
            input.innerText=eval(input.innerText);
        }
        else{
            input.innerText +=curr;
        }
        input.scrollLeft=input.scrollWidth;
    })
})