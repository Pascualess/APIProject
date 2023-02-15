import { useState, useEffect } from 'react';
import { Recipe } from '../../model/RecipeByIngredient';
import { GetFindByIngredients } from '../../services/GetFindByIngredients';
import "./searchbar.css";

export interface ISearchBarProps {
}

export function SearchBar (props: ISearchBarProps) {
  const [value, setValue] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSearchClick = () => {
    GetFindByIngredients(value).then(recipes => {
      setRecipes(recipes);
    });
  };

  return (
    <div className='SearchBar'>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={onSearchClick}>Search</button>
      <button onClick={() => console.log(recipes)}>Log</button>
    </div>
  );
}
