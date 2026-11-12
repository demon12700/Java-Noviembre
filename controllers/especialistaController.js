import Especialista from "../models/especialista.js";

export const obtenerEspecialistas = async (req, res) => {
  try {
    const especialistas = await Especialista.find();
    res.json(especialistas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los especialistas" });
  }
};

export const obtenerEspecialistaPorId = async (req, res) => {
  try {
    const especialista = await Especialista.findById(req.params.id);
    if (!especialista) return res.status(404).json({ error: "Especialista no encontrado" });
    res.json(especialista);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el especialista" });
  }
};

export const crearEspecialista = async (req, res) => {
  try {
    const nuevoEspecialista = new Especialista(req.body);
    await nuevoEspecialista.save();
    res.status(201).json(nuevoEspecialista);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el especialista" });
  }
};

export const actualizarEspecialista = async (req, res) => {
  try {
    const especialistaActualizado = await Especialista.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!especialistaActualizado) return res.status(404).json({ error: "Especialista no encontrado" });
    res.json(especialistaActualizado);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el especialista" });
  }
};

export const eliminarEspecialista = async (req, res) => {
  try {
    const especialistaEliminado = await Especialista.findByIdAndDelete(req.params.id);
    if (!especialistaEliminado) return res.status(404).json({ error: "Especialista no encontrado" });
    res.json({ mensaje: "Especialista eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el especialista" });
  }
};