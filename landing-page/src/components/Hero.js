"use client";

import { useState } from 'react';
import Image from 'next/image';
import { imagePlaceholders } from '../lib/placeholderImages';

export default function Hero() {
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
      // Simulamos el guardado del email
      console.log("Email registrado:", email);
      
      // Esperar un poco para simular el proceso
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setEmail('');
      setStatus({
        type: 'success',
        message: '¡Gracias! Tu correo ha sido registrado correctamente.'
      });
    } catch (error) {
      console.error('Error simulado', error);
      setStatus({
        type: 'error',
        message: 'Ha ocurrido un error. Por favor, inténtalo de nuevo.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#" className="text-2xl font-bold text-primary-600">
                    NewsletterPlatform
                  </a>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <a href="#features" className="font-medium text-gray-500 hover:text-gray-900">
                  Características
                </a>
                <a href="#how-it-works" className="font-medium text-gray-500 hover:text-gray-900">
                  Cómo funciona
                </a>
                <a href="#testimonials" className="font-medium text-gray-500 hover:text-gray-900">
                  Testimonios
                </a>
              </div>
            </nav>
          </div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="heading-xl text-gray-900">
                <span className="block">Aumenta tus suscriptores</span>{' '}
                <span className="block text-primary-600">con newsletters atractivos</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                La plataforma más sencilla para crear, gestionar y enviar newsletters que conectan con tu audiencia. Aumenta tus suscriptores, fideliza a tus lectores.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="w-full">
                  <form onSubmit={handleSubmit} className="sm:flex">
                    <label htmlFor="email-address" className="sr-only">
                      Dirección de email
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs rounded-md"
                      placeholder="Tu dirección de email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                    />
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <button
                        type="submit"
                        className="btn btn-primary w-full"
                        disabled={loading}
                      >
                        {loading ? 'Procesando...' : 'Regístrate gratis'}
                      </button>
                    </div>
                  </form>
                  {status.message && (
                    <div className={`mt-2 text-sm ${status.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                      {status.message}
                    </div>
                  )}
                  <p className="mt-3 text-xs text-gray-500">
                    Al registrarte, aceptas nuestra{' '}
                    <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                      Política de Privacidad
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-100">
        <div className="h-56 w-full relative sm:h-72 md:h-96 lg:w-full lg:h-full">
          <Image 
            src={imagePlaceholders.teamWorking}
            alt="Equipo de trabajo"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
    </div>
  );
} 