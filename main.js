const levenstheinDistance = require('./levenshtein-distance.js');

const s1 = 'abab';
const s2 = 'caba';

const result = levenstheinDistance(s1, s2);
console.log('Result = ', result);
console.log(`Distance between ${s1} and ${s2} is ${result.distance}`);
console.log('Resulting matrix = ');
printMatrix(result.matrix);



function printMatrix(matrix) {
    matrix.forEach(row => {
        let s = '';
        row.forEach(col => {
            s += '\t' + col;
        })
        console.log(s);
    });
}