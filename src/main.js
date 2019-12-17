// EJERCICIO 1 - ARRAY OPERATION

const myArray = [ 1, 2, 3, 4, 5 ];

// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
 
const head = ( [...array] ) => { 
    const [first, ] = array;
    return first; 
}
console.log( head( myArray ) );


// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ( [...array] ) => {
    const [ , ...rest ] = array;
    rest.forEach(element => {
        console.log( element );
    });
}
tail( myArray );


// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = ( [...array] ) => {
    const x = array.length -1;
    console.log(array.slice(0,x).toString());
}
init(myArray);


// Implementa una función last (inmutable), tal que, dado un array como entradadevuelva el último elemento.

const last = ( [...array] ) => {
    const x = array.length -1;
    console.log(array.slice(x).toString());
}
last(myArray);



// EJERCICIO 2 - CONCAT

