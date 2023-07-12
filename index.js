const { Pool } = require("pg")

const pool = new Pool({
    host: 'localhost',
    database: 'cursonest',
    user: 'postgres',
    password: 'postgres',
    port: 5433
})
pool.connect()

pool.query("SELECT1 * FROM products").then(resp =>{
    console.log(resp);
}).catch(error => {
    mensajeError(error)
})


const mensajeError = (error) => {
    console.log(error.code);
    switch (error.code) {
        case "42P01":
            console.log("Intenta acceder a una tabla no existente");
        break;

        case "42601":
            console.log("Error de sintaxis en la consulta");
        break;
    
        default:
            console.log("Mensaje no definido en la bibllioteca de errores de conexión a la BD")
        break;
    }
}