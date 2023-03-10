import React from "react";
import '../styles/recipeList.css'
import settingsIcon from "../public/setting.png"


function RecipeList(props){
  
  return(
    <section className="recipe-listSection">
      <div className="recipe-listContainer">
        <nav className="recipe-nav">
          <h2 className="recipe-username">{props.username === "" ? props.generateUsername() : props.username}'s Recipes</h2>
          <button className="recipe-settingsButton" 
            onClick={() => props.settingsPanelToggle()}>
              <img className="recipe-settingsIcon" src={settingsIcon} alt="User Settings" />
          </button>
        </nav>
        <div className="recipe-recipes">
          <div className="recipe-navOptions">
            <button 
              className="recipe-addRecipeBtn" 
              onClick={() => {props.createNewRecipe()}}>＋
            </button>
          </div>
          {props.createdRecipes}
        </div>
      </div>
    </section>
  )
}

export default RecipeList