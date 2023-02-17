import axios from "axios";
import { Mapper } from "../mapper/mapper";
import { RecipeByCuisine } from "../model/RecipeByCuisine";
import { Recipe, SedIngredient } from "../model/RecipeByIngredient";
import { StandardRecipe } from "../model/StandardRecipe";

const apiKey = "44dfeaa9703845deaa770e7b3aa388fd";
const number = "8";

export function getFindByCuisine(
  query: string,
  cuisine: string
): Promise<StandardRecipe[]> {
  const mapper = new Mapper();
  return axios
    .get<RecipeByCuisine>(`https://api.spoonacular.com/recipes/complexSearch`, {
      params: { query, cuisine, number, apiKey },
    })
    .then((response) => {
      const recipeByCuisine = response.data;
      return mapper.mapByCuisine(recipeByCuisine);
    });
}