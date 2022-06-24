import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator.js"
import clientSchema from "../schemas/clientSchema.js";
import {clientOrders, postClient} from "../controllers/clientController.js"

const clientsRouter = Router();

clientsRouter.post("/clients", schemaValidator(clientSchema), postClient);
clientsRouter.get("/clients/:id/orders", clientOrders)

export default clientsRouter;