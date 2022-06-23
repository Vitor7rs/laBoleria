import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator.js"
import clientSchema from "../schemas/clientSchema.js";
import {postClient} from "../controllers/clientController.js"

const clientsRouter = Router();

clientsRouter.post("/clients", schemaValidator(clientSchema), postClient);
clientsRouter.get("/clients/:id/orders")

export default clientsRouter;