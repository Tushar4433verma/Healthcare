function validateForm(){
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var pwd=document.getElementById("password").value;
    var date=document.getElementById("date").value;
    if(username == ""){
        document.getElementById("usererror").innerHTML="Name cannot be empty";
        return false;
    }
    else if((username.length<2)||(username.length>50)){
        document.getElementById("usererror").innerHTML="Name must be between 2 to 50 characters";
        return false;
    }
    else if(!isNaN(username)){
        document.getElementById("usererror").innerHTML="Name cannot be a numeric value";
        return false;
    }
    else{
        document.getElementById("usererror").innerHTML="";
    }
    if(email=="")
    {
        document.getElementById("emailerror").innerHTML="Email cannot be empty";
        return false;
    }
    else if(email.indexOf("@")<=0){
        document.getElementById("emailerror").innerHTML="Not a valid email address";
        return false;
    }
    else{
        document.getElementById("emailerror").innerHTML="";
    }
    if(pwd==""){
        document.getElementById("passerror").innerHTML="Password cannot be empty";
       return false;
    } 
   else if((pwd.length<=5)||(pwd.length>20)){
        document.getElementById("passerror").innerHTML="Password must be between 5 to 20 characters";
        return false;
    } 
    else{
        document.getElementById("passerror").innerHTML="";
    }
    if(date==""){
        document.getElementById("dateerror").innerHTML="Please fill out the date of appointment and time";
    }
    else{
        document.getElementById("dateerror").innerHTML="";
    }
    var valid=false;
    var x=document.getElementsByName("gender");
    for(var i=0;i<x.length;i++){
        if(x[i].checked){
            valid=true;
            break;
        }
    }
    if(valid==false){
        document.getElementById("radio-error").innerHTML="Please select one option";
        return false;
    }
    else{
        document.getElementById("radio-error").innerHTML="";
    }
   var flag=false;
   if(document.getElementById("check").checked){
    flag=true;
   }
   if(flag==false){
    document.getElementById("check-error").innerHTML="Please select a given checkbox";
        return false;
   }
   else{
    document.getElementById("check-error").innerHTML="";
   }
}