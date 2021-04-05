import{Alumno} from '../models/Alumnos.js'

const guardarEdicionAlumno = async (req, res)=> {

    const {id} = req.params
    console.log('guardar edicion en el id = ' + '  ' + id)
    await Alumno.update({

        cursoAl: req.body.cursoAl,                  
        nombreAl: req.body.nombreAl, 
        localidadAl: req.body.localidadAl,  
        emailAl: req.body.emailAl,  
        empresaAl: req.body.empresaAl,  
        contactoEmp: req.body.contactoEmp, 
        practicas: req.body.practicas, 
        id: req.body.id

    },
    {where: {id : id}}
    )

    res.redirect('/')

}

export {guardarEdicionAlumno}