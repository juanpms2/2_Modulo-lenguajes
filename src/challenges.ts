
// CHALLENGES

// 1. Aplanando arrays

// Dado un array multidimensional, construye una función inmutable que devuelva el mismo array aplanado, esto es, con un único nivel de profundidad.  Proporcionar un tipado adecuado a dicha función de aplanamiento.


const sample1: any = [1,[2,3],[[4],[5,6,[7,8,[9]]]]];
console.log(sample1.flat(4));

const sample2: (number | number[] | (number | (number | number[])[])[][])[] = [1,[2,3],[[4],[5,6,[7,8,[9]]]]];
console.log (sample2.toString().split(',').map((e) => parseInt(e)));



// 2. Acceso en profundidad

// Implementa un mecanismo deepGet para acceder en profundidad a objetos anidados, de modo que podamos recuperar una propiedad en cualquiera de sus niveles.

const myObject = { 
    a:1, 
    b:{ 
        c:null, 
        d:{ 
            e:3, 
            f:{ 
                g:"bingo",
            }
        }
    }
};

const deepGet = ( obj: object, ...args: Array<string> ) => {
    if(!args.length) return obj;   // si no hay argumentos devolvemos el objeto
    const [first, ...rest] = args; // hacemos destructuring de los argumentos

    if(typeof obj[first] === "object"){ // comprobamos si el argumento es un objeto

        if (rest.length <= 0) return obj[first]; // si no quedan más argumentos retornamos el objeto 
        return deepGet(obj[first], ...rest); // si quedan más argumentos volvemos a llamar a deepGet pasando el nuevo objeto y el resto de argumentos con spread operator

    } else {

        return obj[first]; // si no es un objeto retornamos el valor de la clave pasada como argumento

    }

}

console.log( deepGet( myObject, "x" ) );
console.log( deepGet( myObject, "a" ) );
console.log( deepGet( myObject, "b" ) );
console.log( deepGet( myObject, "b", "c" ) );
console.log( deepGet( myObject, "b", "d", "f", "g" ) );
console.log( deepGet( myObject ) );