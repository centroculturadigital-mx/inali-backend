const koa = require("koa");
const mongoose = require("mongoose")

const cors = require("@koa/cors");

const graphqlHTTP = require('koa-graphql');
const mount = require('koa-mount');


const schema = require('./graphql/schema/schema');
const root = require('./graphql/root/root');


const app = new koa();

app.use(cors());



mongoose.connect(`mongodb://mongo:27017/inali`, {
    useNewUrlParser: true
});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database connected. App running.'))


// const UsuarioModel = require("./models/usuario")

// let newUser = new UsuarioModel({
    //     nombreUsuario: '--- ',
    //     fechaNacimiento: '2019-01-02',
    //     genero: '---    ',
    //     nombres: '---   ',
    //     apellidos: '--- ',
    //     contrasenna: '---   ',
    //     email: '--- '
    // }) 
    
    // newUser.save()
    
    // UsuarioModel.find().limit(3).then((res) => {
        //     console.log(res)
        // })
        

app.use(async ctx => {
    ctx.body = 'Hola mundo!';
});


app.listen(3000);


console.log("INALI backend corriendo en puerto 3000")


app.use(
    mount(
        '/graphql',
        graphqlHTTP({
            schema,
            rootValue: root,
            graphiql: true
        })
    )
);
  
  