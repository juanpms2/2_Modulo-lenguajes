// EJERCICIO 1 - ARRAY OPERATION

const myArray = [ 1, 2, 3, 4, 5 ];
const myArray2 = [ "hello", "world" ];

// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
 
const head = ( [...array] ) => { 
    const [first, ] = array;
    return first; 
}
console.log( head( myArray ) );


// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ( [...array] ) => {
    const [ , ...rest ] = array;
    return rest.toString();
}
console.log( tail( myArray ) );


// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = ( [...array] ) => {
    const x = array.length - 1;
    return array.slice( 0, x ).join( '-' );
}
console.log( init(myArray) );


// Implementa una función last (inmutable), tal que, dado un array como entradadevuelva el último elemento.

const last = ( [...array] ) => {
    const x = array.length - 1;
    return array.slice( x ).toString();
}
console.log( last( myArray ) );



// EJERCICIO 2 - CONCAT

// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = ( [...array1], [...array2] ) => {
    const merge = array1.concat( array2 );
    return merge.join(' ');
}
console.log( concat( myArray, myArray2 ) );

//Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

const concat2 = ( ...args ) => {
    const merge = [].concat(...args);
    return merge.join(' ');
}
console.log( concat2( myArray, myArray2, [0,0,0], [1,1,1] ) );



// EJERCICIO 3 - CLONE MERGE

// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source.

const obj = { name: "John", age: 32 };

const clone = ( source ) => ( { ...source } );
console.log( clone(obj) );

// dos maneras más
const clone2 = ( source, ...args ) =>  Object.assign( {}, ...args, source );
const clone3 = ( source ) => JSON.parse( JSON.stringify( source ) ); //Deep clone
console.log( clone2(obj) );
console.log( clone3(obj) );


// Implementa una función merge que, dados dos objetos de entrada source y target,devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

const source = { name:"Maria", surname:"Ibañez", country:"SPA" };
const target = { name:"Luisa", age:31, married:true };

const merge = ( source, target ) => ( { ...target, ...source } );
console.log( merge( source,target ) );

// otra manera más
const merge2 = ( source, target ) => clone( source, target );
console.log( merge2( source,target ) );