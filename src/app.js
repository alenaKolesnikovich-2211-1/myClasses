/** 
 * Function to calculate the total score of students
 * @param {object} scores A list of students
 * @param {string} scores.name A name of the student
 * @param {number} scrores.score A student assessment
 * @returns {number} Total score of students
*/
function getScore(scores){
  return Object.values(scores).reduce((accumulator, value) => accumulator + value);
}

const scores = {
  Anna: 10,
  Olga: 5,
  Ivan: 3,
  Peter: 7,
  Mike: 13
};
const totalSum = getScore(scores); 
console.log('totalSum : ', totalSum)
