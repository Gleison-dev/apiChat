import { v4 as uuidv4 } from "uuid";

class User{
    constructor(name, username, email, password){
        this.id = uuidv4();
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.created_at = new Date().toUTCString();
    }
}

export { User }