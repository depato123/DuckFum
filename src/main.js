const { application } = require("express")

express = require("express")
app = express()
path = require("path")


/* Seteamos EJS como motor de templates */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(__dirname.replace('src','public')))

//Routers
indexRouter = require('./routes/indexRouter')
loginRouter = require('./routes/loginRouter')
registroRouter = require('./routes/registroRouter')
detalleRouter = require('./routes/detalleRouter')
carritoRouter = require('./routes/carritoRouter')
shopRouter = require('./routes/shopRouter')
adminRouter = require('./routes/adminRouter')
createRouter = require('./routes/createRouter')

app.use("/",indexRouter)
app.use("/login",loginRouter)
app.use("/registro", registroRouter)
app.use('/detalle', detalleRouter)
app.use('/carrito', carritoRouter)
app.use('/shop', shopRouter)
app.use('/admin', adminRouter)
app.use('/admin/create', createRouter)



app.listen(3000, () => {
    console.log("Se està ejecutando el servidor en el puerto 3000, genio")
} )

