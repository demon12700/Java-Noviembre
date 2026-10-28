import Reporte from "../models/reporte.js";

// Obtener todos
export const obtenerReportes = async (req, res) => {
  try {
    const reportes = await Reporte.find()
      .populate("animal")
      .populate("dueño");
    res.json(reportes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los reportes" });
  }
};

// Obtener uno por ID
export const obtenerReportePorId = async (req, res) => {
  try {
    const reporte = await Reporte.findById(req.params.id)
      .populate("animal")
      .populate("dueño");
    if (!reporte) return res.status(404).json({ error: "Reporte no encontrado" });
    res.json(reporte);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el reporte" });
  }
};

// Crear
export const crearReporte = async (req, res) => {
  try {
    const nuevoReporte = new Reporte(req.body);
    await nuevoReporte.save();
    res.status(201).json(nuevoReporte);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el reporte" });
  }
};

// Actualizar
export const actualizarReporte = async (req, res) => {
  try {
    const reporteActualizado = await Reporte.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!reporteActualizado) return res.status(404).json({ error: "Reporte no encontrado" });
    res.json(reporteActualizado);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el reporte" });
  }
};

// Eliminar
export const eliminarReporte = async (req, res) => {
  try {
    const reporteEliminado = await Reporte.findByIdAndDelete(req.params.id);
    if (!reporteEliminado) return res.status(404).json({ error: "Reporte no encontrado" });
    res.json({ mensaje: "Reporte eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el reporte" });
  }
};