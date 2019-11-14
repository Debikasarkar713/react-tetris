export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  );

//creat a multidimensional array that represents the grid
// create array from something that something is another array
// supply an inline function that means for each row we create a new array.
//fill it with another array set to 0
