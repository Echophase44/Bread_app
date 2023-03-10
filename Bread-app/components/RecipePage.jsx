import React from "react";
import '../src/RecipePage.css'
import settingsIcon from "../public/setting.png"
import deleteImg from "../public/delete.png"
import editImg from "../public/edit.png"
import SettingsPanel from "./SettingsPanel"

function RecipeApp(props){
  const settingsPanelToggle = props.settingsPanelToggle

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

  return(
    <main>
      {props.settingsPanel && 
        <SettingsPanel
          settingsPanelToggle = {settingsPanelToggle}
        />
      }

      <section className="recipe-listSection">
        <div className="recipe-listContainer">
          <nav className="recipe-nav">
          <h2 className="recipe-username">{props.user.username === "" ? props.generateUsername() : props.user.username}'s Recipes</h2>
            <button className="recipe-settingsButton" onClick={() => props.settingsPanelToggle()}><img className="recipe-settingsIcon" src={settingsIcon} alt="User Settings" /></button>
          </nav>
          <div className="recipe-recipes">
            <div className="recipe-navOptions">
              <button 
              className="recipe-addRecipeBtn" onClick={() => {props.createNewRecipe()}}>＋</button>
            </div>
            {createdRecipes}
          </div>
        </div>
      </section>

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