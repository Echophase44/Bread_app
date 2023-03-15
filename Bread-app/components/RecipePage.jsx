import React from "react";
import '../src/RecipePage.css'
import deleteImg from "../public/delete.png"
import editImg from "../public/edit.png"
import SettingsPanel from "./SettingsPanel"
import RecipeList from "./RecipeList";
import InstructionSection from "./Instructions"

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
    console.log(props.togglePanels)
  // Passed props
  const username = props.user.username
  const {addNewStep, createNewRecipe, generateUsername, settingsPanelToggle} = props

  return(
    <main>
      {props.togglePanels.settingsPanel && 
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
     
     <InstructionSection 
        addNewStep = {addNewStep}
        currentRecipeSteps = {currentRecipeSteps}
     />
    </main>
  )
}

export default RecipeApp