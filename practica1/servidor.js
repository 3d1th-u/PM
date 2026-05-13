
console.log("Hola mundoo JS desde el servidor")

/* */
let edad1= 11
const edad2= 42

console.log("Edada promedio")
console.log((edad1+ edad2)/2)

/* medir tiempo de un proceso*/
console.time('miproceso')

    for(let i=0; i < 100000; i++){}

console.timeEnd('miproceso')        

/* objetos tipo tabla*/
let usuarios= [
    {nombre: "edith", edad:20},
    {nombre: "chabela", edad:20}
]
console.table(usuarios)
