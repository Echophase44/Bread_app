import React from "react";
import '../src/RecipePage.css'
import deleteImg from "../public/delete.png"
import editImg from "../public/edit.png"
import SettingsPanel from "./SettingsPanel"
import RecipeList from "./RecipeList";
import InstructionSection from "./Instructions"
import pencilOutline from "../public/pencil-outline.svg"
import EditInstructions from "./EditInstructionsModal";

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
            <img className="recipe-elementEditImg" src={editImg} alt="" />
          </button>
          <button className="recipe-elementDeleteBtn" onClick={event => {props.deleteRecipe(elements.id); props.clearCurrentRecipe(event)}}>
            <img className="recipe-elementDeleteImg" src={deleteImg} alt=""/>
          </button>
        </div>
      }
    </div>
  ))

  function toggleInstructionsModal(index){
    props.setTogglePanels (prevToggles => ({
      ...prevToggles,
      editInstructionsPanel: !prevToggles.editInstructionsPanel
    }))
    
    props.setSelectedStep (props.selectedRecipe.steps[index])
  }

  const currentRecipeSteps = props.selectedRecipe?.steps?.map((recipeSteps, index) => (
    <div className="recipe-stepInstructionContainer" key={index}>
      <h2 className="recipe-stepTitle">{`Step ${index + 1}`}</h2>
      <div className="recipe-bodyContainer">
        <p className="recipe-stepBody">{recipeSteps.body}</p>
        <button className="recipe-editStepButton" onClick={() => toggleInstructionsModal(index)} type="button">
          <img src={pencilOutline} alt=""/>
        </button>
      </div>
    </div>
  ))
   
  // Passed props
  const username = props.user.username
  const selectedRecipeSteps = props.selectedRecipe.steps
  const {addNewStep, createNewRecipe, generateUsername, settingsPanelToggle, togglePanels, selectedStep, setRecipes} = props

  return(
    <main>
      {props.togglePanels.settingsPanel && 
        <SettingsPanel
          settingsPanelToggle = {settingsPanelToggle}
        />
      }

      {
        props.togglePanels.editInstructionsPanel && 
        <EditInstructions 
          toggleInstructionsModal = {toggleInstructionsModal}
          selectedRecipeSteps = {selectedRecipeSteps}
          selectedStep = {selectedStep}
          setRecipes = {setRecipes}
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
        togglePanels = {togglePanels}
     />
    </main>
  )
}

export default RecipeApp