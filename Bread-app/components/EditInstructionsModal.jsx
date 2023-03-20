import React from "react";
import { useState } from 'react'
import "../styles/InstructionsModal.css"

function EditInstructions(props){
  const [newStep, setNewStep] = useState(props.selectedStep.body)

  function holdChanges(newBodyText){
    setNewStep(newBodyText)
  }

  function updateRecipeStep(){
    console.log("Saved")
    console.log(newStep)
  }

  return(
    <section className="instructions-modalContainer">
      <div className="instructions-contentContainer">
        <h1 className="instructions-title">Update Instructions</h1>
        <div className="instructions-prevStep">
          <span className="instructions-prevTitle">Previous:</span>
          <div className="instructions-content">{props.selectedStep.body}</div>
        </div>
        <div className="instructions-newStep">
          <span className="instructions-newTitle">New:</span>
            <textarea className="instructions-newBody"
              type="text"
              value={newStep}
              onChange={event => holdChanges(event.target.value)}
            />
        </div>
        <div className="instructions-buttonContainer">
          <button className="insturctions-saveButton" 
          onClick={() => {props.toggleInstructionsModal(); updateRecipeStep()}}>Save</button>
          <button className= "instructions-cancelButton">Cancel</button>
        </div>
      </div>
    </section>
  )
}

export default EditInstructions