const Koa = require("koa")
const Router = require("koa-router")
const cors = require("@koa/cors")
const mount = require('koa-mount')

const graphqlHTTP = require('koa-graphql')

const mongoose = require("mongoose")


const mySchema = require('./graphql/schema')

mongoose.connect(`mongodb://mongo:27017/inali`, {
	useNewUrlParser: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Database connected. App running.'))

const app = new Koa()
const router = new Router()

app.use(cors())

app.use(
	mount(
		'/graphql',
		graphqlHTTP({
			schema: mySchema,
			graphiql: true
		})
	)
)

router.redirect('/', '/graphql')
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000)

console.log("INALI backend corriendo en puerto 4000")