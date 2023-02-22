import * as React from "react";
import { RecipeItem } from "./RecipeItem";
import "../css/recipeList.css";
import { StandardRecipe } from "../model/StandardRecipe";
import _ from "lodash";
import { useState, useEffect } from "react";

export interface IRecipeListProps {
  recipes: StandardRecipe[];
}

export function RecipeList(props: IRecipeListProps) {

  const pageSize = 15;
  const pageCount = Math.ceil(props?.recipes.length / pageSize);
  const [currentPage, setCurrentPage] = useState(1)
  const [paginatedPost, setPaginatedPost] = useState<StandardRecipe[]>([]);
  useEffect(() => {
    setPaginatedPost(_(props.recipes).slice(0).take(pageSize).value())
  }, [pageCount]);

  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo:number) => {
    setCurrentPage(pageNo)
    const startIndex = (pageNo - 1)* pageSize;
    const paginatedPost = _(props.recipes).slice(startIndex).take(pageSize).value()
    setPaginatedPost(paginatedPost)
  }

  return (
    <div className="RecipeList">
      <div className="singleRecipe">
        {paginatedPost.map((recipe) => (
          <RecipeItem recipe={recipe} />
        ))}
      </div>
      <nav className="paginationContainer">
        <ul className="pagination">
          {pages.map((page) => (
            <li className={
              page === currentPage? "page-item active"  : "page-item"
            }
            >
              <p className="page-link"
              onClick={() =>pagination(page) }>{page}</p>
              </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
