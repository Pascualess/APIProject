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

    const removeDetails = (id:number) => {
        detailedRecipe(details.filter((x) => x.id !== id));
    };

    return(<DetailsContext.Provider value={{
        details: details,
        showRecipe: showRecipe,
        removeDetails: removeDetails,
    }}>{children}</DetailsContext.Provider>)
};

export default DetailsContextProvider;