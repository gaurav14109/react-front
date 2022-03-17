const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.listen(3000, (err)=>{
    console.log('front application listening on port 3000')
})