// // const frutas = ["banano","uva", "uva","fresa","mango"]

// const {frutas,dinero} = require('./frutas')

// frutas.forEach(item => {
//     console.count(item)
// })

// console.log(`tu cuentas con un valor de ${dinero} pesos en tu cuenta`)

// let cowsay = require ("cowsay");
// console.log(cowsay.say({
//     text: "soy yoooo",
//     e:"oO",
//     T:"U"
// }));

//parte 2

// const http = require('http');
// const server = http.createServer((req,res)=> {
//     res.end('Estoy respondiendo a tu solicitud v.3')
// })

// const puerto = 3000;
// server.listen(puerto,() =>{
//     console.log('escuchando solicitudes')
// })


//parte 3

const express = require('express')
const app = express();

const port = 3000;

//motor de plantillas
app.set('view engine','ejs');
app.set('views',__dirname + "/views");


app.use(express.static(__dirname + "/public"));

app.get('/index',(req,res)=>{
    res.render('index',{titulo2:"mi titulo dinamico"})
})

app.get('/servicios',(req,res)=>{
    res.render('servicios',{tituloServicios:'Mensaje dinamico desde servicios'})
})
app.use((req,res,next)=>{
    res.status(404).render("404",{
        titulo:"404",
        descripcion:"titulo del sitio web"
    })
})


app.listen(port,(( )=>{
    console.log('Servidor a su servicio en el puerto ',port)
}))