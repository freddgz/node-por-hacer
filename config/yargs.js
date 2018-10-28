const descripcion={
    demand:true,
    alias:'d'
}
const completado={
    alias:'c',
    default:true
}
const argv=require('yargs')
            .command('crear','crear una nueva tarea por hacer',{
                descripcion
            })
            .command('borrar','borrar una nueva tarea por hacer',{
                descripcion
            })
            .command('actualizar','actualiza la tarea por hacer',{
                descripcion,
                completado
            })
            .help()
            .argv;
module.exports={
    argv
}