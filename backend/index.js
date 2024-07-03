var express = require('express'); 
var bodyParser = require('body-parser'); 
const {realizarQuery} = require ('./modulos/mysql.js')
var cors = require("cors");

var app = express(); 
var port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.status(200).send({
        message: 'GET Home route working fine!'
    });
});

app.get('/obtenerPreguntas', async function(req,res){
    console.log(req.query) 
    const result = await realizarQuery ("SELECT * FROM Preguntas")
    res.send(result)
})
app.post('/insertarPreguntas', async function(req,res) {
    console.log(req.body)
    const preguntaExiste =  await realizarQuery(`select * from Preguntas where la_pregunta = '${req.body.la_pregunta}'`) 
    if (preguntaExiste.length > 0) {
        
        res.send({res: "La pregunta ya existe"});
        
    } else {
        await realizarQuery(`INSERT INTO Preguntas (la_pregunta) 
    VALUES ('${req.body.la_pregunta}')`);
    let pregunta = await realizarQuery(`select id_preguntas from Preguntas WHERE la_pregunta = '${req.body.la_pregunta}'`) //Obrtengo id
    await realizarQuery(`INSERT INTO Respuestas (id_preguntas; opcion_correcta, opcio1, opcion2, opcion3) 
        VALUES ('${req.body.la_pregunta}')`);  

    res.send({res: "ok"})
    }
    })

app.listen(port, function(){
    console.log(`Server running in http://localhost:${port}`);
    console.log('Defined routes:');
    console.log('   [GET] http://localhost:3000/');
});

