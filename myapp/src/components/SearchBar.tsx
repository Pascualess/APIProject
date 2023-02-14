import { useState, useEffect } from "react";
import { cuisines } from "../data/cuisines";
import { RecipeByCuisine } from "../model/RecipeByCuisine";
import { Recipe } from "../model/RecipeByIngredient";
import { Random } from "../model/RecipeByRandom";
import { getByRandom } from "../services/GetByRandom";
import { getFindByCuisine } from "../services/GetFindByCuisine";
import { getFindByIngredients } from "../services/GetFindByIngredients";
import { RecipeList } from "./RecipeList";

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
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recipesByCuisine, setRecipesByCuisine] = useState<RecipeByCuisine>();
  const [recipesByRandom, setRecipesByRandom] = useState<Random>();
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
          setRecipesByCuisine(recipes);
        });
        break;
      case "random":
        getByRandom().then((recipes) => {
          setRecipesByRandom(recipes);
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="SearchBar">
      <div>
        {searchTypes.map((searchType) => (
          <label key={searchType.value}>
            <input
              type="radio"
              name="searchType"
              value={searchType.value}
              checked={selectedSearchType === searchType.value}
              onChange={(e) => setSelectedSearchType(e.target.value)}
            />
            {searchType.label}
          </label>
        ))}
      </div>
      {selectedSearchType !== "random" && (
        <input type="text" value={value} onChange={onChange} />
      )}
      <button onClick={onSearchClick}>Search</button>
      {selectedSearchType === "findByCuisine" && (
        <div>
          <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
            {cuisines.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
        </div>
      )}
      {recipesByRandom && <RecipeList recipesByRandom={recipesByRandom} />}
    </div>
  );
}
