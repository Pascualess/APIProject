import { Link } from "react-router-dom";

export function HeaderRoute(){
    return (
        <div>
            <Link to={"/random"}>Header</Link>
        </div>
    );
};