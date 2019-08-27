const koa = require("koa");
const mongoose = require("mongoose")

const cors = require("@koa/cors");

const graphqlHTTP = require('koa-graphql');
const mount = require('koa-mount');


const mySchema = require('./graphql/schema');
// const importXLS = require('./xls')


const app = new koa();

app.use(cors());

http://thecodebarbarian.com/2015/07/24/guide-to-mongoose-discriminators

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
            schema: mySchema,
            graphiql: true
        })
    )
);

// importXLS()

app.listen(4000);


console.log("INALI backend corriendo en puerto 4000")


  
  