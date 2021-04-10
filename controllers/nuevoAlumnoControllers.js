import {Alumno} from '../models/Alumnos.js'
const guardarNuevoAlumno = async (req, res)=>{

    const {cursoAl, nombreAl, localidadAl, emailAl, empresa, contactoEmp, practicas} = req.body;
    //console.log(req.body.id)

    try{
        await Alumno.create({
            
            cursoAl, 
            nombreAl, 
            localidadAl, 
            emailAl, 
            empresaAl: empresa, 
            contactoEmp, 
            practicas

        });

        res.redirect('/')

    }
    catch (error)
    {console.log(error)}

}
export {
    guardarNuevoAlumno
}