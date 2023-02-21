import * as React from 'react';
import { useContext } from "react";
import "../css/recipeItem.css";
import RecipeContext from '../context/RecipeContext';
import { StandardRecipe } from '../model/StandardRecipe';
import { useNavigate } from 'react-router-dom';

interface IRecipeItemProps{
  recipe: StandardRecipe
}

export function RecipeItem(props:IRecipeItemProps){

  const recipe = props.recipe
  const navigate = useNavigate()
  const [disable, setDisable] = React.useState(false);

  const { addRecipe } = useContext(RecipeContext);

  return (
    <div className="Recipe_Card">
        <div className="Card-Image"><img alt="" src={recipe.image}/></div>
        <div className="Card-Body">
          <div className="Card-Title"><h5>{recipe.title}</h5></div>
          <div className='Card-Buttons'>
            <button className="btn-details" onClick={() => navigate(`/Details/${props.recipe.id}`)}>
            Details
            </button>
            <button  className="btn-favorites" disabled = {disable} onClick={() => {addRecipe(recipe); setDisable(true)} }>
            Add to Favorites
            </button>
          </div>
        </div>
    </div>
  );
}
