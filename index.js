
// OBJETOS 
// funcion constructora


//function Prenda(nombre, talle, precio) {
//    this.nombre = nombre
//    this.talle = talle
//    this.precio = precio

//    this.informar = function () {
//        console.log(`${this.nombre} , talle ${this.talle} , precio ${this.precio}`)
//    }
//}

//const prenda1 = new Prenda('Campera Surgery', 'M', '$3300')
//const prenda2 = new Prenda('Remera Mistery', 'XL', '$2000')

//console.log(prenda1)
//console.log(prenda2) 

// THIS: hace referencia al objeto en el que la funcion esta siendo llamada

// cuando ejecuto un NEW ---> vacia el this: this = {}, y le asigno un nuevo valor al parametro 

// ARRAYS: objeto que almacena una lista de elementos

// const numeros = [1,2,3,4,5];

// let resultado1 = numeros[0] + numeros[2]; // 1+3=4;
// let resultado2 = numeros[1] + numeros[4]; // 2+5=7;
// let resultado3 = numeros[1] + numeros[1]; // 2+2=4;

let cart = [] // Array vacio ---> carrito 

class Prenda {
    constructor(id, title, price, stock, size) {
        this.id = id
        this.title = title
        this.price = price
        this.stock = stock
        this.talle = size
    }
    getId = function () {
        return this.id
    }
    getTotal = function (qty) {
        return this.price * qty
    }
    getCompra = function (qty) {
        return {
            product: this,
            quantity: qty,
            monto: this.getTotal(qty)
        } 
    }
    addToCart = function (qty) {
        cart.push(this.getCompra(qty))    // push: agrega al final del carrito 
    }
}

const prenda1 = new Prenda(1, 'Remera Eclipse', 3000, 30, 'XL')
const prenda2 = new Prenda(2, 'Campera Surgery', 6000, 20, 'M')
const prenda3 = new Prenda(3, 'Remera Mistery', 2500, 30, 'L')


prenda2.addToCart(2)
prenda1.addToCart(3)
prenda3.addToCart(5)

console.log(cart)

let resultadoBusqueda = cart.find( elemento => elemento.product.id === 1)

console.log(resultadoBusqueda)

let resultadoFilter = cart.filter( elemento => elemento.product.stock > 0)

console.log(resultadoFilter)

let resultadoMap = cart.map(elemento => {
    return elemento.product.id
})

let nuevoArrayPrendas = prendas.map(prenda => {
    return {
        prenda: prenda,
        qty: 30,
        total: 60000
    }
})

console.log(nuevoArrayPrendas)





