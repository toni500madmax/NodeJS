const fs = require("fs");
const path = require("path");

// Criar uma pasta
/* fs.mkdir(path.join(__dirname, "/Teste"), (error) => {
    if (error) {
        console.log("Erro: ", error);
    }
    console.log("Pasta criada com sucesso!")
}); 

// Criar arquivo
fs.writeFile(path.join(__dirname, "/Teste", "indexTeste.txt"), "Hello world", (error) => {
    if (error) {
        return console.log("Erro: ", error);
    }

    console.log("Arquivo criado com sucesso!");
}); */

// Adicionar à um arquivo
/* fs.appendFile(path.join(__dirname, "/Teste", "indexTeste.txt"), "Hello World 2!", (error) => {
    if (error) {
        return console.log("Erro: ", error);
    }

    console.log("Arquivo modificado com sucesso!")
}) */

// Ler arquivos
fs.readFile(path.join(__dirname, "/Teste", "indexTeste.txt"), "utf8", (error, data) => {
    if (error) {
        return console.log("Erro: ", error);
    }
    console.log(data);
});