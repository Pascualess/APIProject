import axios from "axios";
import { RecipeByID, RecipeIdInfo } from '../model/RecipeByID';

const apiKey = "7fdb945d7a334d3797ded4b74a1e4abd";

export function GetDetails(id:string): Promise<RecipeByID> {
  return axios
    .get<RecipeByID>(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`, {
      params: { apiKey }
    })
    .then((response) => response.data);
}