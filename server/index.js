const express = require("express");
const app = express()
const http = require("http")
const postRouter = require("./routes/postRouter")
const cors = require("cors")
const morgan = require("morgan")

const PORT = process.env.PORT || 8080
const server = http.createServer(app)


app.use(cors())
app.use(express.json());
app.use(morgan('tiny'))
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use("/posts", postRouter)
server.listen(PORT, () => {
    console.log(`Server ready at: http://localhost:${PORT}`)
})