const fs = require ('fs');


class ProductManager {
    constructor(path) {
        this.path = path;
        if (fs.existsSync(path) == false) {
            fs.writeFileSync(path, JSON.stringify([]));
        };
    }
    static getNewId(lastProduct) {
        if (!lastProduct) {
            return 1;
        } else {
            return lastProduct.id + 1;
        }
    }
    async getProducts() {
        let products =  await fs.promises.readFile(this.path, 'utf-8');
        return JSON.parse(products);
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        let products = this.getProducts();
        let codes = products.map(p => p.code)

        if (codes.includes(code)) {
            console.log('Este producto ya existe');
            return;
        }
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error('Complete todos los campos');
            return
        }
        let lastProduct = products[products.length - 1]
        let newId = ProductManager.getNewId(lastProduct);
        products.push({ title: title, description: description, price: price, thumbnail: thumbnail, code: code, stock: stock, id:newId });
        fs.writeFileSync(this.path, JSON.stringify(products));
    }

    async getProductById(id) {
        let products =  await this.getProducts();
        let product = products.find(p => p.id === id);
        if (product) {
            return product;
        }
        console.error('No existe el producto');
    } 
    async updateProduct(id, updatedProduct) {
        let products = await this.getProducts();
        let productIndex = products.findIndex(p => p.id == id);
        products[productIndex] = {...products[productIndex], ...updatedProduct};
        await fs.promises.writeFile(this.path, JSON.stringify(products));
    }  
}
//testing 

(async function main() {
    try {
        const productManager = new ProductManager('./productos.txt'); 
        productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25);
        productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', '2222', 25);
        let resultProducts = await productManager.getProducts();
        console.log(resultProducts);
        console.log( await productManager.getProductById(1));

        productManager.getProductById(5);
        await productManager.updateProduct(2, {price:50});
        console.log( await productManager.getProductById(2));


    } catch (err) {
        console.error(err);
    }
})();

/*productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25);
products = productManager.getProducts();
console.log(products);

productManager.addProduct('producto prueba2', 'Este es un producto prueba', 200, 'sin imagen', 'def456', 25);

productManager.addProduct('producto prueba3', 'Este es un producto prueba', 200, 'sin imagen', 'hij678', 25)


productManager.getProducts();
console.log(products);

*/