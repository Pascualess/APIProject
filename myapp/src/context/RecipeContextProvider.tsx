import { ReactNode, useState } from "react";
import { StandardRecipe } from "../model/StandardRecipe";
import RecipeContext from "./RecipeContext";

interface IRecipeContextProviderProps {
    children: ReactNode
}

const RecipeContextProvider = ({children}:IRecipeContextProviderProps) => {
    const [favorites, setRecipe] = useState<StandardRecipe[]>([]);

    const addRecipe = (recipe:StandardRecipe) => {
        setRecipe([...favorites, recipe]);
    };

    const removeRecipe = (id:number) => {
        setRecipe(favorites.filter((x) => x.id !== id));
    };

    return(<RecipeContext.Provider value={{
        favorites: favorites,
        addRecipe: addRecipe,
        removeRecipe: removeRecipe
    }}>{children}</RecipeContext.Provider>)
};

export default RecipeContextProvider;