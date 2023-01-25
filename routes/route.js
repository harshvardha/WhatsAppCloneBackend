import { Router } from "express";
import { addUser, getUsers } from "../controller/UserController.js";

const router = Router();

router.post("/addUser", addUser);
router.get("/users", getUsers);

export default router;