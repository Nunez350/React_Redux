const express = require("express");
const router = express.router();

router.get("/", async function(req,res,next){
    try {
        const results = await db.query("select * from table");
        return res.json(results.rows);
    } catch (err) {
        return next (err);
 }    
});

router.post("/", async function(req,res,next){
    try {
        cosnt result = await db.query(
            
        )
    }
})