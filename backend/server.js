require('dotenv').config();

const PORT = process.env.PORT;
const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
 
let arr = [
    {id:101,name:'sanu',age:22},
    {id:102,name:'ashu',age:20},
    {id:103,name:'kajal',age:21},
    {id:104,name:'rama',age:20},
    {id:105,name:'bipin',age:20},
    {id:106,name:'suman',age:23},
    {id:107,name:'nissan',age:20},
    {id:108,name:'rakesh',age:19},
    {id:109,name:'payal',age:21},
    {id:110,name:'manisha',age:23}
]


app.get("/api/data",(req, res)=>{
    res.json(arr);
});

app.listen(PORT,()=>{
    console.log("Server Started");
});