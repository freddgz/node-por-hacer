const fs=require('fs');

let porhacerLista=[];

const guardarDB= ()=>{
    let data=JSON.stringify(porhacerLista);
    fs.writeFile('db/data.json',data,(err)=>{
        if(err) throw new Error('no se puedo grabar db',err);
    })
}

const cargarDB=()=>{
    try {
        porhacerLista=require('../db/data.json');    
    } catch (error) {
        porhacerLista=[];
    }
    
}


const crear=(descripcion)=>{
    cargarDB();

    let porhacer={
        descripcion,
        completado:false
    };
    porhacerLista.push(porhacer);
    
    guardarDB();
    
    return porhacer;
}
const listado=()=>{
    cargarDB();
    return porhacerLista;
}
const actualizar=(descripcion,completado=false)=>{
    cargarDB();
    let index=porhacerLista.findIndex(tarea=>tarea.descripcion===descripcion);
    if(index>=0){
        porhacerLista[index].completado=completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}
const borrar=(descripcion)=>{
    cargarDB();

    let nuevoListado=porhacerLista.filter(tarea=>tarea.descripcion!==descripcion);

    if(nuevoListado.length===porhacerLista.length ){
        return false;
    }else{
        porhacerLista=nuevoListado;
        guardarDB();
        return true;
    }
}


module.exports={
    crear
    ,listado
    ,actualizar
    ,borrar
}