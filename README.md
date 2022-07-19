
# BackEnd Bsale Shop 

API REST creada con Nodejs y Express, conectada a base de datos(MySQL) de prueba de Bsale para obtener productos y categorias existentes. 

deploy: ----

# Instalación

Reconstruir los módulos de Node
```
npm install
```
Configurar las variables de entorno
```
PORT=
MYSQL_HOST=
MYSQL_USER=
MYSQL_PWD=
MYSQL_DB=
```
Levantar localmente el proyecto
```
npm run dev
```
Si se configuró todo correctamente, debería salir algo similar en la terminal
```
[nodemon] 2.0.19
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Server running on port 8080
Connected to database
```

# Endpoints

## Productos

Los endpoints de productos permiten los siguiente parametros

| Parametros      | Valor ejemplo |
| ----------- | ----------- |
| page      | 1       |
| limit   | 8        |

`GET /api/products` -> Obtener todos los productos
### Ejemplo
```
GET /api/products?limit=1&page=1
```
Respuesta
```json
{
    "data": {
        "products": [
            {
                "id": 5,
                "name": "ENERGETICA MR BIG",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
                "price": 1490,
                "discount": 20,
                "category": 1
            }
        ],
        "page": 1,
        "limit": 1,
        "totalResults": 57,
        "totalPages": 57
    }
}
```


`GET /api/products/find/{nombreProducto}` -> Buscar productos por nombre
### Ejemplo
```
GET /api/products/find/PISCO?page=1&limit=1
```
Respuesta
```json
{
    "data": {
        "products": [
            {
                "id": 8,
                "name": "PISCO ALTO DEL CARMEN 35º",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg",
                "price": 7990,
                "discount": 10,
                "category": 2
            }
        ],
        "page": 1,
        "limit": 1,
        "totalResults": 21,
        "totalPages": 21
    }
}
```

`GET /api/products/filter/{idCategoria}` -> Obtener productos por id categoría
### Ejemplo
```
GET /api/products/filter/3?page=1&limit=1
```
Respuesta
```json
{
    "data": {
        "products": [
            {
                "id": 23,
                "name": "RON BACARDI AÑEJO",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardi9450.jpg",
                "price": 4990,
                "discount": 0,
                "category": 3
            }
        ],
        "page": 1,
        "limit": 1,
        "totalResults": 13,
        "totalPages": 13
    }
}
```

## Categorias

`GET /api/categories` -> Obtener todas las categorías
### Ejemplo
```
GET /api/categories
```
Respuesta
```json
{
    "data": {
        "categories": [
            {
                "id": 1,
                "name": "bebida energetica"
            },
            {
                "id": 2,
                "name": "pisco"
            },
            {
                "id": 3,
                "name": "ron"
            },
            {
                "id": 4,
                "name": "bebida"
            },
            {
                "id": 5,
                "name": "snack"
            },
            {
                "id": 6,
                "name": "cerveza"
            },
            {
                "id": 7,
                "name": "vodka"
            }
        ]
    }
}
```

Documentación de Postman: ////////////



