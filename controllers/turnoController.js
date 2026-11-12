import Turno from "../models/turno.js";

export const obtenerTurnos = async (req, res) => {
  try {
    const turnos = await Turno.find()
      .populate("animal")
      .populate("dueno")
      .populate("especialista");
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los turnos" });
  }
};

export const obtenerTurnoPorId = async (req, res) => {
  try {
    const turno = await Turno.findById(req.params.id)
      .populate("animal")
      .populate("dueno")
      .populate("especialista");
    if (!turno) return res.status(404).json({ error: "Turno no encontrado" });
    res.json(turno);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el turno" });
  }
};

export const crearTurno = async (req, res) => {
  try {
    const nuevoTurno = new Turno(req.body);
    await nuevoTurno.save();
    res.status(201).json(nuevoTurno);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el turno" });
  }
};

export const actualizarTurno = async (req, res) => {
  try {
    const turnoActualizado = await Turno.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!turnoActualizado) return res.status(404).json({ error: "Turno no encontrado" });
    res.json(turnoActualizado);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el turno" });
  }
};

export const eliminarTurno = async (req, res) => {
  try {
    const turnoEliminado = await Turno.findByIdAndDelete(req.params.id);
    if (!turnoEliminado) return res.status(404).json({ error: "Turno no encontrado" });
    res.json({ mensaje: "Turno eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el turno" });
  }
};