import { Router } from "express"; 
import { SettingsController } from "./src/controllers/SettingsController";
import { UserController } from "./src/controllers/UsersControllers";


const routes =  Router();
const settingsController = new SettingsController;
const usersController = new UserController;

routes.post("/settings", settingsController.create);
routes.post("/users",usersController.create);

export {routes};