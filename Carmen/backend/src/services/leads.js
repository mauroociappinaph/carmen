// Servicio para crear un lead (mock)
const crearLeadService = async data => {
  // Aquí irá la lógica real de guardado en la base de datos
  return {
    mensaje: 'Lead creado correctamente (mock)',
    data,
  };
};

module.exports = { crearLeadService };
