const http = require("http");

// Definindo porta
const port = 8000;

// Criando servidor
const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Home page<h1/>");
    } else if (req.url === "/users") {
        const users = [
            {
                name: "Hester Morales",
                email: "hesles@email.com"
            },
            {
                name: "Lelia Drake",
                email: "lelisKe@email.com"
            }
        ]
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    }
});

server.listen(port, () => console.log(`Rodando na porta: ${port}!`));