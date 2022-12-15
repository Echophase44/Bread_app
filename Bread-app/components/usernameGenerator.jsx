import React from "react";

function createUsername(){

  function randomNum(arr){
    return Math.floor(Math.random() * arr.length)
  }

  let firstnamePool = ["Wheat", "Bread", "Seed", "Flour", "Grain", "Pumpernickle", "Rye", "Sourdough", "Baguette", "Brioche", "Focaccia", "Ciabatta", "Multigrain", "Pita", "Breadstick", "Cornbread", "Challa", "WholeGrain", "SodaBread", "EzekielBread", "PotatoBread", "Matzo"]
  let lastnamePool = ["Warrior", "Life", "Destroyer", "Beast", "Buyer", "Nun", "Ninja", "Skill", "Member", "Generator", "Believer", "Worshiper", "Drawer", "Sketcher", "Breather", "Tryer", "Licker", "Smeller", "Puncher", "Juggler", "Hugger", "Cooker", "Drinker", "Washer", "Whisperer", "Zealot"]
  let firstname = firstnamePool[randomNum(firstnamePool)]
  let lastname = lastnamePool[randomNum(lastnamePool)]

  const Username = `${firstname}${lastname}`

  return(
  <h2 className="recipe-username">{Username}'s Recipes</h2>
  )
}

export default createUsername