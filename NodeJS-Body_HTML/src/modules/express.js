// Importando Express
const express = require("express");
// Definindo a porta
const port = 8080;
// Importando o modelo de usuário
const UserModel = require("../models/user.model");
// Criando uma aplicação da função do Express
const app = express();
// Definindo middleware que todo documento enviado será por padrão JSON
app.use(express.json());


app.set("view engine", "ejs");
app.set("views", "src/views");

app.get("/views/users", async (req, res) => {
    const users = await UserModel.find({});

    res.render("index", { users: users });
})

// A função que escuta por requisições
app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));