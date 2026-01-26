import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        // console.log(`MongoDB verbunden : ${conn.connection.host}`);
        console.log("Mit MongoDB verbunden");
    } catch (error) {
        console.error(`Verbindungsfehler : ${error.message}`);
        process.exit(1); // Arrête le processus en cas d'échec
    }
};


export default connectMongoDB;
