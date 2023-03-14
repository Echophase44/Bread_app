import React from "react";
import '../styles/IngredientsSection.css'
 

function InstructionSection (props) {
  return (
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
            {props.currentRecipeSteps}
          </div>
        </div>
    </section>
  )
}
 
export default InstructionSection