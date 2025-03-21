"use client";

import { HiOutlineMail, HiOutlineChartBar, HiOutlineTemplate, HiOutlineUserGroup } from 'react-icons/hi';

const features = [
  {
    name: 'Plantillas personalizables',
    description: 'Diseña newsletters profesionales fácilmente con nuestras plantillas totalmente personalizables.',
    icon: HiOutlineTemplate,
  },
  {
    name: 'Segmentación de audiencia',
    description: 'Divide tu audiencia y envía contenido relevante a cada grupo para aumentar la efectividad.',
    icon: HiOutlineUserGroup,
  },
  {
    name: 'Envíos automatizados',
    description: 'Programa tus envíos y olvídate. Nuestro sistema se encarga de enviar tus newsletters en el momento perfecto.',
    icon: HiOutlineMail,
  },
  {
    name: 'Análisis detallado',
    description: 'Analiza el rendimiento de tus newsletters con métricas detalladas de apertura, clics y conversiones.',
    icon: HiOutlineChartBar,
  },
];

export default function Features() {
  return (
    <div id="features" className="section bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="heading-lg text-gray-900">Características principales</h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
            Todo lo que necesitas para crear y gestionar newsletters efectivos que realmente conecten con tu audiencia.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 