import {Empresa} from '../models/Empresas.js'
import {Alumno} from '../models/Alumnos.js'
import tiposPracticas from '../public/tiposPracticas.js'


const paginaInicio = (req, res)=> {
    res.render('index', {
        pagina: 'Inicio'
    });
}

const paginaEmpresas = async (req, res)=> {
    const empresas = await Empresa.findAll()
   // console.log(empresas)
    empresas.forEach(empresa=> console.log(empresa.EMPRESA))
    
    res.render('listadoEmpresas', {
        pagina: 'Listado Empresas',
        empresas,

    });
}



const paginaAlumnos = async(req, res)=>{
    const alumnos = await Alumno.findAll()
   // console.log(alumnos)
    alumnos.forEach(alumno=>console.log(alumno.nombreAl))

    res.render('listadoAlumnos', {
        pagina:'Listado Alumnos',
        alumnos
    })
}

const paginaNuevoAlumno = async(req, res)=>{
    
    res.render('nuevoalumno.pug', {
        pagina:'Nuevo Alumno',
        tiposPracticas
        
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
    paginaNuevaEmpresa

}