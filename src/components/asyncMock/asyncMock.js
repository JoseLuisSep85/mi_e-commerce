const productos = [
    {
        "id" : 1, 
        "nombre" : "Apple MacBook Pro 14 M1",
        "precio" : 1499000, 
        "imagen" : "https://falabella.scene7.com/is/image/Falabella/15717036_1?wid=1500&hei=1500&qlt=70",
        "cantidad" : 10,
        "categoria": "Notebooks",
        "descripcion" : "Apple MacBook Pro 14 - Chip M1 Pro CPU 8 núcleos - GPU 14 núcleos - 16 GB RAM - 512GB SSD"
    },
    {
        "id" : 2,
        "nombre" : "Apple MacBook Pro 16 M1",
        "precio" : 1999000,
        "imagen" : "https://falabella.scene7.com/is/image/Falabella/15717009_1?wid=1500&hei=1500&qlt=70",
        "cantidad" : 10,
        "categoria": "Notebooks",
        "descripcion" : "Apple MacBook Pro 16.2 - Chip M1 Pro CPU 10 núcleos - GPU 16 núcleos - 16 GB RAM - 512GB SSD"
    },
    {
        "id" : 3, 
        "nombre" : "Apple MacBook Air",
        "precio" : 799000, 
        "imagen" : "https://falabella.scene7.com/is/image/Falabella/15028801_1?wid=1500&hei=1500&qlt=70",
        "cantidad" : 10,
        "categoria": "Notebooks",
        "descripcion" : "Apple MacBook Air 13 - Chip M1 CPU 8 núcleos - GPU 7 núcleos - 8GB RAM - 256 GB SSD"
    },
    {
        "id" : 4, 
        "nombre" : "Samsung Galaxy Book 3 Ultra",
        "precio" : 2499000, 
        "imagen" : "https://falabella.scene7.com/is/image/Falabella/16740412_1?wid=1500&hei=1500&qlt=70",
        "cantidad" : 10,
        "categoria": "Notebooks",
        "descripcion" : "Notebook Galaxy Book 3 Ultra - Intel Core i7 - 16 GB RAM - 1TB SSD - GeForce RTX 4050"
    },
    {
        "id" : 5, 
        "nombre" : "Samsung Galaxy Book 3 Pro",
        "precio" : 1599000, 
        "imagen" : "https://falabella.scene7.com/is/image/Falabella/16740412_1?wid=1500&hei=1500&qlt=70",
        "cantidad" : 10,
        "categoria": "Notebooks",
        "descripcion" : "Notebook Galaxy Book 3 Pro 14 - Intel Core i7 - 16 GB RAM - 512GB SSD - Intel Xe Series"
    },
    {
        "id" : 6, 
        "nombre" : "Xbox Serie S",
        "precio" : 249000, 
        "imagen" : "https://falabella.scene7.com/is/image/Falabella/14618596_1?wid=1500&hei=1500&qlt=70",
        "cantidad" : 10,
        "categoria": "Videojuegos",
        "descripcion" : "Consola Xbox Series S - 512GB SSD - Procesador AMD - Conectividad WIFI"
    },
    {
        "id" : 7, 
        "nombre" : "Xbox Serie X",
        "precio" : 549000, 
        "imagen" : "https://s7d2.scene7.com/is/image/Tottus/21088279_1?wid=1500&hei=1500&qlt=70",
        "cantidad" : 10,
        "categoria": "Videojuegos",
        "descripcion" : "Consola Xbox Series X 1TB SSD - Procesador AMD Ryzen"
    },
    {
        "id" : 8, 
        "nombre" : "PlayStation 5",
        "precio" : 649000, 
        "imagen" : "https://falabella.scene7.com/is/image/Falabella/16601760_1?wid=1500&hei=1500&qlt=70",
        "cantidad" : 10,
        "categoria": "Videojuegos",
        "descripcion" : "PS5 Consola Playstation 5 Sony Standard 1115 Fifa 23"
    },
    {
        "id" : 9, 
        "nombre" : "Nintendo Switch",
        "precio" : 349000, 
        "imagen" : "https://sodimac.scene7.com/is/image/SodimacCL/3869695_01?wid=1500&hei=1500&qlt=70",
        "cantidad" : 10,
        "categoria": "Videojuegos",
        "descripcion" : "Consola Nintendo Switch Lt2 - 32GB - Nvidia Tegra"
    },
    {
        "id" : 10, 
        "nombre" : "Nintendo Switch Oled",
        "precio" : 449000, 
        "imagen" : "https://falabella.scene7.com/is/image/Falabella/gsc_121721866_3158324_1?wid=1500&hei=1500&qlt=70",
        "cantidad" : 10,
        "categoria": "Videojuegos",
        "descripcion" : "Consola Nintendo Switch Modelo OLED Neon"
    },
    {
        "id" : 11, 
        "nombre" : "Apple Iphone 14 Pro Max",
        "precio" : 1199000, 
        "imagen" : "https://falabella.scene7.com/is/image/Falabella/16563321_1?wid=1500&hei=1500&qlt=70",
        "cantidad" : 10,
        "categoria": "SmartPhones",
        "descripcion" : "Apple iPhone 14 Pro Max 256 GB - 6.7 pulgadas - 6GB RAM"
    },
    {
        "id" : 12, 
        "nombre" : "Apple Iphone 14 Pro",
        "precio" : 1149000, 
        "imagen" : "https://falabella.scene7.com/is/image/Falabella/16563300_1?wid=1500&hei=1500&qlt=70",
        "cantidad" : 10,
        "categoria": "SmartPhones",
        "descripcion" : "Apple iPhone 14 Pro 256 GB - 6.1 pulgadas - 6GB RAM"
    },
    {
        "id" : 13, 
        "nombre" : "Apple Iphone 14",
        "precio" : 799000, 
        "imagen" : "https://falabella.scene7.com/is/image/Falabella/16563277_1?wid=1500&hei=1500&qlt=70",
        "cantidad" : 10,
        "categoria": "SmartPhones",
        "descripcion" : "Apple iPhone 14 256 GB - 6.1 pulgadas - 6GB RAM"
    },
    {
        "id" : 14, 
        "nombre" : "Samsung Galaxy S23 Ultra",
        "precio" : 1079000, 
        "imagen" : "https://falabella.scene7.com/is/image/Falabella/16689936_1?wid=1500&hei=1500&qlt=70",
        "cantidad" : 10,
        "categoria": "SmartPhones",
        "descripcion" : "Smartphone Samsung Galaxy S23 Ultra - 256GB - 5G"
    },
    {
        "id" : 15, 
        "nombre" : "Samsung Galaxy S23",
        "precio" : 799000, 
        "imagen" : "https://falabella.scene7.com/is/image/Falabella/gsc_120422906_2664716_1?wid=1500&hei=1500&qlt=70",
        "cantidad" : 10,
        "categoria": "SmartPhones",
        "descripcion" : "Smartphone Samsung Galaxy S23 - 256GB - 5G"
    }
]
 
export const pedirProductos = () => {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(productos)

        },2000)
    })
}

export const pedirIdProducto = (id) => {

    return new Promise((resolve, reject) => {
        
        const item = productos.find((prod) => prod.id === id);

        if (item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontró el producto."
            })
        }
    })

}