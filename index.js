const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
const app = express()
  app.use(express.static(path.join(__dirname, './public')))
  app.use(express.json({limit:'1mb'}))
  
  let data;
  
 app.post('/',(req,res)=>{
    data = req.body
   console.log(data)
   res.json({
    "success":"200 response",
    "res":"You are now just talked with server" 
   })
  
 })
 
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
