import { RecipeContextModel } from "./RecipeContextModel";
import { createContext } from "react";

const defaultValue: RecipeContextModel = {
    favorites: [],
    addRecipe: () => {},
    removeRecipe: () => {},
}

const RecipeContext = createContext(defaultValue);

export default RecipeContext;