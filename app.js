const argv=require('./config/yargs').argv;
const porhacer=require('./por-hacer/por-hacer');
const color=require('colors');

let comando=argv._[0];

switch (comando) {
    case 'crear':
        let tarea= porhacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'mostrar':
        let lista=porhacer.listado();
        for(let tarea of lista){
            console.log(`- ${tarea.descripcion} (${color.green(tarea.completado)})`);
        }
        break;
    case 'actualizar':
        let actualizado=porhacer.actualizar(argv.descripcion,argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado=porhacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
    console.log('comando no reconocido');
        break;
}