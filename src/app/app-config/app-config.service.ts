import { InjectionToken } from '@angular/core';

import { AppConfig } from './app-config.interface';
import { environment } from 'src/environments/environment';

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
  apiEndpoint: environment.apiEndpoint,
  firebaseEndPoint: environment.firebaseEndPoint,
  recipesEndPoint: environment.recipesEndPoint,
  authSignUpRecipes: environment.authSignUpRecipes,
  authSignInRecipes: environment.authSignInRecipes,
};
