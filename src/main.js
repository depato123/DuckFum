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

app.use("/",indexRouter)
app.use("/login",loginRouter)

app.get("/registro", (req, res) => {
    res.sendFile(path.join(__dirname, './views/registro.html'))
})

app.get("/detalle", (req, res) => {
    res.sendFile(path.join(__dirname, './views/detalle.html'))
})

app.get("/carrito", (req, res) => {
    res.sendFile(path.join(__dirname, './views/carrito.html'))
})

app.get("/shop", (req, res) => {
    res.sendFile(path.join(__dirname, './views/shop.html'))
})


app.listen(3000, () => {
    console.log("Se està ejecutando el servidor en el puerto 3000, genio")
} )

