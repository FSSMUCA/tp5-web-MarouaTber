function factorielle(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorielle(n - 1);
  }
}

// Exemple d'utilisation
console.log(factorielle(5)); // 120
