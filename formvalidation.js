// form validation
var user = document.getElementById("username");
var pwd = document.getElementById("pass");
function validate(callback){
    if(user.value=="admin"){
        if(pwd.value==1234){
            callback();    
        }
        else{
            alert("Wrong password");
            return false;
        }
    }
    else{
        alert("Wrong username");
        return false;
    }
}

function redirect1(){
    return true;
}
// form validation ends