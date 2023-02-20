import axios from "axios";
import { Random } from "../model/RecipeByRandom";

const apiKey = "44dfeaa9703845deaa770e7b3aa388fd";

export function GetDetails(id:string): Promise<Random> {
  return axios
    .get<Random>(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions`, {
      params: { apiKey },
    })
    .then((response) => response.data);
}