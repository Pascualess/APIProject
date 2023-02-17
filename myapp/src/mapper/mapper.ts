import { RecipeByCuisine } from "../model/RecipeByCuisine";
import { Recipe } from "../model/RecipeByIngredient";
import { Random } from "../model/RecipeByRandom";
import { StandardRecipe } from "../model/StandardRecipe";

export class Mapper {
  mapByRandom(random: Random): StandardRecipe[] {
    return random.recipes.map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
    }));
  }

  mapByCuisine(recipeByCuisine: RecipeByCuisine): StandardRecipe[] {
    return recipeByCuisine.results.map((result) => ({
      id: result.id,
      title: result.title,
      image: result.image,
    }));
  }

  mapByIngredient(recipe: Recipe): StandardRecipe {
    return {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
    };
  }
}
