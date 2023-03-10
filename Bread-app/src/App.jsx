import { useState } from 'react'
import React from 'react'
import { nanoid } from "nanoid"
import LoginApp from "../components/LoginApp"
import RecipeApp from "../components/RecipePage"
import createUsername from "../components/usernameGenerator"




function App() {
  const [newUser, setNewUser] = useState(() => 
  JSON.parse(localStorage.getItem("User")) || {
    email:"",
    password: "",
    confirmPassword: "",
    username: "",
    passwordError: false,
    isCreated: false,
  })

  function generateUsername(){
    let newUsername = createUsername()
    setNewUser(prevUser => ({
      ...prevUser,
      username: newUsername
    }))
  }

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
    if(newUser.password !== newUser.confirmPassword){
      setNewUser(prevUser => {
        return {
          ...prevUser,
          passwordError: true
        }
      })
    } else if (newUser.password !== "" && newUser.password === newUser.confirmPassword){
      setNewUser(prevUser => {
        return {
          ...prevUser,
          isCreated: true,
          passwordError: false
        }
      })
    }
  }

  // Recipe Page

  const [recipes, setRecipes] = useState([])
  const [currentRecipeId, setCurrentRecipeId] = useState(recipes[0] && recipes[0].id || "")
  const [selectedRecipe, setSelectedRecipe] = useState({steps: [{title: "", body: "Create or select a recipe to get started"}]})
  const [settingsPanel, setSettingsPanel] = useState(false)
  

  function createNewRecipe(){
    const newRecipe = {
      id: nanoid(),
      title: "",
       steps: [
        {title: "", body: "Whisk the starter, water, and olive oil in a large bowl."}, 
        {title: "", body: "Now the dough needs to rise"},
      ],
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
        if(recipe.id === currentRecipeId){
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
        if(recipe.id === currentRecipeId){
          newArray.push({...recipe, title: value })
        } else {
          newArray.push(recipe)
        }
      })
      return newArray
    })
  }

  //########## Instructions Panel ###########

  function addNewStep(){
    const updatedSelection = recipes.find(newSelection => newSelection.id === currentRecipeId)
    const newStep = [...updatedSelection.steps, {title: "Test Title", body: "Test Body"}]

    setSelectedRecipe(prevRecipeSteps => ({
      ...prevRecipeSteps, steps: newStep
    }))

    let newRecipes = []
    setRecipes(oldRecipes => {
      
      oldRecipes.forEach((recipe) => {
        if(recipe.id === currentRecipeId){
          newRecipes.push({...recipe, steps: newStep})
        } else {
          newRecipes.push(recipe)
        }
      })
      return newRecipes
    })
  }

  // ########## Settings Panel ###########

  function settingsPanelToggle() {
    setSettingsPanel(!settingsPanel)
  }

  function clearCurrentRecipe(event) {
    event.stopPropagation()
    setSelectedRecipe({steps: [{title: "", body: "Create or select a recipe to get started"}]})
    setCurrentRecipeId("")
  }
  
 return (
  <>
  {
    newUser.isCreated ?
    <RecipeApp
      user = {newUser}
      recipes = {recipes}
      generateUsername = {generateUsername}
      createNewRecipe = {createNewRecipe}
      deleteRecipe = {deleteRecipe}
      currentRecipeId = {currentRecipeId}
      setCurrentRecipeId = {setCurrentRecipeId}
      selectedRecipe = {selectedRecipe}
      setSelectedRecipe = {setSelectedRecipe}
      toggleRecipeTitleInput = {toggleRecipeTitleInput}
      renameRecipeTitle = {renameRecipeTitle}
      submitTitleInput = {submitTitleInput}
      settingsPanel = {settingsPanel}
      settingsPanelToggle = {settingsPanelToggle}
      clearCurrentRecipe = {clearCurrentRecipe}
      addNewStep = {addNewStep}
    /> :
    <LoginApp 
      passwordError = {newUser.passwordError}
      userLogin = {setNewUser}
      handleChange = {handleChange}
      createUser = {createUser}
    /> 
  }
  </>
 )
}

export default App
