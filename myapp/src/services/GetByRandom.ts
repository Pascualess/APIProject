import axios from "axios";
import { Recipe, SedIngredient } from "../model/RecipeByIngredient";
import { Random } from "../model/RecipeByRandom";

const apiKey = "44dfeaa9703845deaa770e7b3aa388fd";
const number ="8"

export function getByRandom(): Promise<Random> {
  return axios
    .get<Random>(`https://api.spoonacular.com/recipes/random`, {
      params: {number, apiKey },
    })
    .then((response) => response.data);
}
