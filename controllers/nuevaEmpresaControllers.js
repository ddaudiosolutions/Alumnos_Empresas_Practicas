import{Empresa} from '../models/Empresas.js'

const guardarNuevaEmpresa = async(req, res)=>{
    console.log(req.body)
    const {EMPRESA, CONTACTO, EMAIL, TELEFONO, PRACTICAS} = req.body;


    try{
        await Empresa.create({
            
            EMPRESA, 
            CONTACTO, 
            EMAIL, 
            TELEFONO, 
            PRACTICAS

        });

        res.redirect('/')

    }
    catch (error)
    {console.log(error)}

}
export {
    guardarNuevaEmpresa
}