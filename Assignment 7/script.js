const dec = document.getElementById('decBtn');
const inc = document.getElementById('incBtn');
const reset = document.getElementById('reset');
const res = document.getElementById('res');
console.log("Hello")
decBtn.addEventListener("click",()=>{
    if(res.innerText>0){
        res.innerText = parseInt(res.innerText) - 1;
    }
    else{
        alert("Negative value not allowed")
    }
})

incBtn.addEventListener("click",()=>{
    if(res.innerText>=10){
        alert("10+ values are not allowed")
    }
    else{
        res.innerText = parseInt(res.innerText) + 1;
    }
})

reset.addEventListener("click", ()=>{
    if(res.innerText != 0){
        res.innerText=0;
    }
    else{
        alert("Value alredy Reset")
    }
    
})