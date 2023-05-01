import { StandardRecipe } from "../model/StandardRecipe";

export interface RecipeContextModel {
    favorites: StandardRecipe[],
    addRecipe: (recipe:StandardRecipe) => void,
    removeRecipe: (id:number) => void,
};