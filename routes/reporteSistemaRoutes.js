import express from "express";
import { 
  obtenerReportesSistema, 
  obtenerReporteSistemaPorId, 
  crearReporteSistema, 
  eliminarReporteSistema 
} from "../controllers/reporteSistemaController.js";

const router = express.Router();

router.get("/", obtenerReportesSistema);
router.get("/:id", obtenerReporteSistemaPorId);
router.post("/", crearReporteSistema);
router.delete("/:id", eliminarReporteSistema);

export default router;