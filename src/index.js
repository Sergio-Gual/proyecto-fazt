// archivo donde arranca la aplicacion 
// inicializamos expres

const express = require ('express'); //requerimos express y lo guardamos en una constante "express"
const morgan = require ('morgan');

//INICIALIZACIONES 

const app = express();  //inicializamos la aplicación


//SETTING (configuraciones que necesita el servidor express, ejm "PORT, etc etc")
app.set('port', process.env.PORT || 4000); //Definimos el puerto, si existe un puerto en el sistema tomalo, caso contrario sera el 4000.



//MIDDLEWARE (son funciones que se ejecutan cada vez que el usuario envia una peticion, ejm : morgan)
app.use(morgan('dev')); // El parametro "dev" para que nos muestre un determinado mensaje por consola, para ver que nos llega a nuestro servidor


//VARIABLES GLOBALES


//ROUTES (url de nuestros servidores)


//PUBLICOS (una carpeta donde se coloca todo el codigo, que el navegador puede acceder)


//STARTING THE SERVER (una seccion para inicializar nuestro servidor)
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});