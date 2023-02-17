import { RecipeByCuisine } from "../model/RecipeByCuisine";
import { IngredientSearch} from "../model/RecipeByIngredient";
import { Random } from "../model/RecipeByRandom";
import { StandardRecipe } from "../model/StandardRecipe";

export class Mapper {
  static mapByRandom(random: Random): StandardRecipe[] {
    return random.recipes.map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
    }));
  }

  static mapByCuisine(recipeByCuisine: RecipeByCuisine): StandardRecipe[] {
    return recipeByCuisine.results.map((result) => ({
      id: result.id,
      title: result.title,
      image: result.image,
    }));
  }

  static mapByIngredient(
    recipeByIngredient: IngredientSearch
  ): StandardRecipe[] {
    return recipeByIngredient.recipes.map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
    }));
  }
}
