document.addEventListener("DOMContentLoaded", function (){
    let name= document.getElementById("name");
    let lastName= document.getElementById("lastName");
    let email= document.getElementById("email");
    let password= document.getElementById("password");
    let rePassword= document.getElementById("rePassword");

    function createUser(){
        console.log(name.value)
    }

    document.getElementById("buttonSubmit").addEventListener("click", function(){
        if( name.value != " " && lastName.value != " " && email.value != " " && password.value != " " && rePassword.value != " " ){
            if(password.value === rePassword.value){
                let user= {
                    "name": name.value,
                    "lastName": lastName.value,
                    "email": email.value,
                    "password": password.value,
                    "rePassword": rePassword.value,
                }
                console.log(user)
            }else{
                alert("las constraseñas no coinciden");
            }
        }else{
            alert("complete todos los campos")
        }
    })
});