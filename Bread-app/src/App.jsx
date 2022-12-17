import { useState } from 'react'
import React from 'react'
import LoginApp from "../components/LoginApp"
import RecipeApp from "../components/RecipePage"




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

  const [recipes, setRecipes] = useState([])

  function createNewRecipe(){
    const newRecipe = {
      id: "",
      name: "test",
      steps: [],
      ingredients: {
        Salt: "10g",
        WholeWheatFlour: "150g",
        BreadFlour: "350g",
        Water: "250g",
        Starter: "300g"
      },
      newVersion:{},
    }
    return{}
  }
  

  
 return (
  <>
  {
    newUser.isCreated ?
    <RecipeApp 
    user = {newUser}
    /> :
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
