import express from "express";
import { 
  obtenerDueños, 
  obtenerDueñoPorId, 
  crearDueño, 
  actualizarDueño, 
  eliminarDueño 
} from "../controllers/dueñoController.js";

const router = express.Router();

router.get("/", obtenerDueños);
router.get("/:id", obtenerDueñoPorId);
router.post("/", crearDueño);
router.put("/:id", actualizarDueño);
router.delete("/:id", eliminarDueño);

export default router;