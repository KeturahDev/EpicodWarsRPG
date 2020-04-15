const storeState = (initialState) => {
  currentstate = initialState;
  return (functionStateChange) => {
    newState = functionStateChange(currentState);
    currentState = {...currentState};
    return newState;
  }
}

const initialGame = {
  player1: {
    name: "",
    attackStrength: 1,
    lifebar: 5,
  },
  boss: {
    name: "",
    attackStrength: 5,
    lifebar: 10,
  }
}

const masterGame = storeState(intialGame);

const changeSate = (prop) => {  //prop = property
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

