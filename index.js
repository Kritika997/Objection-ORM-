const dbsetup = require("./db/db_setup");
const express = require("express");
const user = require("./db/models/user")

dbsetup();

const app = express();
app.use(express.json());

app.get('/user/:id',async(req,res,next)=>{
    try{
        const {id} = req.params;
        const data = await user.query().findById(id).withGraphFetched("channel")
        // console.log(data)
        res.json(data);
    }
    catch(err){
        console.error(err);
        res.status(500).json(err);
    };
});
app.listen(8000,()=>{
    console.log('server running on part 8000 ');
});