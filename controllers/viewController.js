import Dueño from "../models/dueno.js";
import Animal from "../models/animal.js";
import Reporte from "../models/reporte.js";
import Especialista from "../models/especialista.js";
import Turno from "../models/turno.js";
import ReporteSistema from "../models/reporteSistema.js";

// ==================== MENU PRINCIPAL ====================
export const verMenu = async (req, res) => {
  try {
    res.render("main/main");
  } catch (error) {
    res.status(404).send("Error, no se pudo cargar el Menu.")
  }
}
// ==================== LISTADOS ====================
export const verDueños = async (req, res) => {
  try {
    const dueños = await Dueño.find();
    res.render("duenos/listar", { dueños });
  } catch (error) {
    res.status(500).send("Error al cargar dueños");
  }
};

export const verAnimales = async (req, res) => {
  try {
    const animales = await Animal.find().populate("dueño");
    res.render("animales/listar", { animales });
  } catch (error) {
    res.status(500).send("Error al cargar animales");
  }
};

export const verReportes = async (req, res) => {
  try {
    const reportes = await Reporte.find().populate("animal").populate("dueño");
    res.render("reportes/listar", { reportes });
  } catch (error) {
    res.status(500).send("Error al cargar reportes");
  }
};

export const verEspecialistas = async (req, res) => {
  try {
    const especialistas = await Especialista.find();
    res.render("especialistas/listarEspecialistas", { especialistas });
  } catch (error) {
    res.status(500).send("Error al cargar especialistas");
  }
};

export const verTurnos = async (req, res) => {
  try {
    const turnos = await Turno.find().populate("animal").populate("dueno").populate("especialista");
    res.render("turnos/listarTurnos", { turnos });
  } catch (error) {
    res.status(500).send("Error al cargar turnos");
  }
};

export const verReportesSistema = async (req, res) => {
  try {
    const reportesSistema = await ReporteSistema.find();
    res.render("reportesSistema/listarReportesSistema", { reportesSistema });
  } catch (error) {
    res.status(500).send("Error al cargar reportes de sistema");
  }
};

// ==================== DUEÑOS WEB ====================
export const renderCrearDueño = (req, res) => res.render("duenos/crear");

export const guardarDueñoWeb = async (req, res) => {
  try {
    await Dueño.create(req.body);
    res.redirect("/vistas/duenos");
  } catch (error) {
    res.status(400).send("Error al guardar dueño");
  }
};

export const renderEditarDueño = async (req, res) => {
  try {
    const dueño = await Dueño.findById(req.params.id);
    if (!dueño) return res.status(404).send("Dueño no encontrado");
    res.render("duenos/editar", { dueño });
  } catch (error) {
    res.status(500).send("Error al cargar el dueño");
  }
};

export const actualizarDueñoWeb = async (req, res) => {
  try {
    await Dueño.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
    res.redirect("/vistas/duenos");
  } catch (error) {
    res.status(400).send("Error al actualizar el dueño");
  }
};

export const eliminarDueñoWeb = async (req, res) => {
  try {
    await Dueño.findByIdAndDelete(req.params.id);
    res.redirect("/vistas/duenos");
  } catch (error) {
    res.status(500).send("Error al eliminar el dueño");
  }
};

// ==================== ANIMALES WEB ====================
export const renderCrearAnimal = async (req, res) => {
  try {
    const dueños = await Dueño.find();
    res.render("animales/crear", { dueños });
  } catch (error) {
    res.status(500).send("Error al cargar formulario de animal");
  }
};

export const guardarAnimalWeb = async (req, res) => {
  try {
    await Animal.create(req.body);
    res.redirect("/vistas/animales");
  } catch (error) {
    res.status(400).send("Error al guardar animal");
  }
};

export const renderEditarAnimal = async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    const dueños = await Dueño.find();
    if (!animal) return res.status(404).send("Animal no encontrado");
    res.render("animales/editar", { animal, dueños });
  } catch (error) {
    res.status(500).send("Error al cargar el animal");
  }
};

export const actualizarAnimalWeb = async (req, res) => {
  try {
    await Animal.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
    res.redirect("/vistas/animales");
  } catch (error) {
    res.status(400).send("Error al actualizar el animal");
  }
};

export const eliminarAnimalWeb = async (req, res) => {
  try {
    await Animal.findByIdAndDelete(req.params.id);
    res.redirect("/vistas/animales");
  } catch (error) {
    res.status(500).send("Error al eliminar el animal");
  }
};

// ==================== REPORTES MÉDICOS WEB ====================
export const renderCrearReporte = async (req, res) => {
  try {
    const animales = await Animal.find();
    const duenos = await Dueño.find();
    res.render("reportes/crear", { animales, duenos });
  } catch (error) {
    res.status(500).send("Error al cargar formulario de reporte");
  }
};

export const guardarReporteWeb = async (req, res) => {
  try {
    await Reporte.create(req.body);
    res.redirect("/vistas/reportes");
  } catch (error) {
    res.status(400).send("Error al guardar reporte");
  }
};

export const renderEditarReporte = async (req, res) => {
  try {
    const reporte = await Reporte.findById(req.params.id);
    const animales = await Animal.find();
    const duenos = await Dueño.find();
    if (!reporte) return res.status(404).send("Reporte no encontrado");
    res.render("reportes/editar", { reporte, animales, duenos });
  } catch (error) {
    res.status(500).send("Error al cargar el reporte");
  }
};

export const actualizarReporteWeb = async (req, res) => {
  try {
    await Reporte.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
    res.redirect("/vistas/reportes");
  } catch (error) {
    res.status(400).send("Error al actualizar el reporte");
  }
};

export const eliminarReporteWeb = async (req, res) => {
  try {
    await Reporte.findByIdAndDelete(req.params.id);
    res.redirect("/vistas/reportes");
  } catch (error) {
    res.status(500).send("Error al eliminar el reporte");
  }
};

// ==================== ESPECIALISTAS WEB ====================
export const renderCrearEspecialista = (req, res) => res.render("especialistas/crearEspecialistas");

export const guardarEspecialistaWeb = async (req, res) => {
  try {
    await Especialista.create(req.body);
    res.redirect("/vistas/especialistas");
  } catch (error) {
    res.status(400).send("Error al guardar especialista");
  }
};

export const renderEditarEspecialista = async (req, res) => {
  try {
    const especialista = await Especialista.findById(req.params.id);
    if (!especialista) return res.status(404).send("Especialista no encontrado");
    res.render("especialistas/editarEspecialistas", { especialista });
  } catch (error) {
    res.status(500).send("Error al cargar el especialista");
  }
};

export const actualizarEspecialistaWeb = async (req, res) => {
  try {
    await Especialista.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
    res.redirect("/vistas/especialistas");
  } catch (error) {
    res.status(400).send("Error al actualizar el especialista");
  }
};

export const eliminarEspecialistaWeb = async (req, res) => {
  try {
    await Especialista.findByIdAndDelete(req.params.id);
    res.redirect("/vistas/especialistas");
  } catch (error) {
    res.status(500).send("Error al eliminar el especialista");
  }
};

// ==================== TURNOS WEB ====================
export const renderCrearTurno = async (req, res) => {
  try {
    const animales = await Animal.find();
    const duenos = await Dueño.find();
    const especialistas = await Especialista.find();
    res.render("turnos/crearTurnos", { animales, duenos, especialistas });
  } catch (error) {
    res.status(500).send("Error al cargar formulario de turno");
  }
};

export const guardarTurnoWeb = async (req, res) => {
  try {
    await Turno.create(req.body);
    res.redirect("/vistas/turnos");
  } catch (error) {
    res.status(400).send("Error al guardar turno");
  }
};

export const renderEditarTurno = async (req, res) => {
  try {
    const turno = await Turno.findById(req.params.id);
    const animales = await Animal.find();
    const duenos = await Dueño.find();
    const especialistas = await Especialista.find();
    if (!turno) return res.status(404).send("Turno no encontrado");
    res.render("turnos/editarTurnos", { turno, animales, duenos, especialistas });
  } catch (error) {
    res.status(500).send("Error al cargar el turno");
  }
};

export const actualizarTurnoWeb = async (req, res) => {
  try {
    await Turno.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
    res.redirect("/vistas/turnos");
  } catch (error) {
    res.status(400).send("Error al actualizar el turno");
  }
};

export const eliminarTurnoWeb = async (req, res) => {
  try {
    await Turno.findByIdAndDelete(req.params.id);
    res.redirect("/vistas/turnos");
  } catch (error) {
    res.status(500).send("Error al eliminar el turno");
  }
};

// ==================== REPORTES DE SISTEMA WEB ====================
export const renderCrearReporteSistema = async (req, res) => {
  try {
    const [totalAnimales, totalDuenos, totalReportes] = await Promise.all([
      Animal.countDocuments(),
      Dueño.countDocuments(),
      Reporte.countDocuments()
    ]);

    res.render("reportesSistema/crearReportesSistema", {
      totalAnimales,
      totalDuenos,
      totalReportes
    });
  } catch (error) {
    console.error("Error al obtener los totales para el reporte:", error);
    res.status(500).send("Error interno del servidor");
  }
};

export const guardarReporteSistemaWeb = async (req, res) => {
  try {
    await ReporteSistema.create(req.body);
    res.redirect("/vistas/reportes-sistema");
  } catch (error) {
    res.status(400).send("Error al guardar reporte de sistema");
  }
};

export const renderEditarReporteSistema = async (req, res) => {
  try {
    const reporteSistema = await ReporteSistema.findById(req.params.id);
    if (!reporteSistema) return res.status(404).send("Reporte de sistema no encontrado");
    res.render("reportesSistema/editarReportesSistema", { reporteSistema });
  } catch (error) {
    res.status(500).send("Error al cargar el reporte para editar");
  }
};

export const actualizarReporteSistemaWeb = async (req, res) => {
  try {
    await ReporteSistema.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
    res.redirect("/vistas/reportes-sistema");
  } catch (error) {
    res.status(400).send("Error al actualizar el reporte de sistema");
  }
};

export const eliminarReporteSistemaWeb = async (req, res) => {
  try {
    await ReporteSistema.findByIdAndDelete(req.params.id);
    res.redirect("/vistas/reportes-sistema");
  } catch (error) {
    res.status(500).send("Error al eliminar el reporte de sistema");
  }
};