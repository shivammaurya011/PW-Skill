const res = document.getElementById('res');

document.getElementById('Onclick').addEventListener("click",()=>{
    res.innerText="calling... Onclick";
})

document.getElementById('Doubleclicu').addEventListener("dblclick",()=>{
    res.innerText="calling... Doubleclicu";
})

document.getElementById('Mouseove').addEventListener("mouseover",()=>{
    res.innerText="calling... Mouseove";
})

document.getElementById('mouseout').addEventListener("mouseout",()=>{
    res.innerText="calling... mouse out";
})

document.getElementById('onkeypress').addEventListener("keypress",()=>{
    res.innerText="calling... onkeypress";
})

document.getElementById('keydown-keyup').addEventListener("keydown",()=>{
    res.innerText="calling... keydown-keyup";
})

