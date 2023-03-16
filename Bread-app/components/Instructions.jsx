import React from "react";
import '../styles/InstructionsSection.css'
 

function InstructionSection (props) {
  console.log(props)

  function toggleModal(){
    console.log("Clicked")
  }

  return (
    <section className="recipe-stepsSection">
        <div className="recipe-stepsContainer">
          <nav className="recipe-navContainer">
            <div className="recipe-instructionsTitle">
              <h2 className="recipe-stepsTitle">Instructions</h2>
              <div className="recipe-addRecipeWrapper">
                <button className="recipe-addRecipeStep" onClick={() => {props.addNewStep()}}>＋</button>
              </div>
            </div>
            <h2 className="recipe-IngredientsTitle">Ingredients</h2>
          </nav>
          <div className="recipe-stepsInfo">
            {props.currentRecipeSteps}
          </div>
        </div>
    </section>
  )
}
 
export default InstructionSection