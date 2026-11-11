// Affiche un message dans la console pour vérifier 
console.log("js.js chargé");





// Maha - Menu - MODE SOMBRE : Activer ou désactiver le mode sombre
function toggleDisplayMode() {

    const body = document.body;
    const bouton = document.getElementById("darkModeToggle");

    // Changer le mode
    body.classList.toggle("dark-mode");

    // Vérifier le mode activé
    const modeSombre = body.classList.contains("dark-mode");

    // Mémoriser le choix dans tout le site
    localStorage.setItem("darkMode", modeSombre ? "enabled" : "disabled");

    // Modifier le symbole du bouton
    if (bouton) {
        bouton.textContent = modeSombre ? "☀️" : "🌙";

        bouton.setAttribute("aria-pressed", modeSombre);
    }
}


// Restaurer le mode choisi sur chaque page

document.addEventListener("DOMContentLoaded", function () {

    // Récupérer le mode mémorisé
    const modeSombre = localStorage.getItem("darkMode");

    // Appliquer le mode
    document.body.classList.toggle(
        "dark-mode",
        modeSombre === "enabled"
    );

    // Récupérer le bouton
    const bouton = document.getElementById("darkModeToggle");

    if (bouton) {

        bouton.textContent =
            modeSombre === "enabled" ? "☀️" : "🌙";

        bouton.setAttribute(
            "aria-pressed",
            modeSombre === "enabled"
        );
    }

});







// Nihad - Menu - LISTE DES PAGES DU SITE 
// tableau qui contient les différentes pages du site
const pages = [
  { fichier: "index.html",     titre: "Accueil" },
  { fichier: "produit.html",     titre: "Produit" },
  { fichier: "equipe.html",      titre: "Équipe" },
  { fichier: "faq.html",         titre: "FAQ" },
  { fichier: "temoignages.html", titre: "Témoignages" },

];

// On récupère le nom du fichier de la page actuellement ouverte.
// Si aucun nom n'est trouvé, "accueil.html" par défaut (wala: j'ai renommé index pour que ça redirige mieux via Github).
const pageActuelle = location.pathname.split("/").pop() || "index.html";

// Nihad - CRÉATION DES LIENS DU MENU 
const liens = pages.map(function (page) {
  const active = page.fichier === pageActuelle ? " active" : "";
  return `<li class="nav-item">
            <a class="nav-link${active}" href="${page.fichier}">${page.titre}</a>
          </li>`;
}).join("");

document.getElementById("liens-menu").innerHTML = liens;




// Nadine - HORLOGE : AFFICHER L'HEURE ACTUELLE
// Identifiant du minuteur
let timerID;

// Fonction pour afficher l'heure
function UpdateClock() {

    // Récupérer la date et l'heure actuelles
    let tDate = new Date();

    // Afficher les heures, les minutes et les secondes
    document.querySelector("#theClock #theTime").value =
        String(tDate.getHours()).padStart(2, "0") + ":" +
        String(tDate.getMinutes()).padStart(2, "0") + ":" +
        String(tDate.getSeconds()).padStart(2, "0");

    // Actualiser l'heure après une seconde
    timerID = setTimeout(UpdateClock, 1000);
}

// Fonction pour arrêter le minuteur
function KillClock() {
    clearTimeout(timerID);
}




// Nihad - Page acceuil - Diaporama 
// Tableau contenant les noms des images
const tabImages = [
    "images/vbleu.png",
    "images/vorange.png",
    "images/vviolet.png",
    "images/vvert.png"
];

// l'image affichée
let indiceImage = 0;

// Fonction qui affiche l'image actuelle
function afficheImage() {
    document.getElementById("diapo").src =
        tabImages[indiceImage];
}

// Fonction qui affiche l'image suivante
function imageSuivante() {
    indiceImage++;

    // Revenir à la première image après la dernière
    if (indiceImage >= tabImages.length) {
        indiceImage = 0;
    }

    afficheImage();
}

// Déclencher le changement au clic sur l'image
window.addEventListener("load", function () {
    const image = document.getElementById("diapo");

    if (image) {
        image.addEventListener("click", imageSuivante);
    }
});





// Nadine - Page Produit 
// SECTION 2 : COMMENT ÇA FONCTIONNE ?
// Afficher ou masquer les explications supplémentaires
function afficherDetailEtape(numero) {

    let detail = document.getElementById("detail-etape-" + numero);

    // Afficher ou masquer l'explication
    detail.classList.toggle("d-none");

}


// Nihad - Effet de rotation au survol de l'image d'un argument
// page entièrement chargée.
window.addEventListener("load", function () {

    // On récupère l'image qu'on veut
    const image = document.querySelector(".image-interactive");

    // image existe sur la page.
    if (image) {

        // Souris entre sur l'image, ajoute la classe "rotation".
        image.addEventListener("mouseenter", function () {
            image.classList.add("rotation");
        });

        // Souris quitte l'image, retire la classe "rotation".
        image.addEventListener("mouseleave", function () {
            image.classList.remove("rotation");
        });
    }
});


// SECTION 3 : LES COULEURS DISPONIBLES
function afficherDetailCouleur(couleur) {

    document.getElementById("detail-couleur").innerHTML =
        "<strong>À chaque couleur son caractère !</strong><br>" +
        "Trouvez celle qui vous inspire et donnez à votre véhicule un style qui vous ressemble.";
}

// Choisir une couleur au hasard
function surprendreCouleur() {

    let couleurs = [
        "Bleu électrique",
        "Rouge passion",
        "Vert émeraude",
        "Violet mystique",
        "Orange sunset",
        "Argent métal"
    ];

    let hasard = Math.floor(Math.random() * couleurs.length);

    afficherDetailCouleur(couleurs[hasard]);

}

// SECTION 4 : UNE EXPÉRIENCE AUTOMOBILE UNIQUE
let experiencesChangees = false;

function changerExperiences() {

    if (experiencesChangees === false) {

        // Première carte
        document.getElementById("titre-1").innerHTML =
            "Et si votre voiture changeait de couleur demain ?";

        document.getElementById("texte-1").innerHTML =
            "Imaginez une nouvelle apparence et laissez parler votre imagination !";


        // Deuxième carte
        document.getElementById("titre-2").innerHTML =
            "Quelle impression souhaitez-vous donner ?";

        document.getElementById("texte-2").innerHTML =
            "Un style élégant, audacieux ou original ? À vous de choisir !";


        // Troisième carte
        document.getElementById("titre-3").innerHTML =
            "Et si vous osiez une couleur inhabituelle ?";

        document.getElementById("texte-3").innerHTML =
            "Sortez de votre zone de confort et découvrez un autre style !";


        // Changer le texte du bouton
        document.getElementById("bouton-experiences").innerHTML =
            "Revenir aux expériences";

        experiencesChangees = true;

    } else {

        // Retour aux textes initiaux

        document.getElementById("titre-1").innerHTML =
            "Selon votre humeur";

        document.getElementById("texte-1").innerHTML =
            "Une envie de changement ? Adaptez le style de votre véhicule à votre humeur du jour et à vos inspirations.";


        document.getElementById("titre-2").innerHTML =
            "Pour toutes les occasions";

        document.getElementById("texte-2").innerHTML =
            "Une sortie entre amis, un événement spécial ou simplement un trajet quotidien : donnez une touche originale à chaque occasion.";


        document.getElementById("titre-3").innerHTML =
            "Un style qui vous ressemble";

        document.getElementById("texte-3").innerHTML =
            "Ne vous contentez pas d'une voiture ordinaire. Créez une identité visuelle qui attire les regards et reflète votre créativité.";


        // Remettre le texte initial du bouton
        document.getElementById("bouton-experiences").innerHTML =
            "Découvrez une autre facette !";

        experiencesChangees = false;
    }
}






// Nihad - Page contact 
// Section 2 envoyer un message par email
function sendEmail(name,message)
{
  var handle ;
  var emailDest = "email@serveur.com";
  if(name == "" || message == "")
  {
    window.alert("Merci de renseigner votre nom et/ou votre message !");
  }
  else
  {
    //Puisque je n'ai pas de serveur j'utilise l'envoi de mail avec le gestionnaire de message de l'utilisateur
    //et je prérempli les infos
    handle = window.open('mailto:'+emailDest+'?subject=Contact de '+ name+'&body='+message);
    if(!handle)
    {// Si la popup n'a pas pu s'ouvrir, elle doit être bloquer par un bloqueur de popup 
      window.alert("Impossible d'ouvrir la fenêtre pour envoyer votre message !\nMerci de vérifier votre bloqueur de popup !");
    }
  }
  return true;
}

// Modification du texte pour le nombre de caractères dans le message 
function textLabelMessage(iMsgLength,iMaxLength)
{
  var iCar = iMaxLength - iMsgLength;
  var strMsg = "";
  if (iCar == 0){
    strMsg="Votre message (" + (iMaxLength - iMsgLength) + " caractère restant.)"
  }
  else{
    strMsg="Votre message (" + (iMaxLength - iMsgLength) + " caractères restants.)"
  }
  document.getElementById("lblMessage").innerText = strMsg;
}

// Pour compter le nombre de lettres
function countWordMessage(objMessage)
{
  var textMsg = objMessage.value;
  var iMsgLength = textMsg.length;
  var iMaxLength = objMessage.maxLength;
  var cursor = document.getElementById('cursor');
  cursor.style.height = 200- 2* iMsgLength*100 /iMaxLength +'px';
  textLabelMessage(iMsgLength,iMaxLength);
  return true;
}

// Charge les différentes fonctions (si nécessaire) 
function loadFunction()
{
  var objMessage = document.getElementById('Message');
  var textMsg = objMessage.value;
  var iMsgLength = textMsg.length;
  var iMaxLength = objMessage.maxLength;
  textLabelMessage(iMsgLength,iMaxLength);
}



// Nihad - Page contact - Bouton d'intérêt pour le boîtier
const boutonInteret = document.getElementById("interesseBoitier");
const champMessageAchat = document.getElementById("Message");

if (boutonInteret && champMessageAchat) {

    boutonInteret.addEventListener("click", function () {

        // Remplit automatiquement le message
        champMessageAchat.value =
            "Bonjour, je suis intéressé(e) par le boîtier Car-éléon. " +
            "Je souhaiterais obtenir plus d'informations.";

        // Met à jour le compteur de caractères
        if (typeof countWordMessage === "function") {
            countWordMessage(champMessageAchat);
        }

        // Défile jusqu'au formulaire
        champMessageAchat.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        // Place le curseur dans le champ
        champMessageAchat.focus();
    });
}




// Wala - Page témoignage : Faire apparaitre des avis supplémentaires

// On trouve le bouton
const boutonAvis = document.getElementById("boutonAvis");

// On trouve tous les avis cachés
const avisCaches = document.querySelectorAll(".avis-cache");

// On vérifie que le bouton existe sur la page
if (boutonAvis && avisCaches.length > 0) {

  // Quand on clique sur le bouton
  boutonAvis.addEventListener("click", function () {

    // Si le premier avis est caché
    if (avisCaches[0].classList.contains("d-none")) {

      // On affiche tous les avis
      avisCaches.forEach(function (avis) {
        avis.classList.remove("d-none");
      });

      // On change le texte du bouton
      boutonAvis.textContent = "Afficher moins";

    } else {

      // Sinon, on cache tous les avis
      avisCaches.forEach(function (avis) {
        avis.classList.add("d-none");
      });

      // On remet le texte de départ
      boutonAvis.textContent = "Afficher plus";
    }

  });
}




// Maha Création automatique des boutons email dans les cartes de l'équipe
document.addEventListener("DOMContentLoaded", function () {

    // Liste des membres et leurs adresses email
    const membres = [
        { nom: "Maha", email: "mahalajili3@gmail.com" },
        { nom: "Wala", email: "wala6430@gmail.com" },
        { nom: "Nihad", email: "attaiby.nihads@gmail.com" },
        { nom: "Nadine", email: "akoumnadine22@gmail.com" }
    ];

    // Récupérer toutes les zones de contact
    const zonesEmail = document.querySelectorAll(".zone-email");

    // Parcourir la liste des membres
    membres.forEach(function (membre, index) {

        const zone = zonesEmail[index];

        // Vérifier que la zone existe
        if (zone) {

            // Créer le bouton de contact
            const bouton = document.createElement("a");

            // Ajouter le lien pour envoyer un email
            bouton.href = "https://mail.google.com/mail/?view=cm&fs=1&to=" + membre.email;
            bouton.target = "_blank";
            // Ajouter la classe CSS du bouton mauve
            bouton.classList.add("bouton-email");

            // Ajouter un texte accessible
            bouton.setAttribute(
                "aria-label",
                "Envoyer un email à " + membre.nom
            );

            // Créer l'icône enveloppe Bootstrap
            const icone = document.createElement("i");

            // Choisir l'enveloppe pleine
            icone.className = "bi bi-envelope-fill";

            // Forcer la couleur blanche de l'enveloppe
            icone.style.color = "#ffffff";

            // Ajouter l'icône dans le bouton
            bouton.appendChild(icone);

            // Ajouter le bouton dans la carte du membre
            zone.appendChild(bouton);
        }
    });

});