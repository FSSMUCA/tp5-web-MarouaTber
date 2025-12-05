function verifierMotDePasse(mdp) {
  if (mdp.length >= 8 && mdp.includes("@")) {
    return true;
  } else {
    return false;
  }
}

// Demande du mot de passe à l'utilisateur
let motDePasse = prompt("Entrez votre mot de passe :");

// Vérification et affichage du résultat
if (verifierMotDePasse(motDePasse)) {
  alert("Mot de passe valide");
} else {
  alert("Mot de passe non valide");
}
