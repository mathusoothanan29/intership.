

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

document.addEventListener('DOMContentLoaded', () => {
    const toggleMode = document.getElementById('toggle-mode');

    toggleMode.addEventListener('click', () => {
        document.body.classList.toggle('light');
        
        const links = document.querySelectorAll('.bar a');
        const btns = document.querySelectorAll('.btn');

        links.forEach(link => {
            link.classList.toggle('light');
        });

        btns.forEach(btn => {
            btn.classList.toggle('light');
        });
        
        if (document.body.classList.contains('light')) {
            toggleMode.textContent = 'Mode';
        } else {
            toggleMode.textContent = 'Mode';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
        git
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }
});
