const express = require('express');
const app = express();
const port = 5000;

//GET
//greetings
app.get('/greetings', (request, response) => {
    
    return response.send(msg, "Hello Cynthia");
});

//list of friends
let friends = [
    {"id": 1, "name":"Nelly"},
    {"id": 2, "name":"Faith"},
    {"id": 3, "name":"Comfy"},
    {"id": 4, "name":"Cissy"}];


app.get('/list-of-friends', (request, response) => {
    return response.send(friends);
});

app.get('/list-of-friends-by-id/:id', (request, response) => {

    console.log("Logging request params", request.params);

    console.log("Use value from front end", request.params);

    
    return response.send(friends);
});



//classlist, id, std no, std name, 10
//let class = [
//     {"id":1, "studentno":"B27013", "studentname":"Cynthia"},
//     {"id":2, "studentno":"B27015", "studentname":"Cathy"},
//     {"id":3, "studentno":"B27086", "studentname":"Anitah"},
//     {"id":4, "studentno":"B28407", "studentname":"Daniel"},
//     {"id":5, "studentno":"B27293", "studentname":"Kica"},
//     {"id":6, "studentno":"B27098", "studentname":"Tracy"},
//     {"id":7, "studentno":"B27014", "studentname":"Joshua"},
//     {"id":8, "studentno":"B27056", "studentname":"Elijah"},
//     {"id":9, "studentno":"B27200", "studentname":"Justin"},
//     {"id":10, "studentno":"B27123", "studentname":"Joy"},
// ];

//print name of all students we use loops


app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});


