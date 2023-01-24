import React from "react";
import Username from "./usernameGenerator"
import '../src/RecipePage.css'
import settingsIcon from "../public/setting.png"
import deleteImg from "../public/delete.png"
import editImg from "../public/edit.png"

function RecipeApp(props){


  const recipeElements = props.recipes.map((elements, index) => (
    <div className={`recipe-recipeElement ${elements.id === props.currentRecipe ? "recipe-selectedRecipe" : ""}`} 
    key={elements.id}
    onClick={()=> props.setCurrentRecipe(elements.id)}
    >
      <h3>Recipe {index + 1}</h3>
      {elements.id === props.currentRecipe && 
      <div className="recipe-elementBtnContainer">
        <button className="recipe-elementEditBtn">
          <img className="recipe-elementEditImg" src={editImg} alt="Edit recipe name" />
        </button>
        <button className="recipe-elementDeleteBtn" onClick={() => props.deleteRecipe(elements.id)}>
          <img className="recipe-elementDeleteImg" src={deleteImg} alt="Delete Recipe"/>
        </button>
      </div>
      }

    </div>
  ))

  console.log(props.recipes.steps)
  // const recipeSteps = 
    
  

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
              <button 
              className="recipe-addRecipeBtn" onClick={props.createNewRecipe}>＋</button>
            </div>
            {recipeElements}
          </div>
        </div>
      </section>

      <section className="recipe-stepsSection">
        <div className="recipe-stepsContainer">
          <h2 className="recipe-stepsTitle">Recipe Steps</h2>
          <div className="recipe-stepsInfo">
            {/* {recipeSteps} */}
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