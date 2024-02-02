import express from "express"; // module
//import router from './routes/index.js';
import {sequelize as db} from "./database/db.js";
//import cors from 'cors';

const app = express();

// Definir el puerto
//const port = process.env.PORT;

// Origen(es)
//const whiteList = [process.env.WHITELIST];

async function main() {
    try {
        console.log("la conexion se ha hecho ");
        app.listen(4000);
        console.log("escuchando puerto", 4000);
        db.authenticate().then(() => console.log('Base de datos conectada'))
            .catch(error => console.log(error));
      } catch (error) {
        console.error("no se puede conectar a la base de datos", error);
      }
}

main();