import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus({
        type: 'error',
        message: 'Por favor, introduce un email válido'
      });
      return;
    }
    
    try {
      setLoading(true);
      await addDoc(collection(db, 'subscribers'), {
        email,
        createdAt: new Date()
      });
      
      setEmail('');
      setStatus({
        type: 'success',
        message: '¡Gracias! Tu correo ha sido registrado correctamente.'
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      setStatus({
        type: 'error',
        message: 'Ha ocurrido un error. Por favor, inténtalo de nuevo.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section bg-primary-700">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg text-white">¿Listo para mejorar tus newsletters?</h2>
          <p className="mt-4 text-lg text-primary-100">
            Únete a los miles de creadores que ya están utilizando nuestra plataforma para conectar con su audiencia de forma efectiva.
          </p>
          <div className="mt-8 sm:w-full sm:max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="sm:flex">
              <label htmlFor="cta-email" className="sr-only">
                Dirección de email
              </label>
              <input
                id="cta-email"
                name="cta-email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                placeholder="Tu dirección de email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-700 focus:ring-white"
                  disabled={loading}
                >
                  {loading ? 'Procesando...' : 'Empezar gratis'}
                </button>
              </div>
            </form>
            {status.message && (
              <div className={`mt-2 text-sm ${status.type === 'error' ? 'text-red-200' : 'text-green-200'}`}>
                {status.message}
              </div>
            )}
            <p className="mt-3 text-sm text-primary-200">
              Prueba gratuita por 14 días. No se requiere tarjeta de crédito.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 