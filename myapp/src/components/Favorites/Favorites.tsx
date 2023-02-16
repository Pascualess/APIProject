import "./favorites.css";
import { useContext } from "react";
import RecipeContext from "../context/RecipeContext";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Button } from 'reactstrap';

export function Favorites(){

    const { favorites, removeRecipe } = useContext(RecipeContext);

    return (
        <div className="Favorites">
            <div>
                {favorites.map((recipe) => 
                    <div key={recipe.id}>
                    <Card color="light" style={{width: '18rem', height: '100%'}}>
                        <img alt="" src={recipe.image}/>
                        <CardBody>
                            <CardTitle tag="h5">{recipe.title}</CardTitle>
                            <div className='buttonDiv'>
                                <Button variant="primary" className="btn-favorites" onClick={() => removeRecipe}>
                                    Remove from Favorites
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                    </div>)}
            </div>
        </div>
    );
};