import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

// La route est "/" car elle est déjà préfixée par "/api/users" dans server.js
router.get("/", protectRoute, getUsersForSidebar);



export default router;