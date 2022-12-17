import React from "react";
import Username from "./usernameGenerator"
import '../src/RecipePage.css'
import settingsIcon from "../public/setting.png"

function RecipeApp(props){
    

  console.log(props)
  return(
    <main>
      <section className="recipe-listSection">
        <div className="recipe-listContainer">
          <nav className="recipe-nav">
            <Username />
            <button className="recipe-settingsButton"><img className="recipe-settingsIcon" src={settingsIcon} alt="User Settings" /></button>
          </nav>
          <div className="recipe-recipes">
            <div className="recipe-navOptions">
              <button className="recipe-addRecipeBtn">＋</button>
            </div>
          </div>
        </div>
      </section>

      <section className="recipe-stepsSection">
        <div className="recipe-stepsContainer">
          <h2 className="recipe-stepsTitle">Recipe Steps</h2>
          <div className="recipe-stepsInfo">

          </div>
        </div>
      </section>

      <section className="recipe-ingredientsSection">
        <div className="recipe-ingredientsContainer">

        
        <h1>Recipe Ingredients</h1>
        </div>
      </section>
    </main>
  )
}

export default RecipeApp