// const cities = require('cities');
// let my_city = cities.zip_lookup(10003);
// console.log(my_city);


const express = require('express');
const PORT=5005;

let server = express();

server.get('/api/get',async (req, res)=>{
    let data = {
        name:'kuku',
        address:'po'
    }
    res.json(data)
});

server.get('/api/user/:id',async (req, res)=>{
    let {id}=req.params;

    let data = {
        name:'kuku ' + id,
        address:'po'
    }
    res.json(data)
});



server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});
