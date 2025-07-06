const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [
  { id: 1, nombre: "juan", pregunta: "nombre de tu perro", respuesta: "firulais" },
];

app.get('/', (req, res) => {
  res.send("API del backend funcionando correctamente");
});

app.post('/recuperar', (req, res) => {
  const { nombre, respuesta } = req.body;
  const usuario = usuarios.find(u => u.nombre === nombre);
  if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
  if (usuario.respuesta.toLowerCase() !== respuesta.toLowerCase()) {
    return res.status(401).json({
      error: "Detectado intento sospechoso, verificación suspendida",
      meme: "https://i.imgflip.com/4t0m5.jpg"
    });
  }
  res.json({ mensaje: "Respuesta correcta, puedes cambiar tu contraseña" });
});

app.listen(3001, () => {
  console.log("Servidor backend en http://localhost:3001");
});
