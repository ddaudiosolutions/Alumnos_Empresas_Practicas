import {Empresa} from '../models/Empresas.js'
import {Alumno} from '../models/Alumnos.js'
import {tiposPracticas} from '../public/tiposPracticas.js'

import {cursos} from '../public/tiposCursos.js';

import pkg, { Sequelize } from 'sequelize';

const {Model, DataTypes, Op} = pkg;




const paginaInicio = async (req, res)=> {
    
    const {cursosS, practicaSelect} = req.body; //toma el name dentro de 'Select'
       console.log(cursosS + ' esto es para ' + practicaSelect)
   
    
    const seleccionEmpresas = await Empresa.findAll({attributes: ['EMPRESA','CONTACTO','EMAIL', 
    'TELEFONO', 'PRACTICAS', 'OBSERVACIONES', 'id'], 
        where:{

            PRACTICAS : {[Op.or]:
                [Sequelize.where(Sequelize.col('PRACTICAS'), 'LIKE', '%'+practicaSelect+'%')]},
            }})
    
    
    

    res.render('index', {
        pagina: 'Inicio',
        tiposPracticas,
        
        cursos,
        seleccionEmpresas,
       
        cursosS,
        practicaSelect
                //seleccionPracticas 
    });
}

const paginaEmpresas = async (req, res)=> {
    const {cursosS, practicaSelect} = req.body; //toma el name dentro de 'Select'
    
    //console.log(cursosS + ' esto es para ' + practicaSelect)
    try
        {const seleccionEmpresas = await Empresa.findAll({attributes: ['EMPRESA','CONTACTO','EMAIL', 'TELEFONO', 'PRACTICAS', 
        'OBSERVACIONES', 'id', 'CFGMVDJ', 'CFGSS', 'CFGSR', 'CFGSI', 'CFGSA', 'CFGSP'], 
                where:{
                    PRACTICAS : {[Op.or]: [Sequelize.where(Sequelize.col('PRACTICAS'), 'LIKE', '%'+practicaSelect+'%')]},                       
                    
                }}) 
                     
    
        
            res.render('listadoEmpresas', {
                pagina: 'Listado Empresas',
                
                cursos,
                cursosS,
                tiposPracticas,
                practicaSelect,
                seleccionEmpresas

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
    const {cursosS, practicaSelect} = req.body; //toma el name dentro de 'Select'
       //console.log(cursosS + ' esto es para ' + practicaSelect)
    
    try{
        const seleccionAlumnos = await Alumno.findAll({attributes: ['cursoAl','nombreAl','localidadAl', 'emailAl', 
            'empresaAl', 'contactoEmp', 'practicas', 'OBSERVACIONES', 'id'], 
            where:{   
                    [Op.or]: [                        
                                {cursoAl : {[Op.or]: [Sequelize.where(Sequelize.col('cursoAl'), 'LIKE', '%'+cursosS+'%')]}},
                                {practicas : {[Op.or]: [Sequelize.where(Sequelize.col('practicas'), 'LIKE', '%'+practicaSelect+'%')]}},
                            
                                {[Op.and] :[
                                    {cursoAl : {[Op.and]: [Sequelize.where(Sequelize.col('cursoAl'), 'LIKE', '%'+cursosS+'%')]}},
                                    {practicas : {[Op.and]: [Sequelize.where(Sequelize.col('practicas'), 'LIKE', '%'+practicaSelect+'%')]}}

                                ]}
                        ],
                }})
        
        res.render('listadoAlumnos', {
            pagina:'Listado Alumnos',
            cursosS,
            cursos,
            tiposPracticas,
            practicaSelect,
            seleccionAlumnos
    })}
    catch(error){
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