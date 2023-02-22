import { useState, useEffect } from "react";
import { cuisines } from "../data/cuisines";
import { RecipeByCuisine } from "../model/RecipeByCuisine";
import { Random } from "../model/RecipeByRandom";
import { getByRandom, getFindByCuisine, getFindByIngredients } from "../services/RecipeService";
import { RecipeList } from "./RecipeList";
import "../css/searchBar.css";
import { StandardRecipe } from "../model/StandardRecipe";

export interface ISearchBarProps {}

const searchTypes = [
  {
    value: "findByIngredient",
    label: "Find by Ingredient",
  },
  {
    value: "findByCuisine",
    label: "Find by Cuisine",
  },
  {
    value: "random",
    label: "Random",
  },
];

export function SearchBar(props: ISearchBarProps) {
  const [value, setValue] = useState("");
  const [recipes, setRecipes] = useState<StandardRecipe[]>([]);
  const [cuisine, setCuisine] = useState(cuisines[1]);
  const [selectedSearchType, setSelectedSearchType] = useState("random");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSearchClick = () => {
    switch (selectedSearchType) {
      case "findByIngredient":
        getFindByIngredients(value).then((recipes) => {
          setRecipes(recipes);
        });
        break;
      case "findByCuisine":
        getFindByCuisine(value, cuisine).then((recipes) => {
          setRecipes(recipes);
        });
        break;
      case "random":
        getByRandom().then((recipes) => {
          setRecipes(recipes);
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="SearchBar">
      <div className="SearchContainer">
        <div>
          {searchTypes.map((searchType) => (
            <label className="radio" key={searchType.value}>
              <input
                type="radio"
                name="searchType"
                id="input"
                value={searchType.value}
                checked={selectedSearchType === searchType.value}
                onChange={(e) => setSelectedSearchType(e.target.value)}
              />
              {searchType.label}
            </label>
          ))}
        </div>
        {selectedSearchType !== "random" && (
          <input
            className="bar"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="What sounds good?"
          />
        )}
        {selectedSearchType === "findByCuisine" && (
          <div>
            <select
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            >
              {cuisines.map((cuisine) => (
                <option key={cuisine} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
          </div>
        )}
        <button id="btn-search" onClick={onSearchClick}>Search</button>
      </div>
      {recipes &&<RecipeList recipes={recipes}/>}
    </div>
  );
}
function keyDownHandler(this: Document, ev: KeyboardEvent) {
  throw new Error("Function not implemented.");
}

