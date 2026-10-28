import Animal from "../models/animal.js";

// Obtener todos
export const obtenerAnimales = async (req, res) => {
  try {
    const animales = await Animal.find().populate("dueño");
    res.json(animales);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los animales, " } + error.message) ;
  }
};

// Obtener uno por ID
export const obtenerAnimalPorId = async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id).populate("dueño");
    if (!animal) return res.status(404).json({ error: "Animal no encontrado" });
    res.json(animal);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el animal" });
  }
};

// Crear
export const crearAnimal = async (req, res) => {
  try {
    const nuevoAnimal = new Animal(req.body);
    await nuevoAnimal.save();
    res.status(201).json(nuevoAnimal);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el animal" });
  }
};

// Actualizar
export const actualizarAnimal = async (req, res) => {
  try {
    const animalActualizado = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!animalActualizado) return res.status(404).json({ error: "Animal no encontrado" });
    res.json(animalActualizado);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el animal" });
  }
};

// Eliminar
export const eliminarAnimal = async (req, res) => {
  try {
    const animalEliminado = await Animal.findByIdAndDelete(req.params.id);
    if (!animalEliminado) return res.status(404).json({ error: "Animal no encontrado" });
    res.json({ mensaje: "Animal eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el animal" });
  }
};