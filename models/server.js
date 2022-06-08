// crear clases para configuracion de server
const express = require('express');
const cors = require('cors');
const { json } = require('express/lib/response');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //middlewares
        this.middlewares();

        //llamar ruta
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        // directorio publico
        this.app.use(express.static('public'));
    }

    //configurar ruta especifica 
    routes(){
       
        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }



    // configuracion de  listening
    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en el puerto ', this.port);
        });

    }
}


module.exports = Server;