import "./favorites.css";
import { useContext } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Button } from 'reactstrap';
import parse from 'html-react-parser';
import RecipeContext from "../../context/RecipeContext";
import DetailsContext from "../../context/DetailsContext";

export function Favorites(){

    const { favorites, removeRecipe } = useContext(RecipeContext);
    const { showRecipe } = useContext(DetailsContext);

    return (
        <div className="Favorites">
            <div className="Favorites_Header">
                <h2 className="Favorites_Header__Title">Your Favorite Recipes</h2>
            </div>
            <div className="Favorites_Recipe__Container">
                {favorites.map((recipe) => 
                    <div key={recipe.id} className="Recipe_Card">
                    <Card color="light" style={{width: '18rem', height: '100%'}}>
                        <img alt="" src={recipe.image}/>
                        <CardBody>
                            <CardTitle tag="h5">{recipe.title}</CardTitle>
                            <CardText style={{minHeight: '25%'}}>
                                <p>{parse((recipe.summary).substring(0, 200))}</p>
                            </CardText>
                            <div className='buttonDiv'>
                                <button className="btn-details" onClick={() => showRecipe(recipe)}>
                                    Details
                                </button>
                                <button className="btn-favorites" onClick={() => removeRecipe(recipe.id)}>
                                    Remove from Favorites
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                    </div>)}
            </div>
        </div>
    );
};