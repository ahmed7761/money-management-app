const express = require('express')

const app = express()
app.get('/', (req, res) =>{
    res.json({
        message: "Welcome To Our App"
    })
})
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
