import * as React from 'react';
import { useContext } from "react";

import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Button } from 'reactstrap';
import "../css/recipeItem.css";
import { Recipe } from '../model/RecipeByRandom';
import parse from 'html-react-parser';
import RecipeContext from './context/RecipeContext';
import { StandardRecipe } from '../model/StandardRecipe';


interface IRecipeItemProps{
  recipe: StandardRecipe
}


export function RecipeItem (props:IRecipeItemProps){

  const { addRecipe } = useContext(RecipeContext);

  return (
    <div className="Recipe_Card">
      <Card color="light" style={{width: '18rem', height: '100%'}}>
        <img alt="Sample" src={props.recipe.image}/>
        <CardBody>
          <CardTitle tag="h5">
            {props.recipe.title}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText style={{minHeight: '25%'}}>
            {/* <p>{parse((props.recipe.summary).substring(0, 200))}</p> */}
          </CardText>

          <div className='buttonDiv'>
            <Button variant="primary" className="btn-details">
              Details
            </Button>
            <Button variant="primary" className="btn-favorites" onClick={() => addRecipe}>
              Add to Favorites
            </Button>
          </div>

        </CardBody>
      </Card>
        {/* <div className="Recipe_Image">
          <img src={props.recipe.image} alt="" />
        </div>

        <div className="Recipe_Name">
          <p>{props.recipe.title}</p>
        </div>

        <div className="Recipe_Props">
          <div className="Prop1"><p>Prop 1</p></div>
          <div className="Prop2"><p>Prop 2</p></div>
        </div>
        
        <div className="Favorite">
          <a href="#">Add to Favorites</a>
          <a href="#"><i className="fa-sharp fa-solid fa-star"></i></a>
        </div> */}
      </div>
  );
}
