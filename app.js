//création de fonction pour le formulaire avec les conditions pour les erreurs de saisie
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

//création de la fonction pour le diaporama pour afficher 
function img(source){
    document.getElementById("grandePhoto").setAttribute('src',source)
    
    if (source==="images/Luna 2.png"){
        document.getElementById("nomAnimal").innerHTML = "Luna"
        document.getElementById("histoireAnimal").innerHTML ="Trouvée dans la rue avec une patte cassée, Luna a été soignée et a retrouvé sa joie de vivre. Elle coule maintenant des jours heureux dans sa nouvelle famille."
        document.getElementById("dateHistoire").innerHTML = "Janvier 2024"
    } else if (source==="images/Oscar.jpg"){
        document.getElementById("nomAnimal").innerHTML = "Oscar"
        document.getElementById("histoireAnimal").innerHTML = "Abandonné dans une forêt, Oscar était terrifié par les humains. Après des mois de patience et d'amour, il est devenu un chat confiant et affectueux."
        document.getElementById("dateHistoire").innerHTML = "Mars 2024"
    } else if (source==="images/Max.jpg"){
        document.getElementById("nomAnimal").innerHTML = "Max"
        document.getElementById("histoireAnimal").innerHTML = "Sauvé d'un laboratoire, Max n'avait jamais connu l'amour. Aujourd'hui, il profite de sa liberté et fait le bonheur de sa famille d'accueil."
        document.getElementById("dateHistoire").innerHTML = "Février 2024"
    }
}