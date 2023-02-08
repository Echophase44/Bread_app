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

  // Login Page

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

  // Recipe Page

  const [recipes, setRecipes] = useState([])
  const [currentRecipe, setCurrentRecipe] = useState(recipes[0] && recipes[0].id || "")
  const [currentRecipeSteps, setCurrentRecipeSteps] = useState([])
  
  

  function createNewRecipe(){
    const newRecipe = {
      id: nanoid(),
      title: "",
      steps: [["Make the Dough", "Whisk the starter, water, and olive oil in a large bowl."], ["Bulk Rise", "Now the dough needs to rise"]],
      ingredients: {
        Salt: "10g",
        WholeWheatFlour: "150g",
        BreadFlour: "350g",
        Water: "250g",
        Starter: "300g"
      },
      editName: false,
      newVersion:{},
    }
    setRecipes(prevRecipes => [...prevRecipes, newRecipe])
  }

  function deleteRecipe(selectedId){
    const newRecipes = []
    recipes.forEach((recipe) => {
      if(recipe.id !== selectedId){
        newRecipes.push(recipe)
      }
    })
    setRecipes(newRecipes)
  }

  function toggleRecipeTitleInput(){
    setRecipes(oldRecipes => {
      const newArray = []
      oldRecipes.forEach((recipe) => {
        if(recipe.id === currentRecipe){
          newArray.push({...recipe, editName: !recipe.editName })
        } else {
          newArray.push(recipe)
        }
      })
      return newArray
    })
  }

  function submitTitleInput(event){
    if(event.code === "Enter"){
      toggleRecipeTitleInput()
    }
  }

  function renameRecipeTitle(event){
    const {value} = event.target
    setRecipes(oldRecipes => {
      const newArray = [] 
      oldRecipes.forEach((recipe) => {
        if(recipe.id === currentRecipe){
          newArray.push({...recipe, title: value })
        } else {
          newArray.push(recipe)
        }
      })
      return newArray
    })
  }

  function openCurrentRecipeSteps(theSteps){
    setCurrentRecipeSteps(theSteps)
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
    currentRecipeSteps = {currentRecipeSteps}
    toggleRecipeTitleInput = {toggleRecipeTitleInput}
    renameRecipeTitle = {renameRecipeTitle}
    submitTitleInput = {submitTitleInput}
    openCurrentRecipeSteps = {openCurrentRecipeSteps}
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
