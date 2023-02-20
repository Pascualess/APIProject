import * as React from 'react';
import { useContext } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import "../css/recipeItem.css";
import RecipeContext from '../context/RecipeContext';
import { StandardRecipe } from '../model/StandardRecipe';
import DetailsContext from '../context/DetailsContext';


interface IRecipeItemProps{
  recipe: StandardRecipe
}

export function RecipeItem(props:IRecipeItemProps){

  const { addRecipe } = useContext(RecipeContext);
  const { showRecipe } = useContext(DetailsContext);

  return (
    <div className="Recipe_Card">
      <Card color="light" style={{width: '18rem', height: '100%'}}>
        <img alt="" src={props.recipe.image}/>
        <CardBody>
          <CardTitle tag="h5">{props.recipe.title}</CardTitle>
          <CardText style={{minHeight: '25%'}}>

            {/* <p>{parse((props.recipe.summary).substring(0, 200))}</p>      Remove : useAPI call to pull info : ! cant use because other API calls dont have summary */}

          </CardText>

          <div className='buttonDiv'>
            <button className="btn-details" onClick={() => showRecipe(props.recipe)}>
              Details
            </button>
            <button className="btn-favorites" onClick={() => addRecipe(props.recipe)}>
              Add to Favorites
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
