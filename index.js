const formEl = document.getElementById("form");
const inputEl = document.getElementById("email");
const errorEl = document.getElementById("error-el");
const errorImage = document.getElementById("error-img");
const formBtn = document.getElementById("form-btn");



formEl.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(inputEl.value);
    checkinputs()
    inputEl.value = "";
});

function checkinputs(){
    const emailValue = inputEl.value;

    if (emailValue === ""){
        setError()
    }else if(!isEmail(emailValue)){
        errorEl.textContent = "Please provide a valid email";
        errorImage.style.visibility = "visible"
    }else{
        setSuccess() 
    }
}

function setError(){
    errorEl.textContent = "Email cannot be empty" ; 
    errorImage.style.visibility = "visible"
    formBtn.style.backgroundColor = ""
    inputEl.style.borderColor = '';
}

function setSuccess(){
    inputEl.style.borderColor = 'hsl(154, 59%, 51%)';
    errorImage.style.visibility = "hidden";
    formBtn.style.backgroundColor = "hsl(154, 59%, 51%)"
    errorEl.textContent = ""; 
}


function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}