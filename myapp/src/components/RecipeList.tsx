import * as React from 'react';
import { Random } from '../model/RecipeByRandom';
import { RecipeItem } from './RecipeItem';
import '../css/recipeList.css'

export interface IRecipeListProps {
  recipesByRandom:Random
}

export function RecipeList (props: IRecipeListProps) {
  
  return (
    <div className='RecipeList'>
      <div className='singleRecipe'>
        {props.recipesByRandom.recipes.map((recipe) => <RecipeItem recipe={recipe} />)}
      </div>
    </div>
  );
}
