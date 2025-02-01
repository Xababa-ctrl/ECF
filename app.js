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

// création de fonction pour la partie dons
    let montantSelectionne = "10";
    let periodeSelectionnee = "une fois";

    function selectionner(type, valeur) {
    
    if (type === "montant") {
      montantSelectionne = valeur;
      
      
      document.getElementById("montant10").style.backgroundColor = "";
      document.getElementById("montant20").style.backgroundColor = "";
      document.getElementById("montant50").style.backgroundColor = "";

      document.getElementById("montant10").style.border = "";
      document.getElementById("montant20").style.border = "";
      document.getElementById("montant50").style.border = "";

      
      if (valeur === "10"){ 
        document.getElementById("montant10").style.backgroundColor = "#EDFEF6";
        document.getElementById("montant10").style.border = "4px solid #33B483";
      }else if (valeur === "20"){ 
        document.getElementById("montant20").style.backgroundColor = "#EDFEF6";
        document.getElementById("montant20").style.border = "4px solid #33B483";
      }else if (valeur === "50"){ 
        document.getElementById("montant50").style.backgroundColor = "#EDFEF6";
        document.getElementById("montant50").style.border = "4px solid #33B483";

      }
    }

    
    else if (type === "periode") {
      periodeSelectionnee = valeur;

      
      document.getElementById("periodeUneFois").style.backgroundColor = "";
      document.getElementById("periodeMensuel").style.backgroundColor = "";
      document.getElementById("periodeAnnuel").style.backgroundColor = "";

      document.getElementById("periodeUneFois").style.color = "";
      document.getElementById("periodeMensuel").style.color = "";
      document.getElementById("periodeAnnuel").style.color = "";

      
      if (valeur === "une fois") {
        document.getElementById("periodeUneFois").style.backgroundColor = "#0CB981";
        document.getElementById("periodeUneFois").style.color = "#FFFFFF";
      }else if (valeur === "mensuel"){
        document.getElementById("periodeMensuel").style.backgroundColor = "#0CB981";
        document.getElementById("periodeMensuel").style.color = "#FFFFFF";
      }else if (valeur === "annuel"){
        document.getElementById("periodeAnnuel").style.backgroundColor = "#0CB981";
        document.getElementById("periodeAnnuel").style.color = "#FFFFFF";
      }
      }

      mettreAJourBouton();
  }

      function mettreAJourBouton() {
        document.getElementById("donBouton").innerHTML = `Faire un don de ${montantSelectionne}€/${periodeSelectionnee}`;//essai de backtiques
  }

      function messageDon(){
        alert("Merci pour votre don !")
      }
// création de fonction pour le quizz
function afficherReponse(questionId, reponseUtilisateur) {
  const question = document.getElementById(questionId);

  
  if (questionId === "question1" && reponseUtilisateur === "Faux") {
      document.getElementById("reponse1").innerHTML = "<div><p style='background-color: #FFE3E2; padding: 10px; border-radius: 5px;'><img src='images/Icônes/Faux.png' alt='Faux'>Faux ! Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels.</p></div>";
      document.getElementById("rep1").setAttribute("hidden")
      document.getElementById("rep2").setAttribute("hidden")
  
  } else if (questionId === "question2" && reponseUtilisateur === "Faux") {
      document.getElementById("reponse2").innerHTML = "<div><p style='background-color: #FFE3E2; padding: 10px; border-radius: 5px;'><img src='images/Icônes/Faux.png' alt='Faux'>Faux ! Nous accueillons tous les animaux, quel que soit leur état de santé. Chaque vie compte !</p></div>";
      document.getElementById("rep3").setAttribute("hidden")
      document.getElementById("rep4").setAttribute("hidden")
  
  } else if (questionId === "question3" && reponseUtilisateur === "Faux") {
      document.getElementById("reponse3").innerHTML = "<div><p style='background-color: #D1F9E7; padding: 10px; border-radius: 5px;'><img src='images/Icônes/Vrai.png' alt='Vrai'>Correct ! Les associations n’ont jamais trop de moyens, chaque don fait une réelle différence pour les animaux.</p></div>";
      document.getElementById("rep5").setAttribute("hidden")
      document.getElementById("rep6").setAttribute("hidden")
  
    } else if (questionId === "question1" && reponseUtilisateur.includes("Vrai")){
      document.getElementById("reponse1").innerHTML = "<div><p style='background-color: #D1F9E7;   padding: 10px; border-radius: 5px;'><img src='images/Icônes/Vrai.png' alt='Faux'>Correct ! Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux.    Seuls 15% servent aux frais de fonctionnement essentiels.</p></div>"
      document.getElementById("rep1").setAttribute("hidden")
      document.getElementById("rep2").setAttribute("hidden")
  } else if (questionId === "question2" && reponseUtilisateur.includes("Vrai")){
      document.getElementById("reponse2").innerHTML = "<div><p style='background-color: #D1F9E7; padding: 10px; border-radius: 5px;'><img src='images/Icônes/Vrai.png' alt='Vrai'>Correct ! Nous accueillons tous les animaux, quel que soit leur état de santé. Chaque vie compte !</p></div>";
      document.getElementById("rep3").setAttribute("hidden")
      document.getElementById("rep4").setAttribute("hidden")
  } else {
      document.getElementById("reponse3").innerHTML = "<div><p style='background-color: #FFE3E2; padding: 10px; border-radius: 5px;'><img src='images/Icônes/Faux.png' alt='Faux'>Faux ! Les associations n’ont jamais trop de moyens, chaque don fait une réelle différence pour les animaux.</p></div>";
      document.getElementById("rep5").setAttribute("hidden")
      document.getElementById("rep6").setAttribute("hidden")
  }

}

  
  