import express from "express";
import { 
  obtenerEspecialistas, 
  obtenerEspecialistaPorId, 
  crearEspecialista, 
  actualizarEspecialista, 
  eliminarEspecialista 
} from "../controllers/especialistaController.js";

const router = express.Router();

router.get("/", obtenerEspecialistas);
router.get("/:id", obtenerEspecialistaPorId);
router.post("/", crearEspecialista);
router.put("/:id", actualizarEspecialista);
router.delete("/:id", eliminarEspecialista);

export default router;