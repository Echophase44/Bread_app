import React from "react";
import '../styles/settingsPanel.css'

function SettingsPanel(props){

  return(
    <section className="settings-settingsContainer">
        <div className="settings-panel">
          <div className="settings-buttonContainer">
            <button className="settings-closePanelButton" type="button" onClick={() => props.settingsPanelToggle()}>X</button>
          </div>
          <ul className="settings-settingsList">
            <li>Change Username</li>
            <li>Change Email</li>
            <li>Change Password</li>
            <li>Dark Mode</li>
            <li>Delete All Recipes</li>
          </ul>
        </div>
        <div className="settings-clearSection" onClick={() => props.settingsPanelToggle()}></div>
    </section>
  )
}

export default SettingsPanel