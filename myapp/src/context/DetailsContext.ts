import { DetailsContextModel } from "./DetailsContextModel";
import { createContext } from "react";

const defaultValue: DetailsContextModel = {
    details: [],
    showRecipe: () => {},
    removeDetails: () => {},
}

const DetailsContext = createContext(defaultValue);

export default DetailsContext;