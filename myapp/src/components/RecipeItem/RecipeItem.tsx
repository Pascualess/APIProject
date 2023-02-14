import * as React from 'react';
import "./recipeItem.css";


export function RecipeItem (){
  return (
    <div className="Recipe_List">

    <div className="Recipe_Card">
      <div className="Recipe_Image">
        <img src="https://www.inspiredtaste.net/wp-content/uploads/2016/06/Brownies-Recipe-1-1200.jpg" alt="" />
      </div>
      <div className="Recipe_Name">
        <p>Recipe Name</p>
      </div>
      <div className="Recipe_Props">
        <div className="Prop1"><p>Prop 1</p></div>
        <div className="Prop2"><p>Prop 2</p></div>
      </div>
      <div className="Favorite">
        <a href="#">Add to Favorites</a>
        <a href="#"><i className="fa-sharp fa-solid fa-star"></i></a>
      </div>
    </div>

    <div className="Recipe_Card">
      <div className="Recipe_Image">
        <img src="https://www.inspiredtaste.net/wp-content/uploads/2016/06/Brownies-Recipe-1-1200.jpg" alt="" />
      </div>
      <div className="Recipe_Name">
        <p>Recipe Name</p>
      </div>
      <div className="Recipe_Props">
        <div className="Prop1"><p>Prop 1</p></div>
        <div className="Prop2"><p>Prop 2</p></div>
      </div>
      <div className="Favorite">
        <a href="#">Add to Favorites</a>
        <a href="#"><i className="fa-sharp fa-solid fa-star"></i></a>
      </div>
    </div>

    <div className="Recipe_Card">
      <div className="Recipe_Image">
        <img src="https://www.inspiredtaste.net/wp-content/uploads/2016/06/Brownies-Recipe-1-1200.jpg" alt="" />
      </div>
      <div className="Recipe_Name">
        <p>Recipe Name</p>
      </div>
      <div className="Recipe_Props">
        <div className="Prop1"><p>Prop 1</p></div>
        <div className="Prop2"><p>Prop 2</p></div>
      </div>
      <div className="Favorite">
        <a href="#">Add to Favorites</a>
        <a href="#"><i className="fa-sharp fa-solid fa-star"></i></a>
      </div>
    </div>

    <div className="Recipe_Card">
      <div className="Recipe_Image">
        <img src="https://www.inspiredtaste.net/wp-content/uploads/2016/06/Brownies-Recipe-1-1200.jpg" alt="" />
      </div>
      <div className="Recipe_Name">
        <p>Recipe Name</p>
      </div>
      <div className="Recipe_Props">
        <div className="Prop1"><p>Prop 1</p></div>
        <div className="Prop2"><p>Prop 2</p></div>
      </div>
      <div className="Favorite">
        <a href="#">Add to Favorites</a>
        <a href="#"><i className="fa-sharp fa-solid fa-star"></i></a>
      </div>
    </div>

    </div>
  );
}
