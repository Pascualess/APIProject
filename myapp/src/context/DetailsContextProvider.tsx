import { ReactNode, useState } from "react";
// import { Recipe } from "../model/RecipeByIngredient";
// import { RecipeByCuisine } from "../model/RecipeByCuisine";
import { Recipe } from "../model/RecipeByRandom";
import DetailsContext from "./DetailsContext";

interface IDetailsContextProviderProps {
    children: ReactNode
}

const DetailsContextProvider = ({children}:IDetailsContextProviderProps) => {
    const [details, detailedRecipe] = useState<Recipe[]>([]);

    const showRecipe = (recipe:Recipe) => {
        detailedRecipe([...details, recipe]);
    }

    return(<DetailsContext.Provider value={{
        details: details,
        showRecipe: showRecipe,
    }}>{children}</DetailsContext.Provider>)
};

export default DetailsContextProvider;