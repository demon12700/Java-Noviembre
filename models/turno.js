import mongoose from "mongoose";

const turnoSchema = new mongoose.Schema({
  fechaTurno: {
    type: Date,
    required: true
  },
  animal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Animal",
    required: true
  },
  dueno: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dueno",
    required: true
  },
  especialista: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Especialista",
    required: true
  },
  observaciones: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.model("Turno", turnoSchema);