const express= require('express');
const chalk= require('chalk');
const port =process.env.PORT|| 8080;
const app= express();


app.get('/',(req,res)=> res.send('Server root'));
app.get('/login', (req,res) => res.send ('Login page'));
app.post('/contact', (req,res) => res.json ({firstname:"Alf"}));
app.put('./contact' , (req,res) => res.send('Delete contact'));
app.delete('./contact', (req,res) => res.send('Delete contact'));

app.all('*',(req,res)=> res.send('Global handler for all routes'));

app.get ('/', (req,res) => {
    res.send(`<!doctype html>
    <html>
    <head></head>
    <body>
    <h1>Harel</h1>
    </body>
    </html>
                `);
});


// middelewere
app.all("*",(req,res,next) => {
    console.log('1-allRoute');
     next();
});

app.get("/",(req,res) => {
    console.log('2-getRoute');
    res.send({result:'WOW!'})
});

ex2:

app.get('/',(req,res) => res.json({"page":"index.html"}));
app.post('/category',(req,res) => res.json({"page": 'category.html'}));
app.put('/product',(req,res) => res.json({"page": 'product.html'}));

app.get('/user/:userId', (req,res) =>{
    res.send(`showif results for user: ${req.params.userId}`);
});



app.param("userId", (req,res,next,value) =>{
    console.log(`request recieved with useerId ${value}`);
    next();
});

// app.get("/user/:userId", (req))


app.use(express.json());

app.post('/savemusic', (req,res) =>{
    const {songs= []} =  req.body;

    console.log('Songs are: ',songs);

    res.json( {success:1} );
})
app.listen(port);

console.log(chalk.green` Express server Listenening to the port ${port}`);
