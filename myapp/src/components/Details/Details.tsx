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

    // function displayBoolean(value: boolean){
    //     return value ? "Yes" : "No";
    // };

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
                // <h1>{details.title}</h1>
                <div>
                    <div className="Details" id="details">
        <div className="Details_Header">
          <h2 className="Details_Header__Title">Your Detailed Recipe</h2>
        </div>
        <div className="Details_Recipe__Container">
          <div key={details.id} className="Recipe_Card">
            <Card>
              <div className="Card-Image">
                <img alt="" src={details.image} />
              </div>
              <CardBody>
                <CardTitle tag="h5">{details.title}</CardTitle>
                <CardText>
                  <div className="Recipe_Card_Additional">
                    <div className="Recipe_Source">
                      <p>Original Source: </p>
                      <a href={details.sourceUrl} target="_blank">
                        {details.sourceName}
                      </a>
                    </div>
                    {/* <p>
                      Dairy Free ? : {displayBoolean(recipeDetail.dairyFree)}
                    </p> */}
                    <p># of Servings: {details.servings}</p>
                  </div>
                  <p className="recipeDetail_Card_Summary">
                    {parse(details.summary.substring(0, 2000))}
                  </p>
                  <div className="recipeDetail_Card_Instructions">
                    {details.instructions}
                  </div>
                </CardText>
                <div className="buttonDiv">
                  {/* <button className="btn-details" onClick={() => navigate(`/`)}>
                    Back to Search
                  </button> */}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
                </div>                
            }
        </div>
    );
};