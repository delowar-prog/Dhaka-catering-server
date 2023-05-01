const express=require("express")
const app=express()
const port=5000
const cors=require('cors')
const chefsData=require('./data/chefsData.json')
app.use(cors())
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})
app.get('/', (req,res)=>{
    res.send(chefsData)
})