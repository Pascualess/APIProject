import axios from "axios";
import { RecipeByCuisine } from "../model/RecipeByCuisine";
import { Recipe, SedIngredient } from "../model/RecipeByIngredient";

const apiKey = "44dfeaa9703845deaa770e7b3aa388fd";
const number = "8";

export function getFindByCuisine(
  query: string,
  cuisine: string
): Promise<RecipeByCuisine[]> {
  return axios
    .get<RecipeByCuisine[]>(`https://api.spoonacular.com/recipes/complexSearch`, {
      params: { query, cuisine, number, apiKey },
    })
    .then((response) => response.data);
}
