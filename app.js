function validerForm(){
    const userName = document.getElementById("username").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    const errorUserName = document.getElementById("error_username")
    const errorEmail = document.getElementById("error_email")
    const errorMessage = document.getElementById("error_message")

    errorUserName.innerHTML = ""
    errorEmail.innerHTML = ""
    errorMessage.innerHTML = ""

    let isValid = true 

    if (userName===""){
        errorUserName.innerHTML = "Le nom est obligatoire."
        isValid = false
    }
    if (!email.includes("@")){
        errorEmail.innerHTML = "L'email doit contenir un @."
        isValid = false
    } else if (email===""){
        errorEmail.innerHTML = "L'email est obligatoire."
        isValid = false
    }
    if (message===""){
        errorMessage.innerHTML = "Le message est obligatoire."
        isValid = false
    }
    if (isValid){
        alert("Le formulaire a été envoyé avec succès!")
    }
    return isValid
}

