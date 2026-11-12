import express from "express";
import { 
  obtenerTurnos, 
  obtenerTurnoPorId, 
  crearTurno, 
  actualizarTurno, 
  eliminarTurno 
} from "../controllers/turnoController.js";

const router = express.Router();

router.get("/", obtenerTurnos);
router.get("/:id", obtenerTurnoPorId);
router.post("/", crearTurno);
router.put("/:id", actualizarTurno);
router.delete("/:id", eliminarTurno);

export default router;