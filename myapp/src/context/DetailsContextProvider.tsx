import { ReactNode, useState } from "react";
// import { Recipe } from "../model/RecipeByIngredient";
// import { RecipeByCuisine } from "../model/RecipeByCuisine";
// import { Recipe } from "../model/RecipeByRandom";
import { StandardRecipe } from "../model/StandardRecipe";
import DetailsContext from "./DetailsContext";

interface IDetailsContextProviderProps {
    children: ReactNode
}

const DetailsContextProvider = ({children}:IDetailsContextProviderProps) => {
    const [details, detailedRecipe] = useState<StandardRecipe[]>([]);

    const showRecipe = (recipe:StandardRecipe) => {
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