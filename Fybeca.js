//PAGINA FYBECA.COM

// Variables 

let productName = "Dolo - Neurobion Amp.";
let productPrice = 20.07;
let stock = 15;

// Condicional ternario

let stockAvailable = 0;
let availabilityMessage = stockAvailable > 0 ? "Producto disponible" : "Producto agotado";
console.log(availabilityMessage);

// Función declarada 

function checkOffer(price) {
    return price < 10; 
}

const productPriceCheck = 9.50;
const offer = checkOffer(productPriceCheck);
console.log(`¿El producto está en oferta? ${offer ? 'Sí' : 'No'}`);


// Función expresada

const getProductsOnSale = function (products) {
    const saleThreshold = 10; 
    return products
        .filter(product => product.price < saleThreshold) 
        .map(product => product.name);
};


// Función flecha 

const calculateTotalPrice = (price, quantity) => price * quantity;

const price = 15.90; 
const quantity = 2; 
const total = calculateTotalPrice(price, quantity);
console.log(`El precio total es: $${total}`);

// REST


const medications = ["Ibuprofeno", "Paracetamol", "Aspirina", "Amoxicilina", "Naproxeno"];

const [firstMed, secondMed, ...otherMedications] = medications;


console.log(`Primer medicamento: ${firstMed}`);

console.log(`Segundo medicamento: ${secondMed}`);

console.log("Otros medicamentos disponibles:", otherMedications);

// SPREAD

const medications2 = ["Ibuprofeno", "Paracetamol", "Aspirina"];

const vitamins = ["Vitamina C", "Vitamina D", "Multivitaminas"];

const completeCatalog = [...medications2, ...vitamins];

console.log("Catálogo completo de productos:", completeCatalog);



// Objeto


let product = {
    name: "Dolo Neurobion DC",
    price: 20.07,
    stock: 50,
    available: true,
    category: "Medicamento",
    details: {
        description: "Analgésico y antiinflamatorio para dolor muscular.",
        dosage: "2 tabletas al día"
    }
};

console.log(`Producto: ${product.name}`);
console.log(`Precio: $${product.price}`);
console.log(`Descripción: ${product.details.description}`);


// Array de productos de Fybeca
const fybecaProducts = [
    {
        name: "Zaldiar Comprimidos",
        price: 8.60,
        quantity: 20,
        category: "Analgésicos"
    },
    {
        name: "Dolo - Neurobion Retard",
        price: 24.60,
        quantity: 20,
        category: "Analgésicos"
    },
    {
        name: "Analgán Rapid Caps",
        price: 9.50,
        quantity: 50,
        category: "Analgésicos"
    }
];

// ES6
// DESESTRUCTURACIÓN A NIVEL DE ARREGLOS
const [product1, product2, product3] = fybecaProducts; 

console.log("Producto 1:", product1.name, "- Precio:", product1.price);
console.log("Producto 2:", product2.name, "- Precio:", product2.price);
console.log("Producto 3:", product3.name, "- Precio:", product3.price);

console.log("Total de productos:", fybecaProducts.length); 


//METODOS 
// Metodo push
fybecaProducts.push({
    name: "Nuevo Producto",
    price: 12.00,
    quantity: 15,
    category: "Suplementos"
}); 

// Metodo find
let foundProduct = fybecaProducts.find((p) => (p.name === "Dolo - Neurobion Retard"));
console.log("Producto encontrado:", foundProduct); 

// Metodo filter
let analgesicProducts = fybecaProducts.filter((p) => (p.category === "Analgésicos")); 
console.log("Productos analgésicos:", analgesicProducts);



// Objetos de productos de Fybeca

const product1Obj = {
    name: "Zaldiar Comprimidos",
    price: 8.60,
    quantity: 20,
    category: "Analgésicos"
};

const product2Obj = {
    name: "Dolo - Neurobion Retard",
    price: 24.60,
    quantity: 20,
    category: "Analgésicos"
};

const fybecaProducts2 = [product1Obj, product2Obj];

// ES6
//DESESTRUCTURACIÓN DE OBJETOS

const { name: productName1, price: productPrice1 } = product1Obj; 
const { name: productName2, price: productPrice2 } = product2Obj; 

console.log("Producto 1:", productName1, "- Precio:", productPrice1);
console.log("Producto 2:", productName2, "- Precio:", productPrice2);

// Cálculo total
const calculateTotal = (products) => {
    return products.reduce((total, product) => total + product.price, 0);
};

// Metodo para encontrar un producto
const findProduct = (name) => {
    return fybecaProducts.find((product) => product.name === name);
};

let searchedProduct = findProduct("Dolo - Neurobion Retard");
console.log("Producto encontrado:", searchedProduct); 






