module.exports = {
    createView: (req, res) => {
        /* res.sendFile(path.join(__dirname, '../views/carrito.html')) */
        res.render('create')
    }
}