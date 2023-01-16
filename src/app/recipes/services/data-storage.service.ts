import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

import { AppConfig } from 'src/app/app-config/app-config.interface';
import { APP_SERVICE_CONFIG } from 'src/app/app-config/app-config.service';
import { RecipesService } from './recipes.service';
import { AuthService } from '../auth/auth.service';

import { Recipe } from '../food-recipes/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private config: AppConfig = inject(APP_SERVICE_CONFIG); // @Inject(APP_SERVICE_CONFIG) private config: AppConfig,

  constructor(
    private http: HttpClient,
    private recipeService: RecipesService // private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(`${this.config.apiEndpoint}/recipes`, recipes).subscribe((response) => {
      // recipesEndPoint
      console.log(response);
    });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(`${this.config.apiEndpoint}/recipes`).pipe(
      map((recipes) => {
        return recipes?.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
    // return this.authService.user.pipe(
    //   take(1),
    //   exhaustMap((user: any) => {
    //     return this.http.get<Recipe[]>(this.config.recipesEndPoint, {
    //       params: new HttpParams().set('auth', user?.token),
    //     });
    //   }),
    //   map((recipes) => {
    //     return recipes.map((recipe) => {
    //       return {
    //         ...recipe,
    //         ingredients: recipe.ingredients ? recipe.ingredients : [],
    //       };
    //     });
    //   }),
    //   tap((recipes) => {
    //     this.recipeService.setRecipes(recipes);
    //   })
    //   // .subscribe((recipes) => {
    //   //   this.recipeService.setRecipes(recipes);
    //   // });
    // );
  }
}
