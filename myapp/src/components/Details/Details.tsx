import "./details.css";
import { useContext, useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Button } from 'reactstrap';
import parse from 'html-react-parser';
import RecipeContext from "../../context/RecipeContext";
import { useParams } from "react-router-dom";
import { GetDetails } from '../../services/RecipeService';
import { RecipeIdInfo, RecipeByID } from '../../model/RecipeByID';
import React from "react";

export function Details(){

    const [details, setDetails]  = useState<RecipeByID>();
    const [diplayAnalyzedState, setDisplayAnalyzed] = useState<boolean>(false)
    const [disable, setDisable] = React.useState(false);

    const recipeId = useParams().id
    
    const { addRecipe } = useContext(RecipeContext);

    function displayBoolean(value: boolean){
        return value ? "Yes" : "No";
    };

    useEffect(() => {
        let recipeResult = GetDetails(String(recipeId));

        recipeResult.then((x) => setDetails(x))
    }, [])


    let analyzed = details?.analyzedInstructions
    let displayanalyzed = analyzed?.map((x) =>
      <ul>
      {x.steps.map((step) => 
        <div className="analyzedInstDiv">
          <li className="stepNumber">{`Step ${step.number}`}</li>
          <p className="stepStep"><b>{step.step}</b></p>
          <div className="ingDiv">
            <p className="stepIngDiv">Ingredients needed for this step:</p>
            <ol>
              {step.ingredients.map((ingredient) => 
              <div className="">
                <li>{ingredient.name}</li>
              </div>)}
            </ol>
          </div>
        </div>)}
      </ul>)

    function changeDAIState(){
      diplayAnalyzedState ? setDisplayAnalyzed(false) : setDisplayAnalyzed(true)
    }
    
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
                <img className="detailImage" alt="" src={details.image} />
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
                <Button className="btn-favorites" disabled = {disable} onClick={() => {addRecipe(details); setDisable(true)}}>
                  Add to Favorites
                </Button>
              </div> 
            </div>
            <div className="Details-Summary">
              <p className="Summary-Title">Summary:</p>
              <p>{parse(details.summary.substring(0, 2000))}</p>
            </div>
            <div className="Details-Instructions">
              <p className="Instructions-Title">Instructions:</p>
              <p>{parse(details.instructions)}</p>
              {
                diplayAnalyzedState ? <Button onClick={() => changeDAIState()}>Hide Step-by-Step</Button>
                :
                <Button onClick={() => changeDAIState()}>Show Step-by-Step</Button>
              }
              {
                diplayAnalyzedState ? displayanalyzed : <></>
              }
              {/* {displayanalyzed} */}
            </div>
          </div>
        </div>            
      }
    </div>
  );
};