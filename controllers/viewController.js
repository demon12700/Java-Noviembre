import Dueño from "../models/dueno.js";
import Animal from "../models/animal.js";
import Reporte from "../models/reporte.js";
import Especialista from "../models/especialista.js";
import Turno from "../models/turno.js";
import ReporteSistema from "../models/reporteSistema.js";

// Listados
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
    res.render("reportesSistema/listar", { reportesSistema });
  } catch (error) {
    res.status(500).send("Error al cargar reportes de sistema");
  }
};

// Dueños Web
export const renderCrearDueño = (req, res) => res.render("dueños/crear");
export const guardarDueñoWeb = async (req, res) => {
  try {
    await Dueño.create(req.body);
    res.redirect("/vistas/duenos");
  } catch (error) {
    res.status(400).send("Error al guardar dueño");
  }
};

// Animales Web
export const renderCrearAnimal = async (req, res) => {
  try {
    const dueños = await Dueño.find();
    res.render("animales/crear", { dueños });
  } catch (error) {
    res.status(500).send("Error");
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

// Reportes Web
export const renderCrearReporte = async (req, res) => {
  try {
    const animales = await Animal.find();
    const duenos = await Dueño.find();
    res.render("reportes/crear", { animales, duenos });
  } catch (error) {
    res.status(500).send("Error");
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

// Especialistas Web
export const renderCrearEspecialista = (req, res) => res.render("especialistas/crearEspecialistas");
export const guardarEspecialistaWeb = async (req, res) => {
  try {
    await Especialista.create(req.body);
    res.redirect("/vistas/especialistas");
  } catch (error) {
    res.status(400).send("Error al guardar especialista");
  }
};

// Turnos Web
export const renderCrearTurno = async (req, res) => {
  try {
    const animales = await Animal.find();
    const duenos = await Dueño.find();
    const especialistas = await Especialista.find();
    res.render("turnos/crearTurnos", { animales, duenos, especialistas });
  } catch (error) {
    res.status(500).send("Error");
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

// Reportes de Sistema Web
export const renderCrearReporteSistema = (req, res) => res.render("reportesSistema/crear");
export const guardarReporteSistemaWeb = async (req, res) => {
  try {
    await ReporteSistema.create(req.body);
    res.redirect("/vistas/reportes-sistema");
  } catch (error) {
    res.status(400).send("Error al guardar reporte de sistema");
  }
};