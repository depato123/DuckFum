express = require("express")
app = express()
path = require("path")


app.use(express.static(__dirname.replace('src','public')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})


app.get("/registro", (req, res) => {
    res.sendFile(path.join(__dirname, './views/registro.html'))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.get("/detalle", (req, res) => {
    res.sendFile(path.join(__dirname, './views/detalle.html'))
})

app.get("/carrito", (req, res) => {
    res.sendFile(path.join(__dirname, './views/carrito.html'))
})



app.listen(3000, () => {
    console.log("Se està ejecutando el servidor en el puerto 3000, genio")
} )

