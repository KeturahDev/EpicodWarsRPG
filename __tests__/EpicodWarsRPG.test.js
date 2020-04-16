import { storeState, playerGiveHit, changeState, classLesson, standUp } from './../src/EpicodWarsRPG.js';
describe("masterGame", () => {

  test("should save initial game state", () => {
    //Arrange
    const initialGame =  { 
      playerName: "",
      playerAttackStrength: 1,
      playerLifebar: 5, 
      bossName: "",
      bossAttackStrength: 5,
      bossLifebar: 10,
    }
    
    const startGame = storeState(initialGame); 
    const input = "James";
    const assignName = changeState("playerName")(input);
    const loadBoss = changeState("bossName")("Brooker T");
  
    //Act
    const startGame2 = startGame(assignName); //dealing with store state function- expects the changeState func to be passed in the param of store state's inner function
    
    const startGame3 = loadBoss(startGame2);  // state change function entering its final param: a stateObject. This is how we doooo it from now on 
     
    //Assert
    expect(startGame3).toEqual({playerName: "James", playerAttackStrength: 1, playerLifebar: 5, bossName: "Brooker T", bossAttackStrength: 5, bossLifebar: 10});
  });
});

describe("TrainingMode", () => {

  test("should increment playerAttackStrength by 3", () => {
    // Arange
    const initialGame =  { 
      playerName: "",
      playerAttackStrength: 1,
      playerLifebar: 5, 
      bossName: "",
      bossAttackStrength: 5,
      bossLifebar: 10,
    }
   
    const startGame = storeState(initialGame); 
    const input = "James";
    const assignName = changeState("playerName")(input);
    const loadBoss = changeState("bossName")("Brooker T");

    const startGame2 = startGame(assignName); 
    const startGame3 = loadBoss(startGame2); 
    
    //Act
    const classLesson = changeState("playerAttackStrength")(3);
    const updatedGame = classLesson(startGame3);

    //Assert
    expect(updatedGame.playerAttackStrength).toEqual(4);
  });
});

describe("FightingMode", () => {

  test("should decrement bossLifebar by 5", () => {
    // Arrange
    const initialGame =  { 
      playerName: "",
      playerAttackStrength: 1,
      playerLifebar: 5, 
      bossName: "",
      bossAttackStrength: 5,
      bossLifebar: 10,
    }
   
    const startGame = storeState(initialGame); 
    const input = "James";
    const assignName = changeState("playerName")(input);
    const loadBoss = changeState("bossName")("Brooker T");

    const startGame2 = startGame(assignName); 
    const startGame3 = loadBoss(startGame2); 
    
    // const classLesson = changeState("playerAttackStrength")(3);
    // const standUp = changeState("playerAttackStrength")(1);
    const playerStudies = classLesson(startGame3);
    const enteringFightState = standUp(playerStudies);
    
    //Act
    // const playerGiveHit = changeState("bossLifebar")(-enteringFightState.playerAttackStrength);
    const teacherBattle = playerGiveHit(enteringFightState);

    //Assert
    expect(teacherBattle.bossLifebar).toEqual(2);
  });
});



