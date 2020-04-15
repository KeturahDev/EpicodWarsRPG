  
// import { hydrate, feed, giveLight, giveBug, storeState, bestWater } from './../src/powerPlant.js';

// describe('Plant', () => {

//   test('should correctly adjust the hydration of the plant', () => {
//     // Arrange
//     const initialState = { soil: 0, light: 0, water: 0 };
//     const flower = storeState(initialState);

//     // Act
//     const newFlower = hydrate(1)(flower);

//     // Assert
//     expect(newFlower.water).toEqual(1);
//   });

//   test('should correctly adjust all properties of the plant', () => {
//     // Arrange
//     const initialState = { soil: 0, light: 0, water: 0 }
//     const flower = storeState(initialState)

//     // Act
//     const hydratedFlower = hydrate(1)(flower);
//     const fedFlower = feed(1)(hydratedFlower);
//     const litFlower = giveLight(1)(fedFlower);
//     const buggedOutFlower = giveBug(1)(litFlower);
//     const neglectedFlower = hydrate(-4)(buggedOutFlower);

//     // Assert
//     expect(neglectedFlower).toEqual({water: -3, soil: 1, light: 1, bug: 1});
//   });

//   test('should show current state being set equal to new state', () => {
//     // Arrange
//     const initialState = { soil: 0, light: 0, water: 0 };
//     const flower = storeState(initialState);

//     // Act
//     const happyFlower = flower(bestWater);
    
//     // Assert
//     expect(happyFlower.water).toEqual(3);
//   });
// })