import express from "express";
import { 
  obtenerAnimales, 
  obtenerAnimalPorId, 
  crearAnimal, 
  actualizarAnimal, 
  eliminarAnimal 
} from "../controllers/animalController.js";

const router = express.Router();

router.get("/", obtenerAnimales);
router.get("/:id", obtenerAnimalPorId);
router.post("/", crearAnimal);
router.put("/:id", actualizarAnimal);
router.delete("/:id", eliminarAnimal);

export default router;