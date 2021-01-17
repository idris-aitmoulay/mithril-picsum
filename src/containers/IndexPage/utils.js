export const GetRandomWithProbability = () => {
  const RandomNumbers = [0, 0, 0, 0,0, 0, 0, 0, 1,1,1,1,2];
  const idx = Math.floor(Math.random() * RandomNumbers.length);
  return RandomNumbers[idx];
};
