import { Recipe } from "../model/RecipeByRandom";

export interface DetailsContextModel {
    details: Recipe[],
    showRecipe: (recipe:Recipe) => void,
};