import Dueño from "../models/dueno.js";

// Obtener todos
export const obtenerDueños = async (req, res) => {
  try {
    const dueños = await Dueño.find();
    res.json(dueños);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los dueños" });
  }
};

// Obtener uno por ID
export const obtenerDueñoPorId = async (req, res) => {
  try {
    const dueño = await Dueño.findById(req.params.id);
    if (!dueño) return res.status(404).json({ error: "Dueño no encontrado" });
    res.json(dueño);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el dueño" });
  }
};

// Crear
export const crearDueño = async (req, res) => {
  try {
    const nuevoDueño = new Dueño(req.body);
    await nuevoDueño.save();
    res.status(201).json(nuevoDueño);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el dueño" });
  }
};

// Actualizar
export const actualizarDueño = async (req, res) => {
  try {
    const dueñoActualizado = await Dueño.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!dueñoActualizado) return res.status(404).json({ error: "Dueño no encontrado" });
    res.json(dueñoActualizado);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el dueño" });
  }
};

// Eliminar
export const eliminarDueño = async (req, res) => {
  try {
    const dueñoEliminado = await Dueño.findByIdAndDelete(req.params.id);
    if (!dueñoEliminado) return res.status(404).json({ error: "Dueño no encontrado" });
    res.json({ mensaje: "Dueño eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el dueño" });
  }
};