// Este archivo proporciona un stub para simular Firebase
// en lugar de conectarse a un backend real

// Mock de Firestore para entorno estático
export const db = {
  // Función simulada para añadir documentos
  collection: (name) => ({
    // Función para simular almacenamiento de datos
    addDoc: async (data) => {
      console.log(`Simulando guardar en colección ${name}:`, data);
      return { id: "mock-id-" + Date.now() };
    }
  })
};

// Exportamos funciones simuladas para mantener compatibilidad con el código existente
export const collection = (db, name) => {
  console.log(`Accediendo a colección simulada: ${name}`);
  return { name };
};

export const addDoc = async (collectionRef, data) => {
  console.log(`Simulando añadir documento a ${collectionRef.name}:`, data);
  return { id: "mock-id-" + Date.now() };
}; 