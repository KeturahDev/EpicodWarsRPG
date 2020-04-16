export const storeState = (initialState) => {
  let currentState = initialState;
  return (functionStateChange) => {
    const newState = functionStateChange(currentState);
    currentState = {...newState};
    return newState;
  }
}

export const initialGameState = {
  startScreen: true,
  fightMode: false,
  trainingMode: true,
  bossWon: false,
  playerWon: false
}

export const initialPlayer = {
  name: "",
  attackStrength: 1,
  confidence: false,
  lifebar: 10,
  // stack: ""
}

export const initialBoss = {
  name: "",
  attackStrength: 3,
  lifebar: 10,
}

// ------------ initial creation ------------ //

export const updateGameState = storeState(initialGameState);
export const updatePlayer = storeState(initialPlayer);
export const updateBoss = storeState(initialBoss);

// ------------ Change State Function Factories ------------ //
export const changeState = (prop) => {  
  return (value) => {        
    if(isNaN(value)) {
      return (state) => ({    
        ...state,          
        [prop] : value
      })
    } else {
      return (state) => ({
        ...state,
        [prop] : (state[prop] || 0) + value 
      })
    }
  }
}

//change state function that 



// ----------------- S T A R T I N G    C H A N G E - S T A T E S ----------------------
// FRONT END EX: const input = "James";
//~ player
const input = "James";
const assignName = changeState("playerName")(input);
//~ game
const leaveStartScreen = changeState("StartScreen")(false)
const enterTrainigMode = changeState("trainingMode")(true)
//~ boss
const loadBoss = changeState("bossName")("Brooker T");

// PRESS START ~~~
const LeftStartScreen = updateGameState(leaveStartScreen);
const nameAssigned = updatePlayer(assignName);
const bossLoaded = updateBoss(loadBoss);

    
// ----------------- T R A I N I N G  C H A N G E - S T A T E S ----------------------
// S T R E T C H 
// const playerLBMax = player.lifebar (callWhenEnterFightMode)
// const regenerateLifeBar = changeState(playerLifebar)(10); //Add 10 points to playerLifeBar after win

// ~player
export const goToClass = changeState("playerAttackStrength")(3);
export const goToStandUp = changeState("playerAttackStrength")(1);

const playerWentToClass = updatePlayer(goToClass);
const playerWentToStandUp = updatePlayer(goToStandUp);
 
// ----------------- F I G H T - M O D E  C H A N G E - S T A T E S ----------------------
// ~ game
const leaveTraining = changeState("trainingMode")(false);
const enterFightingMode = changeState("fightingMode")(true);
const checkForBattleEnd = changeState()
// ON LOAD
const leftTrainState = updateGameState(leaveTraining)
const enterBattle = updateGameState(enterFightingMode)
const fightingPlayer = playerWentToClass; //update most recent version of player to be equal to this keyword for sake of changeState functionality below

// ~ player
export const playerHit = changeState("lifebar")(-(fightingPlayer.playerAttackStrength)); 
// ~ boss
export const bossHit = changeState("lifebar")(-(bossLoaded.bossAttackStrength)); 

// PRESS ATTACK BUTTON ... TRIGGER v
const playerAttacked = updateBoss(playerHit);
//  boss auto-hits
const bossAttacked = updatePlayer(bossHit);


// //fight modes
// -attack hits lower healthbar (player => boss, boss => player)
// -boss loses: 1. rassignBoss
//              2. STRETCH: student: add stack ... increase lifebar max (onlyWithBattleVictory)
//              3. enterTrainingRoom
// -student loses: 
//              1. Restart Game (state after uploading name)

// -Enter trainingMode: fully replenish lifebar
// //training modes (buttons, each one triggers on e of these stateAlters)
// -standUp increase playerAttackStrength by1
// -classLesson increases playerAttackStrength by2


//--> previous format
// const initialGame =  { 
//   playerName: "",
//   playerAttackStrength: 1,
//   playerLifebar: 5, 
//   bossName: "",
//   bossAttackStrength: 5,
//   bossLifebar: 7,
// }


// brainstorm:

// stretchgoals:

// -confidence bool

// fighting mode/ training - squad chooses when to go to battle, after battles, auto go back to prepping


// squads: {
//     -langWeapon: "C#"
//     // -level: 
//   }
// }
// Stack (lifebar)(value) + 3


// assign weapons: (langWeapon)("React")

