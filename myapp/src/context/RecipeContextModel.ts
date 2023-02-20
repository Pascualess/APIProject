// import { Recipe } from "../model/RecipeByIngredient";
// import { RecipeByCuisine } from "../model/RecipeByCuisine";
// import { Recipe } from "../model/RecipeByRandom";

import { StandardRecipe } from "../model/StandardRecipe";

export interface RecipeContextModel {
    favorites: StandardRecipe[],
    addRecipe: (recipe:StandardRecipe) => void,
    removeRecipe: (id:number) => void,
};