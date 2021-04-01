import{Alumno} from '../models/Alumnos.js'

const guardarEdicionAlumno = async (req, res)=> {

    const {id} = req.params

    await Alumno.update({

        cursoAl: req.body.cursoAl,                  
        nombreAl: req.body.nombreAl, 
        localidadAl: req.body.localidadAl,  
        emailAl: req.body.emailAl,  
        empresaAl: req.body.empresaAl,  
        contactoEmp: req.body.contactoEmp, 
        practicas: req.body.practicas, 

    },
    {where: {id : id}}
    )

    res.redirect('/')

}

export {guardarEdicionAlumno}