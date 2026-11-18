import express from "express";
import { 
  verMenu,
  verDueños, 
  verAnimales, 
  verReportes, 
  verEspecialistas,
  verTurnos,
  verReportesSistema,
  renderCrearDueño, 
  guardarDueñoWeb, 
  renderEditarDueño,
  actualizarDueñoWeb,
  eliminarDueñoWeb,
  renderCrearAnimal, 
  guardarAnimalWeb,
  renderEditarAnimal,
  actualizarAnimalWeb,
  eliminarAnimalWeb,
  renderCrearReporte,
  guardarReporteWeb,
  renderEditarReporte,
  actualizarReporteWeb,
  eliminarReporteWeb,
  renderCrearEspecialista,
  guardarEspecialistaWeb,
  renderEditarEspecialista,
  actualizarEspecialistaWeb,
  eliminarEspecialistaWeb,
  renderCrearTurno,
  guardarTurnoWeb,
  renderEditarTurno,
  actualizarTurnoWeb,
  eliminarTurnoWeb,
  renderCrearReporteSistema,
  guardarReporteSistemaWeb,
  renderEditarReporteSistema,
  actualizarReporteSistemaWeb,
  eliminarReporteSistemaWeb
} from "../controllers/viewController.js";

const router = express.Router();

// --- RUTAS DE LISTADOS ---
router.get("/vistas", verMenu);
router.get("/duenos", verDueños);
router.get("/animales", verAnimales);
router.get("/reportes", verReportes);
router.get("/especialistas", verEspecialistas);
router.get("/turnos", verTurnos);
router.get("/reportes-sistema", verReportesSistema);

// --- DUEÑOS ---
router.get("/duenos/nuevo", renderCrearDueño);
router.post("/duenos", guardarDueñoWeb);
router.get("/duenos/editar/:id", renderEditarDueño);
router.post("/duenos/editar/:id", actualizarDueñoWeb);
router.post("/duenos/eliminar/:id", eliminarDueñoWeb);

// --- ANIMALES ---
router.get("/animales/nuevo", renderCrearAnimal);
router.post("/animales", guardarAnimalWeb);
router.get("/animales/editar/:id", renderEditarAnimal);
router.post("/animales/editar/:id", actualizarAnimalWeb);
router.post("/animales/eliminar/:id", eliminarAnimalWeb);

// --- REPORTES MÉDICOS ---
router.get("/reportes/nuevo", renderCrearReporte);
router.post("/reportes", guardarReporteWeb);
router.get("/reportes/editar/:id", renderEditarReporte);
router.post("/reportes/editar/:id", actualizarReporteWeb);
router.post("/reportes/eliminar/:id", eliminarReporteWeb);

// --- ESPECIALISTAS ---
router.get("/especialistas/nuevo", renderCrearEspecialista);
router.post("/especialistas", guardarEspecialistaWeb);
router.get("/especialistas/editar/:id", renderEditarEspecialista);
router.post("/especialistas/editar/:id", actualizarEspecialistaWeb);
router.post("/especialistas/eliminar/:id", eliminarEspecialistaWeb);

// --- TURNOS ---
router.get("/turnos/nuevo", renderCrearTurno);
router.post("/turnos", guardarTurnoWeb);
router.get("/turnos/editar/:id", renderEditarTurno);
router.post("/turnos/editar/:id", actualizarTurnoWeb);
router.post("/turnos/eliminar/:id", eliminarTurnoWeb);

// --- REPORTES DE SISTEMA ---
router.get("/reportes-sistema/nuevo", renderCrearReporteSistema);
router.post("/reportes-sistema", guardarReporteSistemaWeb);
router.get("/reportes-sistema/editar/:id", renderEditarReporteSistema);
router.post("/reportes-sistema/editar/:id", actualizarReporteSistemaWeb);
router.post("/reportes-sistema/eliminar/:id", eliminarReporteSistemaWeb);

export default router;