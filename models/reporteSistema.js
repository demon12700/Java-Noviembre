import mongoose from "mongoose";

const reporteSistemaSchema = new mongoose.Schema({
  fechaGeneracion: {
    type: Date,
    default: Date.now
  },
  totalAnimales: {
    type: Number,
    required: true
  },
  totalDuenos: {
    type: Number,
    required: true
  },
  totalReportes: {
    type: Number,
    required: true
  },
  observaciones: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.model("ReporteSistema", reporteSistemaSchema);