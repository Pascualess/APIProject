import "./details.css";
import { useEffect, useState } from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Info } from "../../model/RecipeInfo";
import { GetInfo } from "../../services/DetailsService";
import parse from "html-react-parser";
interface IDetailsProps {}

export function Details(props: IDetailsProps) {
  const [recipeDetail, setRecipeDetail] = useState<Info>();
  const recipeId = useParams().id;
  const navigate = useNavigate();
  function displayBoolean(value: boolean) {
    return value ? "Yes" : "No";
  }

  useEffect(() => {
    if (recipeId) {
      let recipeResult = GetInfo(recipeId);
      recipeResult.then((x) => setRecipeDetail(x));
    }
  }, []);

  if (recipeDetail) {
    return (
      <div className="Details" id="details">
        <div className="Details_Header">
          <h2 className="Details_Header__Title">Your Detailed Recipe</h2>
        </div>
        <div className="Details_Recipe__Container">
          <div key={recipeDetail.id} className="Recipe_Card">
            <Card>
              <div className="Card-Image">
                <img alt="" src={recipeDetail.image} />
              </div>
              <CardBody>
                <CardTitle tag="h5">{recipeDetail.title}</CardTitle>

                <CardText>
                  <div className="Recipe_Card_Additional">
                    <div className="Recipe_Source">
                      <p>Original Source: </p>
                      <a href={recipeDetail.sourceUrl} target="_blank">
                        {recipeDetail.sourceName}
                      </a>
                    </div>
                    <p>
                      Dairy Free ? : {displayBoolean(recipeDetail.dairyFree)}
                    </p>
                    <p># of Servings: {recipeDetail.servings}</p>
                  </div>
                  <p className="recipeDetail_Card_Summary">
                    {parse(recipeDetail.summary.substring(0, 2000))}
                  </p>
                  <div className="recipeDetail_Card_Instructions">
                    {recipeDetail.instructions}
                  </div>
                </CardText>

                <div className="buttonDiv">
                  <button className="btn-details" onClick={() => navigate(`/`)}>
                    Back to Search
                  </button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
