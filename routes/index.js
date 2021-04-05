import express from 'express';

import {
        paginaInicio, 
        paginaEmpresas, 
        paginaAlumnos, 
        paginaNuevoAlumno,
        paginaNuevaEmpresa,        
        paginaDetallesEmpresa,
        paginaEditarEmpresa,
        paginaEditarAlumno,
        paginaDetallesAlumno,
        

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

import{
    guardarEdicionAlumno
} from '../controllers/editarAlumnocontrollers.js';

const router = express.Router();

router.get('/', paginaInicio );

router.post('/', paginaInicio );

router.get('/listadoalumnos', paginaAlumnos);

router.get('/alumno/:id', paginaDetallesAlumno)

router.get('/listadoempresas', paginaEmpresas);

router.get('/empresa/:id', paginaDetallesEmpresa)

router.get('/nuevoalumno', paginaNuevoAlumno);

router.post('/nuevoalumno', guardarNuevoAlumno);

router.get('/editaralumno/:id', paginaEditarAlumno)

router.post('/editaralumno/:id', guardarEdicionAlumno)

router.get('/nuevaempresa', paginaNuevaEmpresa);

router.post('/nuevaempresa', guardarNuevaEmpresa)

router.get('/editarempresa/:id', paginaEditarEmpresa)

router.post('/editarempresa/:id', guardarEdicionEmpresa)







export default router