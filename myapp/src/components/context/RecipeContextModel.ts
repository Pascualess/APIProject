import { Recipe } from "../../model/RecipeByIngredient";
import { RecipeByCuisine } from "../../model/RecipeByCuisine";
import { Random } from "../../model/RecipeByRandom";

export interface RecipeContextModel {
    favorites: Recipe[],
    addRecipe: (recipe:Recipe) => void,
    removeRecipe: (id:number) => void,
};