
 const curso = document.querySelector('#curso')
 const practicas = document.querySelector('#practicas')
 const btnBuscar = document.querySelector('#btnBuscar')
 const listadoempresas = document.querySelector('#listado_Empresas')


const datosBusqueda = {

    curso,
    practicas,
}

const practicasSonido = [
    'Todas',
    'SonidoDirecto',
    'EstudiodeGrabación',
    'Radio',
    'Teatro',
    'SonidoFiccion'
]

const practicasAnimacion = [
    'Todas',
    'VideoJuegos',
    'Modelaje',
    'Diseño',
    'Programacion',
    '3D'
]

const practicasRealizacion = [
    'Todas',
    'Guion',
    'Produccion de Ficcion',
    'Camara',
    'Editor y Montador',
    'Affter Effects'
]

const practicasIluminacion = [
    'Todas',
    'Teatro',
    'Foto Ficción',
    'Plato Tv',
    'Estudio Foto',
    
]

const practicasProduccion = [
    'Todas',
    'Productora TV',
    'Produccion de Ficcion',
    'Eventos',   
]

const practicasGradoMedio = [
    'Todas',
    'SonidoDirecto',    
    'Radio',
    'Teatro',
    'SonidoFiccion',
    'Camara',
    'Estudio Foto' 
]


 curso.addEventListener('change', e =>{
     datosBusqueda.curso = e.target.value;
   
     leerCurso(`${datosBusqueda.curso}`)     
 })

 function leerCurso(curso)
 {
     limpiarhtml(practicas)
    let opcionesPracticas = curso;
     switch (curso) {

        case 'CFGSS' :
            opcionesPracticas = practicasSonido;
            break;

        case 'CFGSA': 
            opcionesPracticas = practicasAnimacion;
            break;

        case 'CFGSR':
            opcionesPracticas = practicasRealizacion;
            break;

        case 'CFGSI':
            opcionesPracticas = practicasIluminacion;
             break;
        case 'CFGSP':
             opcionesPracticas = practicasProduccion;
            break;
        case 'CFGMVDJ':
            opcionesPracticas = practicasGradoMedio;   
            break;

        default: 
            console.log('no has seleccionado un curso');
     }
     //console.log('este el el curso' + curso)
     if (datosBusqueda.curso)
     {
         
         for (let i=0; i<opcionesPracticas.length; i++)
         {
            const opcion = document.createElement ('option')
             opcion.value = opcionesPracticas[i]
             opcion.textContent = opcionesPracticas[i]
             practicas.appendChild(opcion)
         }

     }
 }

 function limpiarhtml(value)
 {
     while (value.firstChild){
        value.removeChild(value.firstChild)
     }
 }

 //MOSTRANDO RESULTADO BUSQUEDA
 let seleccion;

 practicas.addEventListener('change', e => {
    datosBusqueda.practicas = e.target.value;   

   seleccion = `${datosBusqueda.practicas}`
   console.log(seleccion)    
})

btnBuscar.addEventListener('click', mostrarSeleccionEmp)

    async function mostrarSeleccionEmp(){
   
        limpiarhtml(listadoempresas)
        crearCabecera();
        crearTabla();
   
    /*const empresasSeleccion = async (req, res) => {

        try 
        { const empresas = await Empresa.findAll({attributes: ['EMPRESA','CONTACTO','EMAIL', 'TELEFONO', 'PRACTICAS'], 
        where:{PRACTICAS: seleccion}})
        empresas.forEach(empresa=>(console.log(empresas.EMPRESA)))
        
        }
        catch(error){
            console.log(error)
        }
    }*/

    
   
    
}

function crearTabla(empresa)
{
    const { EMPRESA, PRACTICAS, id} = empresa;        

           const row = document.createElement('tr');
           row.classList.add('border','border-primary')

           const cnombreEmp = document.createElement('td')
           cnombreEmp.textContent =`${EMPRESA}`;
           cnombreEmp.classList.add('border', 'border-primary')

           const cpracticas = document.createElement('td')
           cpracticas.textContent =`${PRACTICAS}`;    
           cpracticas.classList.add('border', 'border-primary')   
           
           const cAlumno = document.createElement('td')
           cAlumno.textContent = 'ALUMNO';    
           cAlumno.classList.add('border', 'border-primary')

           
           const cMostrarEmp = document.createElement('td');
            const mostrarEmp = document.createElement('a');
            mostrarEmp.href=`mostrarEmpresa.html?id=${id}`;
            mostrarEmp.innerText = 'mostrar';
            cMostrarEmp.classList.add('border', 'border-primary') 
            cMostrarEmp.appendChild(mostrarEmp)

            const cEditarEmp = document.createElement('td');
             const editarEmp = document.createElement('a');
            editarEmp.href=`editarEmpresa.html?id=${id}`;
            editarEmp.innerText = 'editar';
            cEditarEmp.classList.add('border', 'border-primary') 

            cEditarEmp.appendChild(editarEmp)
            
           row.appendChild(cnombreEmp);
           row.appendChild(cpracticas)
           row.appendChild(cAlumno)
           row.appendChild(cMostrarEmp)
           row.appendChild(cEditarEmp)

           listadoempresas.appendChild(row)        

}
function crearCabecera()
{   
    const rowH = document.createElement('tr');

    const headRow = document.createElement('th');
        headRow.innerText = 'EMPRESA';

    const headRow2 = document.createElement('th');
        headRow2.innerText = 'PRACTICAS';

        const headRow3 = document.createElement('th');
        headRow3.innerText = 'ALUMNO';
       
       

        
        rowH.appendChild(headRow)
        rowH.appendChild(headRow2)
        rowH.appendChild(headRow3)
        listadoempresas.appendChild(rowH)

}
 
//export {seleccion}
