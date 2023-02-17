import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Random, Recipe } from '../model/RecipeByRandom';
import { useState, useEffect } from 'react';
import { GetDetails } from '../services/DetailsService';

interface IDetailsRouteProps {
  recipe:Recipe[]

}

export function DetailsRoute (props: IDetailsRouteProps) {
  const [detailedRecipe, setDetailedRecipe] = useState<Random>();
  let { id } = useParams();

  let item = props.recipe.find((item) => item.id.toString() === id)

  useEffect(() => {
    GetDetails(item).then(data => setDetailedRecipe(data))
  }, [])


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
