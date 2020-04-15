export const storeState = (initialState) => {
  console.log("store state");
  const currentState = initialState;
  console.log("current state:", initialState);
  return (functionStateChange) => {
    console.log("state change function");
    newState = functionStateChange(currentState);
    currentState = {...currentState};
    console.log("change state");
    return newState;
  }
}

const initialGame =  { 
  playerName: "",
  playerAttackStrength: 1,
  playerLifebar: 5, 
  bossName: "",
  bossAttackStrength: 5,
  bossLifebar: 10,
}

 const masterGame = storeState(initialGame);

 export const changeState = (prop) => {  //prop = property
  return (value) => {           // value = value of property
    return (state) => ({        // current state of object
      ...state,                 // create copy of state
      [prop] : (state[prop] || 0) + value   //alter and return copy of state to adhere to change in property's value
    })
  }
}



// brainstorm:

// // stretch goal -> students & teacher squads have training grounds
// // squads fight bosses
// // attack strength starts at 2-3
// // fighting mode/ training - squad chooses when to go to battle, after battles, auto go back to prepping

// mainObjects
// bosses: {
//   name: ("brooker T" or "travis scott") //final boss - Micheal
//   strength: (static)
//   lifebar:
// }


// squads: {
//   players: {
//     name: ""
//     -attackStrength : (number increments)  
//     -langWeapon: "C#"
//     -lifebar (10/10): (increments/decrements)
//     // -level: 
//   }
// }

// objects that effect main objects state:

// standUp (attackStrength)(value) +1
// classLesson (attackStrength)(value) + 2  -- ex: babel(attackStrength)(1), webpack(attakcStrength)(2)
// Stack (lifebar)(value) + 3
// assign weapons: (langWeapon)("React")

