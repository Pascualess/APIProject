import "./details.css";
import { useContext } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Button } from 'reactstrap';
import parse from 'html-react-parser';
import RecipeContext from "../../context/RecipeContext";
import DetailsContext from "../../context/DetailsContext";

export function Details(){

    const { details } = useContext(DetailsContext);
    const { addRecipe } = useContext(RecipeContext);

    function displayBoolean(value: boolean){
        return value ? "Yes" : "No";
    };

    return (
        <div className="Details">
            <div className="Details_Header">
                <h2 className="Details_Header__Title">Your Detailed Recipe</h2>
            </div>
            <div className="Details_Recipe__Container">
                {details.map((recipe) => 
                    <div key={recipe.id} className="Recipe_Card">
                    <Card>
                        <img alt="" src={recipe.image}/>
                        <CardBody>
                            <CardTitle>{recipe.title}</CardTitle>
                            <CardText>
                                <p>{parse((recipe.summary).substring(0, 200))}</p>
                                <div className="Recipe_Card_Additional">
                                    <p>Dairy Free ? : {displayBoolean(recipe.dairyFree)}</p>
                                    <p># of Servings: {recipe.servings}</p>
                                    <div className="Recipe_Source">
                                        <p>Original Source: </p><a href={recipe.sourceUrl} target="_blank">Click Here</a>
                                    </div>
                                </div>
                            </CardText>

                            <div className='buttonDiv'>
                                <button className="btn-favorites" onClick={() => addRecipe(recipe)}>
                                    Add to Favorites
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                    </div>)}
            </div>
        </div>
    );
};