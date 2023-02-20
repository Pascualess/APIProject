import { Recipe } from "../model/RecipeByRandom";
import { StandardRecipe } from "../model/StandardRecipe";

export interface DetailsContextModel {
    details: StandardRecipe[],
    showRecipe: (recipe:StandardRecipe) => void,
    removeDetails: (id:number) => void,
};