"use client";

import { FiTwitter, FiInstagram, FiFacebook, FiGithub } from 'react-icons/fi';

const navigation = {
  producto: [
    { name: 'Características', href: '#features' },
    { name: 'Precios', href: '#' },
    { name: 'Recursos', href: '#' },
    { name: 'Tutoriales', href: '#' },
  ],
  soporte: [
    { name: 'Ayuda', href: '#' },
    { name: 'Centro de soporte', href: '#' },
    { name: 'Contacto', href: '#' },
    { name: 'Estado', href: '#' },
  ],
  empresa: [
    { name: 'Sobre nosotros', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Empleo', href: '#' },
    { name: 'Prensa', href: '#' },
  ],
  legal: [
    { name: 'Política de privacidad', href: '#' },
    { name: 'Términos de uso', href: '#' },
    { name: 'Cookies', href: '#' },
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: FiTwitter,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: FiInstagram,
    },
    {
      name: 'Facebook',
      href: '#',
      icon: FiFacebook,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: FiGithub,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <a href="#" className="text-2xl font-bold text-white">
              NewsletterPlatform
            </a>
            <p className="text-gray-300 text-base">
              La plataforma definitiva para crear, gestionar y enviar newsletters efectivos.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Producto</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.producto.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Soporte</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.soporte.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Empresa</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.empresa.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} NewsletterPlatform. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 