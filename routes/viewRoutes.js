import express from "express";
import { 
  verDueños, 
  verAnimales, 
  verReportes, 
  renderCrearDueño, 
  guardarDueñoWeb, 
  renderCrearAnimal, 
  guardarAnimalWeb,
  renderCrearReporte,
  guardarReporteWeb
} from "../controllers/viewController.js";

const router = express.Router();

// Rutas de Listado
router.get("/duenos", verDueños);
router.get("/animales", verAnimales);
router.get("/reportes", verReportes);

// Rutas para Crear Dueños
router.get("/duenos/nuevo", renderCrearDueño);
router.post("/duenos", guardarDueñoWeb);

// Rutas para Crear Animales
router.get("/animales/nuevo", renderCrearAnimal);
router.post("/animales", guardarAnimalWeb);

// Rutas para Crear Reportes
router.get("/reportes/nuevo", renderCrearReporte);
router.post("/reportes/nuevo", guardarReporteWeb);

export default router;