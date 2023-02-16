import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Random, Recipe } from '../model/RecipeByRandom';

interface IDetailsRouteProps {
  recipe?:Random

}

export function DetailsRoute (props: IDetailsRouteProps) {
  let { id } = useParams();

  let item = props.recipe?.recipes.find((item) => item.id.toString() === id)

  return (
    <div className='recipeDetails'>
      {
      item !== undefined &&
      <div>
        <div className='recName'>
          <p>{item.title}</p>
        </div>

        <div className='desc'>
          <p>{item.summary}</p>
        </div>
      </div>
      }
    </div>
  );
}
