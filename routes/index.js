import express from 'express';

import {
        paginaInicio, 
        paginaEmpresas, 
        paginaAlumnos, 
        paginaNuevoAlumno,
        paginaNuevaEmpresa,        
        paginaDetallesEmpresa,
        paginaEditarEmpresa

    } from '../controllers/paginasControllers.js'

import {
        guardarNuevoAlumno
    } from '../controllers/nuevoAlumnoControllers.js'

import { 
        guardarNuevaEmpresa 
    } from '../controllers/nuevaEmpresaControllers.js';

import{
    guardarEdicionEmpresa
} from '../controllers/editarEmpresaControllers.js';


const router = express.Router();

router.get('/', paginaInicio );

router.get('/nuevoalumno', paginaNuevoAlumno);

router.post('/nuevoalumno', guardarNuevoAlumno);

router.get('/nuevaempresa', paginaNuevaEmpresa);

router.post('/nuevaempresa', guardarNuevaEmpresa)

router.get('/listadoempresas', paginaEmpresas);

router.get('/:id', paginaDetallesEmpresa)

router.get('/editarempresa/:id', paginaEditarEmpresa)

router.post('/editarempresa/:id', guardarEdicionEmpresa)

router.get('/listadoalumnos', paginaAlumnos);





export default router