import { useState } from 'react'
import React from 'react'
import { nanoid } from "nanoid"
import LoginApp from "../components/LoginApp"
import RecipeApp from "../components/RecipePage"




function App() {
  const [newUser, setNewUser] = useState(() => 
  JSON.parse(localStorage.getItem("User")) || {
    email:"",
    password: "",
    confirmPassword: "",
    username: "",
    isCreated: false,
  })

  React.useEffect(()=> {
    localStorage.setItem("User", JSON.stringify(newUser))
  }, [newUser])

  // Login Section

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

  // Recipe Section

  const [recipes, setRecipes] = useState([])
  const [currentRecipe, setCurrentRecipe] = useState(recipes[0] && recipes[0].id || "")
  

  function createNewRecipe(){
    const newRecipe = {
      id: nanoid(),
      name: "Sourdough",
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
    setRecipes(prevRecipes => [...prevRecipes, newRecipe])
  }


  
  function deleteRecipe(id){
    return console.log(id)
  }

  
 return (
  <>
  {
    newUser.isCreated ?
    <RecipeApp 
    user = {newUser}
    recipes = {recipes}
    createNewRecipe = {createNewRecipe}
    deleteRecipe = {deleteRecipe}
    currentRecipe = {currentRecipe}
    setCurrentRecipe = {setCurrentRecipe}
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
