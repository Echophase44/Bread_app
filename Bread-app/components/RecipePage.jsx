import React from "react";
import '../src/RecipePage.css'
import settingsIcon from "../public/setting.png"
import deleteImg from "../public/delete.png"
import editImg from "../public/edit.png"

function RecipeApp(props){


  const createdRecipes = props.recipes.map((elements) => (
    <div className={`recipe-recipeElement ${elements.id === props.currentRecipe ? "recipe-selectedRecipe" : ""}`} 
    key={elements.id}
    onClick={()=> {props.setCurrentRecipe(elements.id); props.openCurrentRecipeSteps(elements.steps)}}
    >
      <h3 className="recipe-elementTitle">{elements.title === "" ? "New Recipe" : elements.title}</h3>
      {elements.editName === true && <input
        type="text"
        autoFocus
        className="recipe-editRecipeName" 
        placeholder={elements.title}
        value = {elements.title}
        name= "title"
        maxLength="20"
        onChange={()=> props.renameRecipeTitle(event)}
        onKeyDown={()=> props.submitTitleInput(event)}>
        </input>
      }
      {elements.id === props.currentRecipe && 
      <div className="recipe-elementBtnContainer">
        <button className="recipe-elementEditBtn" onClick={() => props.toggleRecipeTitleInput()}>
          <img className="recipe-elementEditImg" src={editImg} alt="Edit recipe name" />
        </button>
        <button className="recipe-elementDeleteBtn" onClick={() => props.deleteRecipe(elements.id)}>
          <img className="recipe-elementDeleteImg" src={deleteImg} alt="Delete Recipe"/>
        </button>
      </div>
      }
    </div>
  ))

  // console.log(props.currentRecipeSteps)

  return(
    <main>
      <section className="recipe-listSection">
        <div className="recipe-listContainer">
          <nav className="recipe-nav">
          <h2 className="recipe-username">{props.user.username === "" ? props.generateUsername() : props.user.username}'s Recipes</h2>
            <button className="recipe-settingsButton"><img className="recipe-settingsIcon" src={settingsIcon} alt="User Settings" /></button>
          </nav>
          <div className="recipe-recipes">
            <div className="recipe-navOptions">
              <button 
              className="recipe-addRecipeBtn" onClick={props.createNewRecipe}>＋</button>
            </div>
            {createdRecipes}
          </div>
        </div>
      </section>

      <section className="recipe-stepsSection">
        <div className="recipe-stepsContainer">
          <h2 className="recipe-stepsTitle">Recipe Steps</h2>
          <div className="recipe-stepsInfo">
            {/* {recipeStepsData} */}
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