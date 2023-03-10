import React from "react";
import '../src/RecipePage.css'
import deleteImg from "../public/delete.png"
import editImg from "../public/edit.png"
import SettingsPanel from "./SettingsPanel"
import RecipeList from "./RecipeList";

function RecipeApp(props){

  const createdRecipes = props.recipes.map((elements) => (
    <div className={`recipe-recipeElement ${elements.id === props.currentRecipeId ? "recipe-selectedRecipe" : ""}`} 
    key={elements.id}
    onClick={() => {props.setCurrentRecipeId(elements.id); props.setSelectedRecipe(elements)}}
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
        onChange={event => props.renameRecipeTitle(event)}
        onKeyDown={event => props.submitTitleInput(event)}>
        </input>
      }

      {elements.id === props.currentRecipeId && 
        <div className="recipe-elementBtnContainer">
          <button className="recipe-elementEditBtn" onClick={() => {props.toggleRecipeTitleInput()}}>
            <img className="recipe-elementEditImg" src={editImg} alt="Edit recipe name" />
          </button>
          <button className="recipe-elementDeleteBtn" onClick={event => {props.deleteRecipe(elements.id); props.clearCurrentRecipe(event)}}>
            <img className="recipe-elementDeleteImg" src={deleteImg} alt="Delete Recipe"/>
          </button>
        </div>
      }
    </div>
  ))

  const currentRecipeSteps = props.selectedRecipe?.steps?.map((recipeSteps, index) => (
    <div className="recipe-stepInstructionContainer" key={index}>
      <h2 className="recipe-stepTitle">{`Step ${index + 1}`}</h2>
      <p className="recipe-stepBody">{recipeSteps.body}</p>
    </div>
  ))

  // Passed props
  const settingsPanelToggle = props.settingsPanelToggle
  const generateUsername = props.generateUsername
  const createNewRecipe = props.createNewRecipe
  const username = props.user.username

  return(
    <main>
      {props.settingsPanel && 
        <SettingsPanel
          settingsPanelToggle = {settingsPanelToggle}
        />
      }

      <RecipeList
        settingsPanelToggle = {settingsPanelToggle}
        generateUsername = {generateUsername}
        createNewRecipe = {createNewRecipe}
        username = {username}
        createdRecipes = {createdRecipes}
      />
     

      <section className="recipe-stepsSection">
        <div className="recipe-stepsContainer">
          <nav className="recipe-navContainer">
            <h2 className="recipe-stepsTitle">Instructions</h2>
            <h2 className="recipe-IngredientsTitle">Ingredients</h2>
            <div className="recipe-addRecipeWrapper">
              <button className="recipe-addRecipeStep" onClick={() => {props.addNewStep()}}>＋</button>
            </div>
          </nav>
          <div className="recipe-stepsInfo">
            {currentRecipeSteps}
          </div>
        </div>
      </section>

    </main>
  )
}

export default RecipeApp