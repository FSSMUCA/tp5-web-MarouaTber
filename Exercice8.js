function totalAvecRemise(total, remise) {
  let totalFinal = total - (total * remise / 100);
  return totalFinal;
}

// Demande des valeurs à l'utilisateur
let totalHT = parseFloat(prompt("Entrez le total HT :"));
let remise = parseFloat(prompt("Entrez le pourcentage de remise :"));

// Calcul du total final
let resultat = totalAvecRemise(totalHT, remise);

// Affichage du résultat
alert("Le total final après remise est : " + resultat);
