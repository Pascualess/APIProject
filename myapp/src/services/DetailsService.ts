import axios from "axios";
import { Info } from "../model/RecipeInfo";

const apiKey = "44dfeaa9703845deaa770e7b3aa388fd";

export function GetInfo(id: string): Promise<Info> {
  return axios
    .get<Info>(`https://api.spoonacular.com/recipes/${id}/information`, {
      params: { apiKey },
    })
    .then((response) => response.data);
}
