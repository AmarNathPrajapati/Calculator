let val = "";
buttons = document.getElementsByClassName("btn");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        output = document.getElementById('output');
        if(e.target.innerHTML=="C"){
            val="";
            output.value=val;
        } else if(e.target.innerHTML=="="){
            val = eval(val);
            output.value = val;
        } else if(e.target.innerHTML=="√"){
            val = Math.sqrt(val)
            output.value = val;
        } else if(e.target.innerHTML=="%"){
            val = val/100;
            output.value = val;
        }else if(e.target.innerHTML=="del"){
            let length = val.length;
            val = val.slice(0,length-1);
            output.value = val;
        }else{
            val = val + e.target.innerHTML;
            output.value = val;
        }
    });
})