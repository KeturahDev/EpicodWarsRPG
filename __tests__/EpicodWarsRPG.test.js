import { storeState, changeState } from './../src/EpicodWarsRPG.js';

describe("masterGame", () => {

  test("should save initial game state", () => {
    //Arrange
    // const initialGame =  { player: { 
    //   name: "",
    //   attackStrength: 1,
    //   lifebar: 5,
    // },  
    //  boss: {
    //   name: "",
    //   attackStrength: 5,
    //   lifebar: 10,
    //   }
    // }
    const initialGame =  { 
      playerName: "",
      playerAttackStrength: 1,
      playerLifebar: 5, 
      bossName: "",
      bossAttackStrength: 5,
      bossLifebar: 10,
    }
    
    const startGame = storeState(initialGame); //only do once? - (runs player/boss objects through storeState)
    const input = "James";
    const assignName = changeState(playerName)(input);
    const loadBoss = changeState(bossName)("Brooker T");
  
    //Act
    const startGame2 = startGame(assignName); //changing state
    const startGame3 = loadBoss(startGame2); //changing state
    
    //Assert
    expect(startGame3).toEqual({playerName: "James", playerAttackStrength: 1, playerLifebar: 5, bossName: "Brooker T", bossAttackStrength: 5, bossLifebar: 10});
  })
})





