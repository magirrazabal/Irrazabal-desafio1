const fs = require('fs').promises;

//setTimeOut = ejecuta una tarea despues de un determinado momento

/*const temporizador = (callback) => {
    setTimeout(()=>{
        callback();
    }, 5000)
}

let operacion = () => console.log('setTimeOut funcionando');

console.log ('iniciando la tarea');
temporizador(operacion);
console.log('tarea finalizada');

//setInterval = ejecuta una tarea hasta un determinado momento

let contador = () =>{
    let counter = 1;
    console.log('realizando operación');
    let timer = setInterval (()=>{
        console.log(counter++);
        if (counter>7){
            clearInterval(timer);
        }

    }, 1000)
}
console.log('hola');
contador();
console.log('chau');*/

//Manejo de archivos de forma síncrona

/*fs.writeFileSync('./ejemplo.txt', 'Hola');
if(fs.existsSync('./ejemplo.txt')){
                                                //tipo de dato que voy a analizar
let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
//fs.writeFileSync('./ejemplo.txt', 'HOLA número 2 ');
console.log(contenido); 
fs.appendFileSync('./ejemplo.txt', '\nvolvi');
contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
console.log(contenido); 
fs.unlinkSync('./ejemplo.txt');
}
*/
//Sincrónica con callbacks
/*fs.writeFile('./ejemploCB.txt', 'HOLA CB', (error) => {
    if (error) { 
        return console.log('error en escr')
    }
    fs.readFile('./ejemploCB.txt', 'utf-8', (error, resultdo) => {
        if (error) { 
            return console.log('error en lec')
        }
        console.log(resultdo)
        fs.appendFile('./ejemploCB.txt', '\nbuenas noches CB',  (error) => {
            if (error) { 
                return console.log('error en append')
            } 
            fs.readFile('./ejemploCB.txt', 'utf-8',(error, resultdo) => {
                if (error) { 
                    return console.log('error en lect2')
                }
                console.log(resultdo)
                fs.unlink('./ejemploCB.txt', (error) => {
                    if(error) {
                        return console.log("ERROR EN ELIMINACION")
                    }
                })
            })
        })
    })
})*/

//Asincrónico con promesas
const productos = [
{ title: 'title', description: 'description', price: 9, thumbnail: 'thumbnail', code: 'code', stock: 9, id:'newId'}
]
const consultaTXT = async(ruta) =>{ 
await fs.writeFile(ruta, ' ')
let contenido = await fs.readFile(ruta, 'utf-8');
//fs.writeFileSync('./ejemplo.txt', 'HOLA número 2 ');
console.log(contenido); 
await fs.appendFile(ruta, JSON.stringify(productos));
contenido = await fs.readFile(ruta, 'utf-8');
console.log(JSON.parse(contenido)); 
//fs.unlink('./ejemploP.txt');
}


consultaTXT('./ejemploP.txt');
