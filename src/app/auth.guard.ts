import { AuthService } from './auth.service';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Votre logique de garde ici
  console.log("le guard ok");

  // Vous pouvez mettre votre logique d'authentification ici
  // Exemple basique :
  const authService : AuthService = new AuthService(); /* Votre logique d'authentification */;
  
  if (authService.isLoggedIn) {
    return true; // Accès autorisé
  } else {
    // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
    // Remplacez '/login' par le chemin de votre page de connexion
    window.location.href = '/login';
    return false; // Accès refusé
  }
};
