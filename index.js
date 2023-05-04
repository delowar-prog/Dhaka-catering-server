const express=require("express")
const app=express()
const port=5000
const cors=require('cors')
const chefsData=require('./data/chefsData.json')
const services=require('./data/services.json')
app.use(cors())
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})
app.get('/', (req,res)=>{
    res.send(chefsData)
})
app.get('/services',(req,res)=>{
    res.send(services)
})
app.get('/chef/:id', (req,res)=>{
    const id=parseInt(req.params.id)
    const selectedChef=chefsData.find(chef=>chef.id===id)
    res.send(selectedChef)
})