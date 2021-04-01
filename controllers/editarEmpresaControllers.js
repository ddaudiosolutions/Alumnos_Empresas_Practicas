import{Empresa} from '../models/Empresas.js'



const guardarEdicionEmpresa = async(req, res)=>
{
    const {id} = req.params
    //let idValue = id;
    console.log('guardar edicion en el id = ' + '  ' + id)
            
           await  Empresa.update(
           {

                    EMPRESA: req.body.EMPRESA,
                    CONTACTO: req.body.CONTACTO,
                    EMAIL: req.body.EMAIL,
                    TELEFONO: req.body.TELEFONO,
                    PRACTICAS: req.body.PRACTICAS,
                    OBSERVACIONES: req.body.OBSERVACIONES,
                    id: req.body.id
                    
                },
                {where : { id : id}}
            
            )
        
            res.redirect('/');
    


    
}

export {guardarEdicionEmpresa}