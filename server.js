var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var port = 3001;
app.use(bodyParser.json());
app.use(express.static(__dirname +'/' ));
app.use(bodyParser.urlencoded
    ({
        extended : true
    }))
var todos=[
    {
    id:1,
    name: "Begum",
    isDone :false
    },
    {
    id:2,
    name: "Esra",
    isDone :false
    },
    {
    id:3,
    name: "Duygu",
    isDone :false
    },
    {
    id:4,
    name: "Tolga",
    isDone :false}
];
app.use(express.static(__dirname +'/' ));
app.get('/todos',function(req, res) {
    res.send({todos:todos});
});
app.post('/todos',function(req,res)
{
    todos.push({
        name: req.body.name,
        id:req.body.id,
        isDone:false,
    });
    res.send(200);
});


app.delete('/todos/:id', function(req,res){
    var id = req.params.id;
    const index = todos.findIndex(todo => todo.id === Number(id));
    todos.splice(index, 1);

    res.send("Todo deleted")
})

/*app.delete('/todos',function(req,res)
{
    todos.push({
        name: req.body.name,
        isDone:false,
    });
    res.send(200);
});
*/
app.listen(port, () => console.log(3001));





