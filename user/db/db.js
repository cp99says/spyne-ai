require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');

class MongoDBConnectionPool {
    constructor(uri, poolSize = 20) {
        this.uri = uri;
        this.poolSize = poolSize;
        this.options = {
            maxPoolSize: this.poolSize, // Adjust pool size
        };
    }

    async connect() {
        try {
            await mongoose.connect(this.uri, this.options);
            console.log('MongoDB connected successfully');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            throw error;
        }
    }
}

const mongoDBConnectionPool = new MongoDBConnectionPool('mongodb+srv://cp99says:cp99says@cluster0.r2paftd.mongodb.net/SPYNE-AI?retryWrites=true&w=majority&appName=Cluster0');
mongoDBConnectionPool.connect();

module.exports = mongoDBConnectionPool;