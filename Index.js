import express from "express";
import dotenv from "dotenv";
import { conectarDB } from "./config/db.js";
const PORT = process.env.PORT || 3000;

// 1. Importar los archivos de rutas
import dueñoRoutes from "./routes/dueñoRoutes.js";
import animalRoutes from "./routes/animalRoutes.js";
import reporteRoutes from "./routes/reporteRoutes.js";
import especialistaRoutes from "./routes/especialistaRoutes.js";
import turnoRoutes from "./routes/turnoRoutes.js";
import reporteSistemaRoutes from "./routes/reporteSistemaRoutes.js";
import viewRoutes from "./routes/viewRoutes.js";

// Cargar variables de entorno
dotenv.config();

// Inicializar Express
const app = express();

// Conectar a la Base de Datos
conectarDB();

// Middlewares para leer datos de formularios y JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de Pug
app.set("view engine", "pug");
app.set("views", "./views");

// Ruta de prueba inicial
app.get("/", (req, res) => {
  res.send("Servidor de Veterinaria funcionando correctamente 🐾");
});
app.get("/vistas", (req, res) => {
  res.render("main/main");
});

// 2. Definir las rutas principales de la API
app.use("/dueños", dueñoRoutes);
app.use("/animales", animalRoutes);
app.use("/reportes", reporteRoutes);
app.use("/especialistas", especialistaRoutes);
app.use("/turnos", turnoRoutes);
app.use("/reportes-sistema", reporteSistemaRoutes);
app.use("/vistas", viewRoutes);

// Puerto de escucha
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/vistas`);
});