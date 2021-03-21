import express from 'express';

import {
        paginaInicio, 
        paginaEmpresas, 
        paginaAlumnos, 
        paginaNuevoAlumno,
        paginaNuevaEmpresa
    } from '../controllers/paginasControllers.js'

import {
        guardarNuevoAlumno
    } from '../controllers/nuevoAlumnoControllers.js'

import { 
        guardarNuevaEmpresa 
    } from '../controllers/nuevaEmpresaControllers.js';

const router = express.Router();

router.get('/', paginaInicio );

router.get('/nuevoalumno', paginaNuevoAlumno);

router.post('/nuevoalumno', guardarNuevoAlumno);

router.get('/nuevaempresa', paginaNuevaEmpresa);

router.post('/nuevaempresa', guardarNuevaEmpresa)

router.get('/listadoempresas', paginaEmpresas);

router.get('/listadoalumnos', paginaAlumnos);



export default router