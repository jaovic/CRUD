const express = require("express");
const todosRoutes = require("./todos.routes");

const app = express();

app.use(express.json());
app.use(todosRoutes);

app.get("/health", (req, res) =>{
    return res.jsson("up");
});

const PORT = 8080;

app.listen(PORT, () => {

    console.log(`Server runnir in port: ${PORT}`);
});