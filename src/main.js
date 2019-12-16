// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const myArray = [1,2,3,4,5];
 
const head = (array) => { 
    const [first, ...rest] = array; 
    return first; 
}
console.log(head(myArray));


