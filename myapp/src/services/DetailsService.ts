import axios from "axios";
import { Info } from "../model/RecipeInfo";

const apiKey = "07d5ae18ff0f4b9b9ee3ded6c7bdd929";

export function GetInfo(id: string): Promise<Info> {
  return axios
    .get<Info>(`https://api.spoonacular.com/recipes/${id}/information`, {
      params: { apiKey },
    })
    .then((response) => response.data);
}
