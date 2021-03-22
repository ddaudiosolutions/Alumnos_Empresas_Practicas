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
    
    try
    {const empresas = await Empresa.findAll()
   // console.log(empresas)
    //empresas.forEach(empresa=> console.log(empresa.EMPRESA))
    
    res.render('editarEmpresa', {
        pagina: 'Edtiar Empresa',
        empresas,

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
    
    
    let idValue = '12';//posant es valor manual funciona PERÒ VULL QUE AQUEST VALOR VENGUI DES LISTADOEMPRESAS.PUG
    
    const detallesEmpresa = await Empresa.findAll({attributes: ['EMPRESA','CONTACTO','EMAIL', 'TELEFONO', 'PRACTICAS'], 
        where:{id:`${idValue}`}})
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