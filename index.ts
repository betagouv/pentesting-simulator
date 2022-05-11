import Express from "express"

const app = Express();

app.get("/", (_, res) => {
    res.send(`Hello !`)
})

app.listen(3001, () => {
    console.log(`Server is running on port 3001`)
})