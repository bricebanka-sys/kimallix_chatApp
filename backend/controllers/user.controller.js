

import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        // On cherche tous les utilisateurs SAUF celui qui est connecté
        // $ne signifie "Not Equal" (pas égal à)
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Fehler in getUsersForSidebar: ", error.message);
        res.status(500).json({ error: "Insterner Serverfehler" });
    }
};