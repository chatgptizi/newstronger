import { HiOutlineUserAdd, HiOutlinePencilAlt, HiOutlinePaperAirplane } from 'react-icons/hi';

const steps = [
  {
    id: 1,
    name: 'Regístrate',
    description: 'Crea tu cuenta en menos de 2 minutos y accede a todas las funcionalidades de la plataforma.',
    icon: HiOutlineUserAdd,
  },
  {
    id: 2,
    name: 'Crea tu newsletter',
    description: 'Utiliza nuestro editor intuitivo y plantillas profesionales para diseñar newsletters atractivos.',
    icon: HiOutlinePencilAlt,
  },
  {
    id: 3,
    name: 'Envía y crece',
    description: 'Envía tu newsletter a tus suscriptores y analiza los resultados para mejorar constantemente.',
    icon: HiOutlinePaperAirplane,
  },
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="section bg-gray-50">
      <div className="container">
        <div className="lg:text-center">
          <h2 className="heading-lg text-gray-900">Cómo funciona</h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
            Tres sencillos pasos para empezar a crear newsletters efectivos que conecten con tu audiencia.
          </p>
        </div>

        <div className="mt-12">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {steps.map((step) => (
              <div key={step.id} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{step.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#"
            className="btn btn-primary"
          >
            Empieza ahora
          </a>
        </div>
      </div>
    </div>
  );
} 