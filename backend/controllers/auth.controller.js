import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Die Passwörter stimmen nicht überein" });
        }

        const user = await User.findOne({ username });
        if (user) return res.status(400).json({ error: "Der Benutzer existiert bereits." });

        // Hachage du mot de passe
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const seed = encodeURIComponent(username);

        // On définit des styles différents selon le genre pour Lorelei (ou autre style)
        // 'top' et 'hair' sont des options que tu peux varier
        const boyOptions = encodeURIComponent('hair=short'); 
        const girlOptions = encodeURIComponent('hair=long');

        // Avatar aléatoire (API gratuite)
        const boyProfilePic = `https://api.dicebear.com/9.x/lorelei/svg?seed=${seed}&${boyOptions}`;

        const girlProfilePic = `https://api.dicebear.com/9.x/lorelei/svg?seed=${seed}&${girlOptions}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        if (newUser) {
            // Générer le jeton JWT ici
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({ error: "Ungültige Benutzerdaten" });
        }

        // Logique de création de compte à venir...
        res.status(201).json({ message: "Konto erfolgreich erstellt" });
    } catch (error) {
        console.log("Fehler im Signup-Controller", error.message);
        res.status(500).json({ error: "Interne Serverfehler" });
    }
};


export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // 1. Chercher l'utilisateur dans la base de données
        const user = await User.findOne({ username });

        // 2. Vérifier le mot de passe (Comparaison sécurisée avec Bcrypt)
        // Note : On utilise 'user?.password || ""' pour éviter les erreurs si l'utilisateur est nul
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Ungültiger Benutzername oder ungültiges Passwort" });
        }

        // 3. Générer le jeton JWT et définir le cookie
        generateTokenAndSetCookie(user._id, res);

        // 4. Réponse de succès
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });

    } catch (error) {
        console.log("Fehler im Login-Controller :", error.message);
        res.status(500).json({ error: "Interner Serverfehler" });
    }
};


export const logout = (req, res) => {
    try {
        // Remplacer le cookie JWT par une valeur vide et le faire expirer immédiatement
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Abmeldung erfolgreich" });
    } catch (error) {
        console.log("Fehler im Logout-Controller :", error.message);
        res.status(500).json({ error: "Interner Serverfehler" });
    }
};