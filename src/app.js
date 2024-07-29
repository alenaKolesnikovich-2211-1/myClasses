function getScore(scores){

  return Object.values(scores).reduce((accumulator, value) => accumulator + value);
}

const scores = {
  Anna: 10,
  Olga: 5,
  Ivan: 3
};
const totalSum = getScore(scores); 
console.log('totalSum : ', totalSum)
