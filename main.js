



function validationError(){
    
    const nameValue=document.getElementById("fname").value;
    const mailValue=document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;

    const nameerror=document.querySelector(".nameerror")
    const emailerror=document.querySelector(".emailerror")
    const feedbackerror =document.querySelector(".feedbackerror")
    let isValid=true;

if(nameValue.trim() === ""){
    nameerror.textContent="Invalid Name Error"
    isValid=false
}else{
    nameerror.textContent=""
}


const Emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
if(!Emailpattern.test(mailValue)){
    emailerror.textContent="Enter Valid Mail Address"
    isValid=false
}else{
    emailerror.textContent=''
}

if(feedback.trim()===""){
    feedbackerror.textContent="enter feedback"
    isValid=false;
}else{
    feedbackerror.textContent=""
}

if(isValid){
    alert("Login Succesfully")
}else{
    alert("Login Error")
}

}