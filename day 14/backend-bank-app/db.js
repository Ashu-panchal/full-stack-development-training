import { MongoClient } from 'mongodb';

let db = null;

const CLUSTER_URL = "mongodb+srv://ashu:mmsFwRbmiJf4lEtS@cluster0.qppijem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(CLUSTER_URL);

// async makes a function asynchronous so we can use await
async function connectToDatabase(dbName) {
    if (db == null) {
        try {
            // await waits for MongoDB connection to finish before moving to the next line
            await client.connect();
            db = client.db(dbName);
            console.log("Database connected successfully");
        } catch (e) {
            console.error(`Database connection error: ${e.message}`);
        }
    } else {
        console.log("Database already connected");
    }
    return db;
}

export default connectToDatabase;
