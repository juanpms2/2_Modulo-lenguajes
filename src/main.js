// EJERCICIO 1 - ARRAY OPERATION

const myArray = [ 1, 2, 3, 4, 5 ];
const myArray2 = [ "hello", "world" ];

// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
 
const head = ( [ first ] ) => first;
console.log( head( myArray ) );


// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ( [ , ...rest ] ) => rest.toString();
console.log( tail( myArray ) );


// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = ( [...array] ) => {
    const x = array.length - 1;
    return array.slice( 0, x ).join( '-' );
}
console.log( init(myArray) );


// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = ( [...array] ) => {
    const x = array.length - 1;
    return array.slice( x ).toString();
}
console.log( last( myArray ) );



// EJERCICIO 2 - CONCAT

// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = ( array1, array2 ) =>  array1.concat( array2 ).join(' ');
console.log( concat( myArray, myArray2 ) );

//Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

const concat2 = ( ...args ) => [].concat(...args).join(' ');
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




// EJERCICIO 4 - READ BOOKS

// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
// Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false.

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

const isBookRead = ( books, titulo ) => {

    // const book = books.find( title => title.title === titulo ) || false;

    // if ( book.title === titulo ) {  
    //         if (book.isRead === true) {
    //             return `El libro ${ titulo } ha sido leido por eso devuelvo true `;
    //         } else {
    //             return `El libro ${ titulo } no ha sido leido por eso devuelvo false`;
    //         }
        
    // } else {
        
    //     return `El libro ${ titulo } no existe en nuestra base de datos`;
    // }
    const book = books.find(book => book.title === titulo);
    if(book) {
        return book.isRead ? `El libro ${titulo} ha sido leido por eso devuelvo true` : `El libro ${titulo} no ha sido leido por eso devuelvo false`;
    } else {
        
        return `El libro ${ titulo } no existe en nuestra base de datos`;
    }
}; 


console.log(isBookRead(books, "Canción de hielo y fuego"));

