import { User } from "../models/User.model.js";

let listUser = [];

function createUser(name, username, email, password){
    const newUser = new User(name, username, email, password);
    listUser.push(newUser);
    return newUser;
}

function getAllUsers(){
    return listUser;
}

function getUserById(id){
    let user = listUser.find(data => data.id === id);
    if(user){
        return user;
    }else{
        return "ID não encontrado!"
    }
}

function updateUsername(username, newUsername){
    let user = listUser.find(data => data.username === username);
    if(user){
        let userIndex = listUser.findIndex(data => data.username === username);
        listUser[userIndex].username = newUsername;
        return listUser[userIndex];
    }else{
        return "Username não encontrado!"
    }
}

function deleteUser(id, email, password){
    let user = listUser.find(data => data.id === id);
    if(user){
        let userIndex = listUser.findIndex(data => data.email === email && data.password === password);
        listUser.splice(userIndex, 1);
        return "Usuário deletado com sucesso!"
    }else{
        return "ID não encontrado!"
    }
}

export { createUser, getAllUsers, getUserById, updateUsername, deleteUser }