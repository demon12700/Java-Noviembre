import mongoose from "mongoose";

const duenoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  telefono: {
    type: String,
    required: true,
    trim: true
  },
  correo: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }
}, {
  timestamps: true
});

export default mongoose.model("Dueno", duenoSchema);