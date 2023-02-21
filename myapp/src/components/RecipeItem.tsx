import * as React from 'react';
import { useContext } from "react";
import { Card, CardBody, CardTitle } from 'reactstrap';
import "../css/recipeItem.css";
import RecipeContext from '../context/RecipeContext';
import { StandardRecipe } from '../model/StandardRecipe';
import { useNavigate } from "react-router-dom";

interface IRecipeItemProps{
  recipe: StandardRecipe
}

export function RecipeItem(props:IRecipeItemProps){

  let { recipe } = props;

  const { addRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();
  function helperFunc(recipe:StandardRecipe) {
    addRecipe(recipe)
    navigate(`/#favorites`)
  }

  return (
    <div className="Recipe_Card">
      <Card color="light">
        <div className="Card-Image">
          <img alt="" src={recipe.image}/>
        </div>
        <CardBody>
          <CardTitle tag="h5">{recipe.title}</CardTitle>
          <div className='buttonDiv'>
            <button className="btn-details" onClick={() => navigate(`/#details/${props.recipe.id}`)}>
              Details
            </button>
            <button className="btn-favorites" onClick={() => helperFunc(recipe)}>
              Add to Favorites
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
