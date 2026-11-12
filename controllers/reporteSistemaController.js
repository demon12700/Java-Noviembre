import ReporteSistema from "../models/reporteSistema.js";

export const obtenerReportesSistema = async (req, res) => {
  try {
    const reportes = await ReporteSistema.find();
    res.json(reportes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los reportes del sistema" });
  }
};

export const obtenerReporteSistemaPorId = async (req, res) => {
  try {
    const reporte = await ReporteSistema.findById(req.params.id);
    if (!reporte) return res.status(404).json({ error: "Reporte de sistema no encontrado" });
    res.json(reporte);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el reporte del sistema" });
  }
};

export const crearReporteSistema = async (req, res) => {
  try {
    const nuevoReporte = new ReporteSistema(req.body);
    await nuevoReporte.save();
    res.status(201).json(nuevoReporte);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el reporte del sistema" });
  }
};

export const eliminarReporteSistema = async (req, res) => {
  try {
    const reporteEliminado = await ReporteSistema.findByIdAndDelete(req.params.id);
    if (!reporteEliminado) return res.status(404).json({ error: "Reporte de sistema no encontrado" });
    res.json({ mensaje: "Reporte de sistema eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el reporte del sistema" });
  }
};