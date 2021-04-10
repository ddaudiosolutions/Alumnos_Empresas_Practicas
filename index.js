import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';



const app = express()

db.authenticate()
    .then (()=> console.log('Base de datos Conectada'))
    .catch (error => console.log(error))

    
const port = process.env.PORT || 3000;

app.set('view engine', 'pug')

// AGREGAR BODYPARSER PARA LEER LOS DATOS DEL FORMULARIO

app.use(express.urlencoded({extended: true}));//DEBE IR SIEMPRE ANTES DEL ROUTER
app.use(express.static('public'))



app.use('/', router);



app.listen(port, ()=> {
    console.log(`Console Running on ${port}`)
})