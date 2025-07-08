// src/middlewares/errorHandler.js

function errorHandler(err, req, res, next) {
  console.error('Global error handler:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    details: err.details || undefined,
  });
}

export default errorHandler;
