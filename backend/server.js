import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectMongoDB from "./db/connectMongoDB.js";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5001;

const __dirname = path.resolve();

dotenv.config(); // Charge les variables du fichier .env

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Middleware pour servir les fichiers statiques du Frontend
app.use(express.static(path.join(__dirname, "/frontend/dist")));

// Route "Wildcard" : pour toute route non-API, renvoyer l'index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// app.get("/", (req, res) => {
//     res.send("Der Server ist bereit mesmin!");
// });


server.listen(PORT, () => {
  connectMongoDB();
    console.log(`Server gestartet auf Port ${PORT}`);
});