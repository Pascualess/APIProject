import axios from "axios";
import { Mapper } from "../mapper/mapper";
import { RecipeByCuisine } from "../model/RecipeByCuisine";
import { Recipe } from "../model/RecipeByIngredient";
import { Random } from "../model/RecipeByRandom";
import { StandardRecipe } from "../model/StandardRecipe";

const apiKey = "44dfeaa9703845deaa770e7b3aa388fd";
const number = "8";

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
