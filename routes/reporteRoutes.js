import express from "express";
import { 
  obtenerReportes, 
  obtenerReportePorId, 
  crearReporte, 
  actualizarReporte, 
  eliminarReporte 
} from "../controllers/reporteController.js";

const router = express.Router();

router.get("/", obtenerReportes);
router.get("/:id", obtenerReportePorId);
router.post("/", crearReporte);
router.put("/:id", actualizarReporte);
router.delete("/:id", eliminarReporte);

export default router;