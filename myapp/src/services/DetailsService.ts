import axios from "axios";
import { RecipeByID, RecipeIdInfo } from '../model/RecipeByID';

const apiKey = "07d5ae18ff0f4b9b9ee3ded6c7bdd929";

export function GetDetails(id:string): Promise<RecipeByID> {
  return axios
    .get<RecipeByID>(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`, {
      params: { apiKey }
    })
    .then((response) => response.data);
}