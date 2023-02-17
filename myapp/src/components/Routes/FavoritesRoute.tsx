import { Link } from "react-router-dom";

export function FavoritesRoute(){
    return (
        <div>
            <Link to={"/favorites"}>Favorites</Link>
        </div>
    );
};