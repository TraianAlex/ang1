import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode = false;
  recipeForm!: FormGroup;

  get recipeControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    //let recipeIngredients = new FormGroup([]);//this.fb.array([]);
    let recipeIngredients = new FormArray([
      this.fb.group({
        name: this.fb.control('', Validators.required),
        amount: this.fb.control(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      }),
    ]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        let newEl = [] as any;
        for (let ingredient of recipe.ingredients) {
          newEl = new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ]),
          });
          recipeIngredients.push(newEl);
        // for (let ingredient of recipe.ingredients) {
        //   newEl = this.fb.group({
        //     name: this.fb.control(ingredient.name, Validators.required),
        //     amount: this.fb.control(ingredient.amount, [
        //       Validators.required,
        //       Validators.pattern(/^[1-9]+[0-9]*$/),
        //     ]),
        //   });
        //   recipeIngredients.push(newEl);
        }
      }
    }

    this.recipeForm = this.fb.group({
      name: this.fb.control(recipeName, Validators.required),
      imagePath: this.fb.control(recipeImagePath, Validators.required),
      description: this.fb.control(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }
}

/*
clearing all items in a FormArray
(<FormArray>this.recipeForm.get('ingredients')).clear();
The clear() method automatically loops through all registered FormControls (or FormGroups) in the FormArray and removes them.
It's like manually creating a loop and calling removeAt() for every item.
*/
