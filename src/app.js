//Import dependencias
import express from 'express'
import {engine} from 'express-handlebars'

//Import router

//Import Path
import __dirname from './utils.js'
import path from 'path'

//Conexión a la base de datos
import {conecctionDB} from './database/config.js'

//Import managers


//Configuración servidor
const PORT = 3001

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

//app.use('/', views);
//app.use('/api/products', products);
//app.use('/api/carts', carts);




//Inicio Servidor
app.listen(PORT, () => console.log(`Server Online en puerto ${PORT}`));
conecctionDB();