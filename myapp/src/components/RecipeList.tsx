import * as React from 'react';
import { Random } from '../model/RecipeByRandom';
import { RecipeItem } from './RecipeItem/RecipeItem';

export interface IRecipeListProps {
  recipesByRandom:Random
}

export function RecipeList (props: IRecipeListProps) {
  
  return (
    <div>
      {props.recipesByRandom.recipes.map((recipe) => <RecipeItem recipe={recipe} />)}
    </div>
  );
}
