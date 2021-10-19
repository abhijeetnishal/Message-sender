let subbtn=document.getElementById("submit");
let text=document.querySelector('#message');

subbtn.addEventListener("click",function(){
    let textinput=document.getElementById("message").value;
    if(textinput==''){
        alert("Enter Valid Message To Send");
    }
    else{
        let passmess=document.getElementById("lastpara").innerHTML=textinput;
        text.value='';
    }
})