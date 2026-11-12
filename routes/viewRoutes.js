import express from "express";
import { 
  verDueños, 
  verAnimales, 
  verReportes, 
  verEspecialistas,
  verTurnos,
  verReportesSistema,
  renderCrearDueño, 
  guardarDueñoWeb, 
  renderCrearAnimal, 
  guardarAnimalWeb,
  renderCrearReporte,
  guardarReporteWeb,
  renderCrearEspecialista,
  guardarEspecialistaWeb,
  renderCrearTurno,
  guardarTurnoWeb,
  renderCrearReporteSistema,
  guardarReporteSistemaWeb
} from "../controllers/viewController.js";

const router = express.Router();

// Rutas de Listado
router.get("/duenos", verDueños);
router.get("/animales", verAnimales);
router.get("/reportes", verReportes);
router.get("/especialistas", verEspecialistas);
router.get("/turnos", verTurnos);
router.get("/reportes-sistema", verReportesSistema);

// Rutas para Crear Dueños
router.get("/duenos/nuevo", renderCrearDueño);
router.post("/duenos", guardarDueñoWeb);

// Rutas para Crear Animales
router.get("/animales/nuevo", renderCrearAnimal);
router.post("/animales", guardarAnimalWeb);

// Rutas para Crear Reportes
router.get("/reportes/nuevo", renderCrearReporte);
router.post("/reportes", guardarReporteWeb);

// Rutas para Crear Especialistas
router.get("/especialistas/nuevo", renderCrearEspecialista);
router.post("/especialistas", guardarEspecialistaWeb);

// Rutas para Crear Turnos
router.get("/turnos/nuevo", renderCrearTurno);
router.post("/turnos", guardarTurnoWeb);

// Rutas para Crear Reportes de Sistema
router.get("/reportes-sistema/nuevo", renderCrearReporteSistema);
router.post("/reportes-sistema", guardarReporteSistemaWeb);

export default router;