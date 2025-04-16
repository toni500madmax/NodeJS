// Importando Express
const express = require("express");
// Definindo a porta
const port = 8080;
// Importando o modelo de usuário
const UserModel = require("../models/user.model");
// Criando uma aplicação da função do Express
const app = express();
// Definindo que todo documento enviado será por padrão JSON
app.use(express.json());

app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`);
    console.log(`Content Type: ${req.headers["content-type"]}`);
    console.log(`Body Object: ${JSON.stringify(req.body)}`);
    console.log(`Date: ${new Date()}`)
    next();
});

// Método Get de Users
app.get("/users", async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// Método Post de Users
app.post("/users", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    };
});

// Buscador de Usuários
app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);

        res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// Atualizar Usuário
// Método Patch: para atualização parcial de dados.
// Método Put: para atualizar todos os campos de dados.
app.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

// Deletar Usuário
app.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndDelete(id);

        res.status(200).json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

// A função que escuta por requisições
app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));