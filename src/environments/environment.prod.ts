import { mySecrets } from './environment.secret';

export const environment = {
  production: true,
  apiEndpoint: 'http://localhost:8080/api/v1/',
  firebaseEndPoint: mySecrets.firebaseEndPoint,
  recipesEndPoint: mySecrets.recipesEndPoint,
  authSignUpRecipes: mySecrets.authSignUpRecipes,
  authSignInRecipes: mySecrets.authSignInRecipes,
};
