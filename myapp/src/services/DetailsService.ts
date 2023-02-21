import axios from "axios";
import { RecipeByID, RecipeIdInfo } from '../model/RecipeByID';

const apiKey = "44dfeaa9703845deaa770e7b3aa388fd";

export function GetDetails(id:string): Promise<RecipeByID> {
  return axios
    .get<RecipeByID>(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`, {
      params: { apiKey }
    })
    .then((response) => response.data);
}