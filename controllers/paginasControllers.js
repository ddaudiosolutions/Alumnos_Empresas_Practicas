import {Empresa} from '../models/Empresas.js'
import {Alumno} from '../models/Alumnos.js'
import tiposPracticas from '../public/tiposPracticas.js'
import {practicasGradoMedio, practicasSonido} from '../public/seleccionPracticas.js';
import {cursos} from '../public/tiposCursos.js';
import buscadorEmpresas from '../controllers/buscadorEmpresas.js'
import { request } from 'express';




const paginaInicio = async (req, res)=> {
    
    const {curso} = req.body
    console.log(curso)
   // let empValue = EMPRESA //recibir valor de la opcion seleccionada
    
    
    const seleccionEmpresas = await Empresa.findAll({attributes: ['EMPRESA','CONTACTO','EMAIL', 
    'TELEFONO', 'PRACTICAS', 'OBSERVACIONES', 'id'], 
    where:{PRACTICAS : curso}})
    seleccionEmpresas.forEach(empresa=>console.log(empresa))
    
    

    res.render('index', {
        pagina: 'Inicio',
        tiposPracticas,
        practicasGradoMedio,
        practicasSonido,
        cursos,
        seleccionEmpresas,
        buscadorEmpresas,
        
        
        
       
                //seleccionPracticas 
    });
}

const paginaEmpresas = async (req, res)=> {
    
    try
    {const empresas = await Empresa.findAll()
   
    
        res.render('listadoEmpresas', {
            pagina: 'Listado Empresas',
            empresas,

    })}
    catch (error){
        console.log(error)
    }
}


const paginaEditarEmpresa = async (req, res)=> {
    const {id} = (req.params)
    //console.log(id)
   let idValue = id;
    try
    {const editarDetallesEmpresa = await Empresa.findAll({attributes: ['EMPRESA','CONTACTO','EMAIL', 
        'TELEFONO', 'PRACTICAS', 'OBSERVACIONES', 'id'], 
        where:{id: idValue}})
        editarDetallesEmpresa.forEach(empresa=>(console.log(empresa.id)))
    
        res.render('editarEmpresa', {
            pagina: 'Editar Empresa',
            editarDetallesEmpresa,
           

    })}
    catch (error){
        console.log(error)
    }
    
}

const paginaDetallesEmpresa = async (req, res)=> {
    const {id} = req.params
   
    const detallesEmpresa = await Empresa.findAll({attributes: ['EMPRESA','CONTACTO','EMAIL', 'TELEFONO', 'PRACTICAS', 'OBSERVACIONES', 'id'], 
        where:{id : id}})
        detallesEmpresa.forEach(empresa=>console.log(empresa))
    
    res.render('mostrarEmpresa',{
        pagina:'Mostrar Empresa',
        detallesEmpresa
    })
}



const paginaNuevaEmpresa = async(req, res)=>{
    
    res.render('nuevaempresa.pug', {
        pagina:'Nueva Empresa',
        tiposPracticas
        
    })
}


const paginaAlumnos = async(req, res)=>{
    try{
        const alumnos = await Alumno.findAll() 
        res.render('listadoAlumnos', {
            pagina:'Listado Alumnos',
            alumnos
    })}
    catch{ (error)
        console.log(error)
    }
}

const paginaEditarAlumno = async (req, res)=> {
    const {id} = (req.params)
    //console.log(id)
   let idValueAl = id;
    try
    {const editarDetallesAlumno = await Alumno.findAll({attributes: ['cursoAl','nombreAl','localidadAl', 'emailAl', 
            'empresaAl', 'contactoEmp', 'practicas', 'OBSERVACIONES', 'id'], 
        where:{id: idValueAl}})
        editarDetallesAlumno.forEach(alumno=>(console.log(alumno.id)))
    
        res.render('editarAlumno', {
            pagina: 'Editar Alumno',
            editarDetallesAlumno,
           

    })}
    catch (error){
        console.log(error)
    }
    
}

const paginaDetallesAlumno = async (req, res)=> {
    const {id} = req.params
   
    const detallesAlumno = await Alumno.findAll({attributes: ['cursoAl','nombreAl','localidadAl', 'emailAl', 'empresaAl', 'contactoEmp', 'practicas', 'OBSERVACIONES'], 
        where:{id : id}})
        detallesAlumno.forEach(alumno=>console.log(alumno))
    
    res.render('mostrarAlumno',{
        pagina:'Mostrar Alumno',
        detallesAlumno
    })
    
}

const paginaNuevoAlumno = async(req, res)=>{
    const empresas  = await Empresa.findAll()
    res.render('nuevoalumno.pug', {
        pagina:'Nuevo Alumno',
        tiposPracticas,
        empresas,
        
        
    })
}






export {
    paginaInicio,
    paginaEmpresas,
    paginaAlumnos,
    paginaNuevoAlumno,
    paginaNuevaEmpresa,
    paginaEditarEmpresa,
    paginaDetallesEmpresa,
    paginaDetallesAlumno,
    paginaEditarAlumno,
    
    
    

}