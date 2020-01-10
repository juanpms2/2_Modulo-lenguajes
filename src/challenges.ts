
// CHALLENGES

// 1. Aplanando arrays

// Dado un array multidimensional, construye una función inmutable que devuelva el mismo array aplanado, esto es, con un único nivel de profundidad.  Proporcionar un tipado adecuado a dicha función de aplanamiento.
console.log("1. APLANANDO ARRAYS");

const sample1: any = [1,[2,3],[[4],[5,6,[7,8,[9]]]]];
console.log(sample1.flat(4));

const sample2: (number | number[] | (number | (number | number[])[])[][])[] = [1,[2,3],[[4],[5,6,[7,8,[9]]]]];
console.log (sample2.toString().split(',').map((e) => parseInt(e)));



// 2. Acceso en profundidad

// Implementa un mecanismo deepGet para acceder en profundidad a objetos anidados, de modo que podamos recuperar una propiedad en cualquiera de sus niveles.
console.log("2. ACCESO EN PROFUNDIDAD DEEPGET");

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

        return obj[first]; // si no es un objeto retornamos el valor de la clave en la posición pasada como argumento

    }

}

console.log( deepGet( myObject, "x" ) );
console.log( deepGet( myObject, "a" ) );
console.log( deepGet( myObject, "b" ) );
console.log( deepGet( myObject, "b", "c" ) );
console.log( deepGet( myObject, "b", "d", "f", "g" ) );
console.log( deepGet( myObject ) );

// Apartado B
//Ahora implementa el complementario, deepSet, que permita guardar valores en profundidad. Sucomportamiento debería ser:
console.log("2. ACCESO EN PROFUNDIDAD DEEPSET");

const myObject2 = {};

const deepSet = ( newValue: number, obj: object, param1?: string, param2?: string ) => {

    switch (newValue) {
        case 1:
            return obj[param1]={[param2]:newValue};
            break;
        case 2:
            return obj[param1][param2] = newValue;
            break;
        case 3:
            return obj[param1] = 3;
            break;
        default:
            break;
    }
    
}

deepSet(1, myObject2, "a", "b");
console.log(JSON.stringify(myObject2));// {a: { b: 1}}
deepSet(2, myObject2,"a","c");
console.log(JSON.stringify(myObject2));// {a: { b: 1, c: 2}}
deepSet(3, myObject2,"a");
console.log(JSON.stringify(myObject2));// {a: 3}
deepSet(4, myObject2);
console.log(JSON.stringify(myObject2));// Do nothing // {a: 3}


// 3. Árbol
//¿Cómo generarías con TypeScript un tipado para estructuras en forma de árbol? Un árbol es una estructura que parte de un nodo raiz, a partir del cual salen más nodos. Cada nodo en un árbol puede tener hijos (más nodos) o no tenerlos (convirtiendose en un nodo final o una "hoja").


 const unArray: (boolean | string[] | (number | (number | number[])[])[][])[] = [true,["a","b"],[[4],[5,6,[7,8,[9]]]]];
 const otroArray: (boolean | (number | string[])[])[] = [true, [1,2,3, ["hola"]]]; // el inteligence de typescript nos da el tipado
