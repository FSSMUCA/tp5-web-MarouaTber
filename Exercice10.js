function Somme_iterative(n){
    let somme=0;
  for(let i=1;i<=n;i++){
   somme += i;
  }
return somme;
}

function Somme_Recursive(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + somme_Recursive(n - 1);
  }
}
/* La version avec la boucle (itérative) est la plus lisible car elle est simple,
 elle s’exécute ligne par ligne ,on voit clairement comment la somme évolue
 */

/* La version avec la boucle est la plus performante car :
Elle utilise moins de mémoire .
Elle n’empile pas d’appels de fonctions .
Elle est plus rapide à l’exécution .
La récursion est plus lente car :
Chaque appel consomme de la mémoire (pile d’exécution) 
*/ 

/* Oui,la récursion peut poser des problèmes comme :
Dépassement de mémoire (stack overflow), si n est trop grand → trop d’appels de fonctions .
Boucle infinie, si on oublie le cas de base .
*/

/* On privilégie une boucle quand :
Le problème est Simple, répétitif,avec un grand nombre d’itérations .
*/