// import { Recipe } from "../model/RecipeByIngredient";
// import { RecipeByCuisine } from "../model/RecipeByCuisine";
import { Recipe } from "../model/RecipeByRandom";

export interface RecipeContextModel {
    favorites: Recipe[],
    addRecipe: (recipe:Recipe) => void,
    removeRecipe: (id:number) => void,
};