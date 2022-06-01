const mongoose = require('mongoose');

const DB_URL = "mongodb://localhost:27017/movies";

const connect = async () => {
    try {
        const dbConnection = await mongoose.connect(DB_URL);
        const { host, port, name } = dbConnection.connection;

        console.log(`Conectado con éxito a ${name} en ${host}:${port}`);
    } catch (error) {
        console.log('Error conectando a DB', error);
        
    }
};

module.exports = {
    connect
};
