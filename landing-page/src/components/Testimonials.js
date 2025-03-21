"use client";

import Image from 'next/image';
import { imagePlaceholders } from '../lib/placeholderImages';

export default function Testimonials() {
  return (
    <div id="testimonials" className="section bg-white">
      <div className="container">
        <h2 className="heading-lg text-center text-gray-900">Lo que dicen nuestros usuarios</h2>
        <div className="mt-12 space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8 bg-gradient-to-r from-primary-700 to-primary-600 sm:p-10 sm:pb-6">
              <div className="flex items-center">
                <div className="h-12 w-12 relative rounded-full overflow-hidden">
                  <Image
                    src={imagePlaceholders.avatarWoman1}
                    alt="Avatar de Ana García"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-white">Ana García</h3>
                  <p className="text-primary-200">Directora de Marketing, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="px-6 pb-8 pt-6 sm:p-10">
              <p className="text-base text-gray-700">
                "Gracias a NewsletterPlatform hemos aumentado nuestra tasa de apertura un 35%. La interfaz es muy intuitiva y las plantillas son realmente profesionales."
              </p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8 bg-gradient-to-r from-primary-700 to-primary-600 sm:p-10 sm:pb-6">
              <div className="flex items-center">
                <div className="h-12 w-12 relative rounded-full overflow-hidden">
                  <Image
                    src={imagePlaceholders.avatarMan1}
                    alt="Avatar de Carlos López"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-white">Carlos López</h3>
                  <p className="text-primary-200">Emprendedor</p>
                </div>
              </div>
            </div>
            <div className="px-6 pb-8 pt-6 sm:p-10">
              <p className="text-base text-gray-700">
                "He probado varias plataformas de newsletters y esta es, sin duda, la más completa y fácil de usar. El análisis de métricas me ha ayudado a mejorar mis campañas notablemente."
              </p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8 bg-gradient-to-r from-primary-700 to-primary-600 sm:p-10 sm:pb-6">
              <div className="flex items-center">
                <div className="h-12 w-12 relative rounded-full overflow-hidden">
                  <Image
                    src={imagePlaceholders.avatarWoman2}
                    alt="Avatar de Laura Martínez"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-white">Laura Martínez</h3>
                  <p className="text-primary-200">Blogger</p>
                </div>
              </div>
            </div>
            <div className="px-6 pb-8 pt-6 sm:p-10">
              <p className="text-base text-gray-700">
                "Desde que uso NewsletterPlatform mi base de suscriptores ha crecido un 40%. Las herramientas de segmentación son geniales para personalizar el contenido."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 