function signinf(){
    userdata=JSON.parse(localStorage.getItem("userdata"))
   
       
        var indata={
            username:document.querySelector("#email").value,
            userpwd:document.querySelector("#pswrd").value,
        }
        if(indata===null){
            alert("create an account")
        }else if((indata.username==userdata.email)&&(indata.userpwd==userdata.password)){
            localStorage.setItem("signdat",JSON.stringify(userdata))
            alert("log in succsesfull")
        }else{
            alert("user doesnot exist!")
        }
        document.querySelector("#signbox").remove();
        
        document.querySelector("#sign").innerText=userdata.username;
}
function joinfun(){
      
        var userdata={
            username:document.querySelector("#first").value,
            email:document.querySelector("#email").value,
            password:document.querySelector("#pwd").value,
        }
       
        alert("Sign up Succesfull go for login ")
        document.querySelector("#signbox").remove();
        localStorage.setItem("userdata",JSON.stringify(userdata))
    }