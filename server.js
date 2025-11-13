const express =  require('express');

const app = express();
const port = 8080;
app.set("view engine", "ejs")


app.get('/', (req, res) => {
    res.render("index.ejs",{
        itterations : 5
    })
})

app.get('/notes',(req,res)=>{
    res.render("notes.ejs",{
        notes
    })
})

app.get('/createNote',(req,res)=>{
    res.render("createNote.ejs")
})

app.get('/notes/:id',(req, res)=>{
    const id = +req.params.id   //  +  sign will make any variable to be treated as a number.
    const note = notes.find(note => note.id === id)
    if(!note){
        res.status(404).render("note404.ejs")
    }
    res.render('note.ejs',{note})
})

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`App is running on port http://localhost:${port}`)
})