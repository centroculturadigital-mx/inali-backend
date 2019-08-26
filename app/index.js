const koa = require("koa");
const mongoose = require("mongoose")

const cors = require("@koa/cors");

const graphqlHTTP = require('koa-graphql');
const mount = require('koa-mount');


const schema = require('./graphql/schema/schema');
const root = require('./graphql/root/root');

// const importXLS = require('./xls')


const app = new koa();

app.use(cors());



mongoose.connect(`mongodb://mongo:27017/inali`, {
    useNewUrlParser: true
});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database connected. App running.'))

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

// importXLS()

app.listen(3000);


console.log("INALI backend corriendo en puerto 3000")


  
  