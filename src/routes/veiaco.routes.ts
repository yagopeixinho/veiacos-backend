import { Router } from "express";
import { CreateVeiacoController } from "../controllers/veiaco/CreateVeiaco";
import { UpdateVeiacoController } from "../controllers/veiaco/UpdateVeiaco";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { GetVeiacoController } from "../controllers/veiaco/GetVeiaco";
import { DeleteVeiacoController } from "../controllers/veiaco/DeleteVeiaco";

export const veiacoRoutes = Router();

/****
 * Public routes */

/****
 * Private routes */

// GET
veiacoRoutes.get("/debts", isAuthenticated);
veiacoRoutes.get("/:id", isAuthenticated, new GetVeiacoController().handle);

// POST
veiacoRoutes.post("/", isAuthenticated, new CreateVeiacoController().handle);

// PUT
veiacoRoutes.put("/:id", isAuthenticated, new UpdateVeiacoController().handle);

// DELETE
veiacoRoutes.delete(
  "/:id",
  isAuthenticated,
  new DeleteVeiacoController().handle
);
