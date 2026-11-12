import mongoose from "mongoose";

const especialistaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  especializacion: {
    type: String,
    required: true,
    trim: true
  },
  telefono: {
    type: String,
    required: true,
    trim: true
  },
  estado: {
    type: String,
    enum: ["ACCESIBLE", "INACCESIBLE"],
    default: "ACCESIBLE"
  }
}, {
  timestamps: true
});

export default mongoose.model("Especialista", especialistaSchema);