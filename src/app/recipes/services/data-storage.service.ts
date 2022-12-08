import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { RecipesService } from './recipes.service';
import { environment } from 'src/environments/environment';
import { Recipe } from '../food-recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipesService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(environment.recipesEndPoint, recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(environment.recipesEndPoint).pipe(
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
    //     return this.http.get<Recipe[]>(environment.recipesEndPoint, {
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
