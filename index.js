const express = require('express');
const app = express();//CREA EL SERVIDOR
const morgan = require('morgan');
const path = require('path');


app.listen(3000, ()=> {
    Console.log('Server on port', 3000);
});//USA EL PUERTO 3000

//rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'views/index.html'));
    
});

//middlewares (funciones antes de que las rutas)
app.use(require('./routes'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


//settings
app.set('view engine', 'ejs');//MOTOR DE PLANTILLAS EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
