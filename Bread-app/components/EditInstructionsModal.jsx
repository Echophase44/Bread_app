import React from "react";
import { useState } from 'react'
import "../styles/InstructionsModal.css"

function EditInstructions(props){
  const {saveEditStep, selectedStep, selectedStepIndex, setSelectedStepIndex} = props

  const loadedStep = props.selectedStep.body
  

  const [newStep, setNewStep] = useState(loadedStep)

  function holdChanges(newBodyText){
    setNewStep(newBodyText)
  }

  // console.log(selectedStepIndex)

  return(
    <section className="instructions-modalContainer">
      <div className="instructions-contentContainer">
        <h1 className="instructions-title">Update Instructions</h1>
        <div className="instructions-prevStep">
          <span className="instructions-prevTitle">Previous:</span>
          <div className="instructions-content">{loadedStep}</div>
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
            onClick={() => {props.editInstructionsModal(); saveEditStep(newStep, selectedStepIndex)}}>Save</button>
          <button className= "instructions-cancelButton"
            onClick={() => {props.editInstructionsModal()}}>Cancel</button>
        </div>
      </div>
    </section>
  )
}

export default EditInstructions