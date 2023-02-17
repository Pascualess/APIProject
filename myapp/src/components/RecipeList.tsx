import * as React from 'react';
import { RecipeItem } from './RecipeItem';
import '../css/recipeList.css'
import { StandardRecipe } from '../model/StandardRecipe';

export interface IRecipeListProps {
  recipes:StandardRecipe[]
}

export function RecipeList (props: IRecipeListProps) {
  
  return (
    <div className='RecipeList'>
      <div className='singleRecipe'>
        {props.recipes.map((recipe) => <RecipeItem recipe={recipe} />)}
      </div>
    </div>
  );
}
