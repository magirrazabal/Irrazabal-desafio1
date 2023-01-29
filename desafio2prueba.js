const fs = require ('fs').promises;
//const ruta = ;



//createFile();
class ProductManager {
    constructor() {
        this.path = path
    }

 createFile = async() =>{ 
        await fs.writeFile(this.path, '[]')
     let contenido = await fs.readFile(this.path, 'utf-8');
     console.log(contenido);
 }
    static getNewId(lastProduct) {
        if (!lastProduct) {
            return 1;
        } else {
            return lastProduct.id + 1;
        }
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        let codes = this.products.map (p => p.code)
        if (codes.includes(code)) {
            console.log('Este producto ya existe');
            return;
        }
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error('Complete todos los campos');
            return
        }
        let lastProduct = this.products[this.products.length - 1]
        let newId = ProductManager.getNewId(lastProduct);
        this.products.push({ title: title, description: description, price: price, thumbnail: thumbnail, code: code, stock: stock, id:newId });
    }
    getProducts() {
        return this.products;
    }
    getProductById(id) {
        let product = this.products.find(p => p.id === id);
        if (product) {
            return product;
        }
        console.error('Not found');
    }
    
}
/*
//testing 

const productManager = new ProductManager();
let products = productManager.getProducts();
console.log(products);
productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25);
products = productManager.getProducts();
console.log(products);

productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25);

productManager.addProduct('producto prueba2', 'Este es un producto prueba', 200, 'sin imagen', 'def456', 25);

productManager.addProduct('producto prueba3', 'Este es un producto prueba', 200, 'sin imagen', 'hij678', 25)

console.log(productManager.getProductById(1));
console.log(productManager.getProductById(5));
productManager.getProducts();
console.log(products);

*/