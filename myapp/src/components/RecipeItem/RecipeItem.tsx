import * as React from 'react';
import "./recipeItem.css";
import { Recipe } from '../../model/RecipeByRandom';

interface IRecipeItemProps{
  recipe: Recipe
}


export function RecipeItem (props:IRecipeItemProps){
  return (
    <div className="Recipe_List">

    <div className="Recipe_Card">
      <div className="Recipe_Image">
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
      </div>
    </div>

    </div>
  );
}
