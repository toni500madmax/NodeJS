const express = require("express");

const port = 8080;

const UserModel = require("../models/user.model");

const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
    res.contentType("application/html");
    res.status(200).send("<h1>Hello World, this is Home</h1>");
});

app.get("/users", (req, res) => {
    const users = [
        {
            name: "Hester Morales",
            email: "hesles@email.com"
        },
        {
            name: "Lelia Drake",
            email: "lelisKe@email.com"
        }
    ];

    res.status(200).json(users);
});

app.post("./users", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    };
});

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));