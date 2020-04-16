import { storeState, playerGiveHit, bossGiveHit, changeState, goToClass, goToStandUp } from './../src/EpicodWarsRPG.js';
describe("masterGame", () => {

  test("should save initial game state", () => {
    //Arrange
    const initialGame =  { 
      playerName: "",
      playerAttackStrength: 1,
      playerLifebar: 5, 
      bossName: "",
      bossAttackStrength: 5,
      bossLifebar: 7,
    }
    
    const updateGame = storeState(initialGame); 
    const input = "James";
    const assignName = changeState("playerName")(input);
    const loadBoss = changeState("bossName")("Brooker T");


    //Act
    const nameAssigned = updateGame(assignName);
    const bossLoaded = updateGame(loadBoss); 
     
    //Assert
    expect(bossLoaded).toEqual({playerName: "James", playerAttackStrength: 1, playerLifebar: 5, bossName: "Brooker T", bossAttackStrength: 5, bossLifebar: 10});
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
      bossLifebar: 7,
    }
    const updateGame = storeState(initialGame); 
    const input = "James";
    const assignName = changeState("playerName")(input);
    const loadBoss = changeState("bossName")("Brooker T");
    const nameAssigned = updateGame(assignName);
    const bossLoaded = updateGame(loadBoss); 
    
    //Act
    const goToClassLesson = changeState("playerAttackStrength")(3);
    const playerWentToClass = updateGame(goToClassLesson);

    //Assert
    expect(playerWentToClass.playerAttackStrength).toEqual(4);
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
      bossLifebar: 7,
    }
   
    const updateGame = storeState(initialGame); 
    const input = "James";
    const assignName = changeState("playerName")(input);
    const loadBoss = changeState("bossName")("Brooker T");
    const nameAssigned = updateGame(assignName);
    const bossLoaded = updateGame(loadBoss); 
    
    // const classLesson = changeState("playerAttackStrength")(3);
    // const standUp = changeState("playerAttackStrength")(1);
    const goToClassLesson = changeState("playerAttackStrength")(3);
    const goToStandUp = changeState("playerAttackStrength")(1);
    const playerWentToClass = updateGame(goToClassLesson);
    console.log("after class:" , playerWentToClass.playerAttackStrength);
    const playerWentToStandUp = updateGame(goToStandUp);
    console.log("after standup:" , playerWentToStandUp.playerAttackStrength);
    //player attaackStrenght = 5
    // boss lifebar = 7
    // 5-7
    
    //Act
    const battleBegins = updateGame(playerGiveHit);
    console.log("after giving hit PLAYERATTACK:" , playerWentToStandUp.playerAttackStrength);
    console.log("after giving hit LIFEBAR:" , playerWentToStandUp.bossLifebar);

    //Assert
    expect(battleBegins.bossLifebar).toEqual(2);
  });
});



