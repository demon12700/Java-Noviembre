import Dueño from "../models/dueño.js";
import Animal from "../models/animal.js";
import Reporte from "../models/reporte.js";

// --- DUEÑOS ---
export const verDueños = async (req, res) => {
  try {
    const dueños = await Dueño.find();
    res.render("duenos/listar", { dueños });
  } catch (error) {
    res.status(500).send(`Error al cargar los dueños: ${error.message}`);
  }
};

export const renderCrearDueño = (req, res) => {
  res.render("duenos/crear");
};

export const guardarDueñoWeb = async (req, res) => {
  try {
    const nuevoDueño = new Dueño(req.body);
    await nuevoDueño.save();
    res.redirect("/vistas/duenos");
  } catch (error) {
    res.status(400).send(`Error al guardar el dueño: ${error.message}`);
  }
};

// --- ANIMALES ---
export const verAnimales = async (req, res) => {
  try {
    const animales = await Animal.find().populate("dueño");
    res.render("animales/listar", { animales });
  } catch (error) {
    res.status(500).send(`Error al cargar los animales: ${error.message}`);
  }
};

export const renderCrearAnimal = async (req, res) => {
  try {
    const dueños = await Dueño.find();
    res.render("animales/crear", { dueños });
  } catch (error) {
    res.status(500).send(`Error al cargar el formulario: ${error.message}`);
  }
};

export const guardarAnimalWeb = async (req, res) => {
  try {
    const nuevoAnimal = new Animal(req.body);
    await nuevoAnimal.save();
    res.redirect("/vistas/animales");
  } catch (error) {
    res.status(400).send(`Error al guardar el animal: ${error.message}`);
  }
};

// --- REPORTES ---
export const verReportes = async (req, res) => {
  try {
    const reportes = await Reporte.find().populate("animal").populate("dueño");
    res.render("reportes/listar", { reportes });
  } catch (error) {
    res.status(500).send(`Error al cargar los reportes: ${error.message}`);
  }
};

export const renderCrearReporte = async (req, res) => {
  try {
    const animales = await Animal.find();
    const duenos = await Dueño.find();
    res.render("reportes/crear", { animales, duenos });
  } catch (error) {
    res.status(500).send(`Error al cargar el formulario de reportes: ${error.message}`);
  }
};

export const guardarReporteWeb = async (req, res) => {
  try {
    const nuevoReporte = new Reporte(req.body);
    await nuevoReporte.save();
    res.redirect("/vistas/reportes");
  } catch (error) {
    res.status(400).send(`Error al guardar el reporte: ${error.message}`);
  }
};