import { Router } from "express";
import { 
    createUser,
    getAllUsers,
    getUserById,
    updateUsername,
    deleteUser
 } from "../controllers/user.controller.js";

 const userRoute = Router();

 userRoute.post("/new-user", (req, res) => {
    const { name, username, email, password } = req.body;
    const newUser = createUser(name, username, email, password);
    res.status(201).json({newUser});
 });

 userRoute.get("/users", (req, res) => {
    const users = getAllUsers();
    res.json({users});
 });

userRoute.get("/user-findId/:id", (req, res) => {
    let id = req.params.id;
    const userFindId = getUserById(id);
    res.json({userFindId});
});

userRoute.patch("/update-username", (req, res) => {
    const { username, password, newUsername } = req.body;
    const usernameUpdate = updateUsername(username, password, newUsername);
    res.json({usernameUpdate});
});

userRoute.delete("/delete-user/:id", (req, res) => {
    let id = req.params.id;
    const { email, password } = req.body;
    const delUser = deleteUser(id, email, password);
    res.json({delUser});
});

 export { userRoute }