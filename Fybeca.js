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




