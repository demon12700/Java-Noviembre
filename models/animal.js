import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  tipo: {
    type: String,
    required: true,
    trim: true // Ej: Perro, Gato, etc.
  },
  edad: {
    type: Number,
    required: false
  },
  dueño: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dueno",
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model("Animal", animalSchema);