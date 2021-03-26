import {Empresa} from '../models/Empresas.js'
import {Alumno} from '../models/Alumnos.js'
import tiposPracticas from '../public/tiposPracticas.js'



const paginaInicio = (req, res)=> {
    res.render('index', {
        pagina: 'Inicio'
    });
}

const paginaEmpresas = async (req, res)=> {
    
    try
    {const empresas = await Empresa.findAll()
   //console.log(empresas.id)
   // empresas.forEach(empresa=> console.log(empresa.id))
    
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
    {const editarDetallesEmpresa = await Empresa.findAll({attributes: ['EMPRESA','CONTACTO','EMAIL', 'TELEFONO', 'PRACTICAS', 'OBSERVACIONES', 'id'], 
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

const paginaNuevoAlumno = async(req, res)=>{
    
    res.render('nuevoalumno.pug', {
        pagina:'Nuevo Alumno',
        tiposPracticas
        
    })
}

const paginaDetallesEmpresa = async (req, res)=> {
    const {id} = req.params
    console.log('ESTO ES EL ID' + id)
    
    
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




export {
    paginaInicio,
    paginaEmpresas,
    paginaAlumnos,
    paginaNuevoAlumno,
    paginaNuevaEmpresa,
    paginaEditarEmpresa,
    paginaDetallesEmpresa
    

}