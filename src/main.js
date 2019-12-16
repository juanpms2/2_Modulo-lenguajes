// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const myArray = [ 1, 2, 3, 4, 5 ];
 
const head = ( array ) => { 
    const [ first, ] = array; 
    return first; 
}
console.log( head( myArray ) );


// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ( array ) => {
    const [ , ...rest ] = array;
    rest.forEach(element => {
        console.log( element );
    });
}
tail( myArray );