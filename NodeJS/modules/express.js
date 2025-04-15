const express = require("express");

const port = 8080;

const app = express();

app.get("/home", (req, res) => {
    res.contentType("application/html");
    res.status(200).send("<h1>Hello World, this is Home</h1>")
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

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));