import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d' // Le jeton expire dans 15 jours
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // Millisecondes
        httpOnly: true, // Empêche les attaques XSS (Cross-site scripting)
        sameSite: "strict", // Empêche les attaques CSRF (Cross-Site Request Forgery)
        secure: process.env.NODE_ENV !== "development",
    });
};


export default generateTokenAndSetCookie; 