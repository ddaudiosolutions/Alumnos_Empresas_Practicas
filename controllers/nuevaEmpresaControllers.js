import{Empresa} from '../models/Empresas.js'

const guardarNuevaEmpresa = async(req, res)=>{
    //console.log(req.body)
    const {EMPRESA, CONTACTO, EMAIL, TELEFONO, PRACTICAS, OBSERVACIONES} = req.body;


    try{
        await Empresa.create({
            
            EMPRESA, 
            CONTACTO, 
            EMAIL, 
            TELEFONO, 
            PRACTICAS,
            OBSERVACIONES

        });

        res.redirect('/')

    }
    catch (error)
    {console.log(error)}

}
export {
    guardarNuevaEmpresa
}