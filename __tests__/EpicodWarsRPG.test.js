import { storeState, initialBoss, initialGameState, initialPlayer, playerGiveHit, bossGiveHit, changeState, goToClass, goToStandUp } from './../src/EpicodWarsRPG.js';
describe("masterGame", () => {

  test("should save initial player state", () => {

    //Arrange

    const updatePlayer = storeState(initialPlayer); 
    const input = "James";
    const assignName = changeState("playerName")(input);

    //Act
    const nameAssigned = updatePlayer(assignName);
     
    //Assert
    expect(initialPlayer).toEqual({name: "James", attackStrength: 1, confidence: false, lifebar: 10, stack: ""});
  });
});

// describe("TrainingMode", () => {

//   test("should increment playerAttackStrength by 3", () => {
//     // Arange
//     const initialGame =  { 
//       playerName: "",
//       playerAttackStrength: 1,
//       playerLifebar: 5, 
//       bossName: "",
//       bossAttackStrength: 5,
//       bossLifebar: 7,
//     }
//     const updateGame = storeState(initialGame); 
//     const input = "James";
//     const assignName = changeState("playerName")(input);
//     const loadBoss = changeState("bossName")("Brooker T");
//     const nameAssigned = updateGame(assignName);
//     const bossLoaded = updateGame(loadBoss); 
    
//     //Act
//     const goToClassLesson = changeState("playerAttackStrength")(3);
//     const playerWentToClass = updateGame(goToClassLesson);

//     //Assert
//     expect(playerWentToClass.playerAttackStrength).toEqual(4);
//   });
// });

// describe("FightingMode", () => {
//   test("should decrement bossLifebar by 5", () => {
//     // Arrange
//     const initialGame =  { 
//       playerName: "",
//       playerAttackStrength: 1,
//       playerLifebar: 5, 
//       bossName: "",
//       bossAttackStrength: 5,
//       bossLifebar: 7,
//     }
   
//     const updateGame = storeState(initialGame); 
//     const input = "James";
//     const assignName = changeState("playerName")(input);
//     const loadBoss = changeState("bossName")("Brooker T");
//     const nameAssigned = updateGame(assignName);
//     const bossLoaded = updateGame(loadBoss); 
    
//     const goToClassLesson = changeState("playerAttackStrength")(3);
//     const goToStandUp = changeState("playerAttackStrength")(1);
//     const playerWentToClass = updateGame(goToClassLesson);
//     const playerWentToStandUp = updateGame(goToStandUp);
    
//     //Act
//     const battleBegins = updateGame(playerGiveHit);

//     //Assert
//     expect(battleBegins.bossLifebar).toEqual(2);
//   });
//   test("should decrement bossLifebar by 5", () => {
//     // Arrange
//     const initialGame =  { 
//       playerName: "",
//       playerAttackStrength: 1,
//       playerLifebar: 5, 
//       bossName: "",
//       bossAttackStrength: 5,
//       bossLifebar: 7,
//     }
   
//     const updateGame = storeState(initialGame); 
//     const input = "James";
//     const assignName = changeState("playerName")(input);
//     const loadBoss = changeState("bossName")("Brooker T");
//     const nameAssigned = updateGame(assignName);
//     const bossLoaded = updateGame(loadBoss); 
   
//     //Act
//     const battleBegins = updateGame(bossGiveHit);

//     //Assert
//     expect(battleBegins.playerLifebar).toEqual(0);
//   });
// });