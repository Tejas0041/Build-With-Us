const express= require('express');
const app= express();
const path= require('path');

app.set('engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.render('index.ejs');
});

app.get('/problemstatement1', (req, res)=>{
    res.send('problemstatement1.pdf');
})

app.listen(8080, ()=>{
    console.log("Server started successfully at port 8080");
})
