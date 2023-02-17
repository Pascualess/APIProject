import { DetailsContextModel } from "./DetailsContextModel";
import { createContext } from "react";

const defaultValue: DetailsContextModel = {
    details: [],
    showRecipe: () => {},
}

const DetailsContext = createContext(defaultValue);

export default DetailsContext;