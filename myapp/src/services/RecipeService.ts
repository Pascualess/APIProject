import axios from "axios";
import { Mapper } from "../mapper/mapper";
import { RecipeByCuisine } from "../model/RecipeByCuisine";
import { RecipeByID } from "../model/RecipeByID";
import { Recipe } from "../model/RecipeByIngredient";
import { Random } from "../model/RecipeByRandom";
import { StandardRecipe } from "../model/StandardRecipe";

const apiKey = "13cf15e353864871a8398efdda913019";
const number = "150";

export function getFindByCuisine(
  query: string,
  cuisine: string
): Promise<StandardRecipe[]> {
  return axios
    .get<RecipeByCuisine>(`https://api.spoonacular.com/recipes/complexSearch`, {
      params: { query, cuisine, number, apiKey },
    })
    .then((response) => {
      return Mapper.mapByCuisine(response.data);
    });
}
export function getByRandom(): Promise<StandardRecipe[]> {
  return axios
    .get<Random>(`https://api.spoonacular.com/recipes/random`, {
      params: { number, apiKey },
    })
    .then((response) =>{return Mapper.mapByRandom( response.data)});
}
export function getFindByIngredients(ingredients: string): Promise<StandardRecipe[]> {
  return axios
    .get<Recipe[]>(`https://api.spoonacular.com/recipes/findByIngredients`, {
      params: { ingredients, number, apiKey },
    })
    .then((response) => {
      return Mapper.mapByIngredient(response.data);
    });
}
export function GetDetails(id:string): Promise<RecipeByID> {
  return axios
    .get<RecipeByID>(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`, {
      params: { apiKey }
    })
    .then((response) => response.data);
}
