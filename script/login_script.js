function loginValidate(){
    let name = document.forms["loginForm"]["userName"].value;
    let pass = document.forms["loginForm"]["userPassword"].value;

    if (name == "" && pass == ""){
        alert("Please fill up all text field");
        return false
    }else if (name == ""){
        alert("Please fill up user name text field");
        return false
    }else if (pass == ""){
        alert("Please fill up password text field");
        return false
    }else{
        alert("Login successfully!");
    }
}