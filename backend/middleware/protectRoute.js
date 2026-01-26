import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) return res.status(401).json({ error: "Nicht autorisiert - Kein Token vorhanden" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) return res.status(401).json({ error: "Nicht autorisiert - Ungültiger Token" });

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) return res.status(404).json({ error: "Benutzer nicht gefunden" });

        req.user = user; // On ajoute l'utilisateur à l'objet request
        next(); // On passe à la fonction suivante (le controller)
    } catch (error) {
        res.status(500).json({ error: "Interner Serverfehler" });
    }
};




export default protectRoute;