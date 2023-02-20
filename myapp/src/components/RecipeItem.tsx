import * as React from 'react';
import { useContext } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Button } from 'reactstrap';
import "../css/recipeItem.css";
import { Recipe } from '../model/RecipeByRandom';
import parse from 'html-react-parser';
import RecipeContext from '../context/RecipeContext';
import DetailsContext from '../context/DetailsContext';

interface IRecipeItemProps{
  recipe: Recipe
}

export function RecipeItem(props:IRecipeItemProps){

  let {recipe} = props;
  const { addRecipe } = useContext(RecipeContext);
  const { showRecipe } = useContext(DetailsContext);

  return (
    <div className="Recipe_Card">
      <Card color="light" style={{width: '18rem', height: '100%'}}>
        <img alt="" src={recipe.image}/>
        <CardBody>
          <CardTitle tag="h5">{recipe.title}</CardTitle>
          <CardText style={{minHeight: '25%'}}>
            <p>{parse((recipe.summary).substring(0, 200))}</p>
          </CardText>

          <div className='buttonDiv'>
            <button className="btn-details" onClick={() => showRecipe(recipe)}>
              Details
            </button>
            <button className="btn-favorites" onClick={() => addRecipe(recipe)}>
              Add to Favorites
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
