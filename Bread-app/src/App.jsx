import { useState } from 'react'
import React from 'react'
import LoginApp from "../components/LoginApp"
import RecipeApp from "../components/RecipeApp"
import {userData} from "../data/userdata"




function App() {
  const [newUser, setNewUser] = useState({
    email:"",
    password: "",
    confirmPassword: "",
    isCreated: false,
  })

  function handleChange(event){
    setNewUser(prevUser => ({
      ...prevUser,
      [event.target.name]: event.target.value
    }))
  }

  function createUser(){
    setNewUser(prevUser => {
      return {
        ...prevUser,
        isCreated: true
      }
    })
  }
  
 return (
  <>
  {
    newUser.isCreated ?
    <RecipeApp /> :
    <LoginApp 
    userLogin = {setNewUser}
    handleChange = {handleChange}
    createUser = {createUser}
    /> 
  }
  </>
 )
}

export default App
