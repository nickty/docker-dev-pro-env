const app = require('express')()

app.get('/', (req, res) => {
    res.send("Hi Mizan, noew work")
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("server is running"))