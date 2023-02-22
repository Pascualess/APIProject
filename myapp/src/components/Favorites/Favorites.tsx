import "./favorites.css";
import { useContext } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Button } from 'reactstrap';
import parse from 'html-react-parser';
import RecipeContext from "../../context/RecipeContext";
import { useNavigate } from "react-router-dom";

export function Favorites(){

    const { favorites, removeRecipe } = useContext(RecipeContext);
    // const { showRecipe } = useContext(DetailsContext);
    const navigate = useNavigate()

    return (
        
        <div className="Favorites" id="favorites">
            <div className="Favorites_Header">
                <h2 className="Favorites_Header__Title">Your Favorite Recipes</h2>
                <p className="Favorites_Header__Count">Total Recipes: {favorites.length}</p>
            </div>
            <div className="Favorites_Recipe__Container">
                {favorites.map((recipe) => 
                    <div key={recipe.id} className="Recipe_Card">
                    <Card>
                        <div className="Card-Image">
                            <img alt="" src={recipe.image}/>
                        </div>
                        <CardBody>
                            <CardTitle tag="h5">{recipe.title}</CardTitle>

                            {/* <CardText style={{minHeight: '25%'}}>
                                <p>{parse((recipe.summary).substring(0, 200))}</p>
                            </CardText> */}

                            <div className='buttonDiv'>
                                <button className="btn-details" onClick={() => navigate(`/Details/${recipe.id}`)}>
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