import axios from "axios";
import { Recipe, SedIngredient } from "../model/RecipeByIngredient";

const apiKey = "44dfeaa9703845deaa770e7b3aa388fd";
const number ="8"

export function getFindByIngredients(ingredients: string): Promise<Recipe[]> {
  return axios
    .get<Recipe[]>(`https://api.spoonacular.com/recipes/findByIngredients`, {
      params: { ingredients,number, apiKey },
    })
    .then((response) => response.data);
}
