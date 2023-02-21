import "./details.css";
import { useContext, useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Button } from 'reactstrap';
import parse from 'html-react-parser';
import RecipeContext from "../../context/RecipeContext";
import { useParams } from "react-router-dom";
import { GetDetails } from '../../services/DetailsService';
import { RecipeIdInfo, RecipeByID } from '../../model/RecipeByID';

export function Details(){

    const  [details, setDetails]  = useState<RecipeByID>();

    const recipeId = useParams().id
    
    const { addRecipe } = useContext(RecipeContext);

    function displayBoolean(value: boolean){
        return value ? "Yes" : "No";
    };

    useEffect(() => {
        let recipeResult = GetDetails(String(recipeId));

        recipeResult.then((x) => setDetails(x))
    }, [])


    // let display = toDisplay?.map((x) =>
    //     <h1>{x.title}</h1>
    // )

    
  return (
    <div className="Details" id="details">
      {details !== undefined && 
        <div>
          <div className="Details_Header">
            <h2>Your Detailed Recipe</h2>
          </div>
          <div key={details.id} className="Details-Card">
            <div className="Details-Card_Head">
              <div className="Card-Image">
                <img alt="" src={details.image} />
              </div>
              <div className="Details-Card_Additional">
                <div className="Details-Title">{details.title}</div>
                <div className="Recipe_Source"><p>Original Source: </p><a href={details.sourceUrl} target="_blank">{details.sourceName}</a></div>
                <div className="Recipe_Servings"><p># of Servings: {details.servings}</p></div>
                <div className="Recipe_ReadyIn"><p>Ready In (mins): {details.readyInMinutes}</p></div>
                <div className="Recipe_Likes"><p>Likes: {details.aggregateLikes}</p></div>
                <div className="Recipe_Dairy"><p>Dairy Free ? : {displayBoolean(details.dairyFree)}</p></div>
                <div className="Recipe_Vegetarian"><p>Vegetarian ? : {displayBoolean(details.vegetarian)}</p></div>
                <div className="Recipe_Vegan"><p>Vegan ? : {displayBoolean(details.dairyFree)}</p></div>
              </div> 
            </div>
            <div className="Details-Summary">
              <p className="Summary-Title">Summary:</p>
              <p>{parse(details.summary.substring(0, 2000))}</p>
            </div>
            <div className="Details-Instructions">
              <p className="Instructions-Title">Instructions:</p>
              <p>{details.instructions}</p>
            </div>
            <div className="buttonDiv">
            </div>
          </div>
        </div>            
      }
    </div>
  );
};