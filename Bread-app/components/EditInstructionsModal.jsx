import React from "react";
import "../styles/InstructionsModal.css"

function EditInstructions(props){
  console.log(props.selectedStep)


  return(
    <section className="instructions-modalContainer" onClick={props.toggleInstructionsModal}>
      <div className="instructions-contentContainer">
        <h1>Update Instructions</h1>
        <h2></h2>
      </div>
    </section>
  )
}

export default EditInstructions