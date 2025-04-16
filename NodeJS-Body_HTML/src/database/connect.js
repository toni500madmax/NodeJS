const mongoose = require("mongoose");

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.wlxpv2k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(success => console.log("Conexão bem sucedida!")).catch(error => console.log("Error: ", error))
}

module.exports = connectToDatabase;