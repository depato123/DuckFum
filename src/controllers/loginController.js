module.exports = {
    loginView : (req, res) =>{
        res.sendFile(path.join(__dirname, '../views/login.html'))
    }
}