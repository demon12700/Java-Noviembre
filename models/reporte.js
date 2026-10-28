import mongoose from "mongoose";

const reporteSchema = new mongoose.Schema({
  animal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Animal",
    required: true
  },
  dueño: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dueno",
    required: true
  },
  contenido: {
    type: String,
    required: true,
    trim: true // Espacio para escribir información del reporte / diagnóstico / notas
  },
  fecha: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export default mongoose.model("Reporte", reporteSchema);