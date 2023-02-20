import { RecipeByCuisine } from "../model/RecipeByCuisine";
import { Recipe } from "../model/RecipeByIngredient";
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

  static mapByIngredient(recipe: Recipe[]): StandardRecipe[] {
    return recipe.map((r) => ({ id: r.id, title: r.title, image: r.image}));
  }
  }
