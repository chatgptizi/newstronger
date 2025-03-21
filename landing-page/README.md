# Landing Page para NewsletterPlatform

Una landing page minimalista para una plataforma de newsletters, creada con Next.js y Tailwind CSS.

## Características

- Diseño limpio y moderno usando Tailwind CSS
- Hero section con formulario de captura de emails
- Secciones de características, cómo funciona y testimonios
- Formulario de captura de emails conectado a Firebase
- Diseño completamente responsive

## Tecnologías utilizadas

- Next.js - Framework de React
- Tailwind CSS - Framework de estilos
- Firebase - Base de datos para almacenar suscripciones
- React Icons - Iconos para la interfaz

## Requisitos previos

- Node.js 14.6.0 o superior
- Una cuenta en Firebase

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/chatgptizi/newstronger.git
cd NewsletterPlatform/landing-page
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
   - Renombra el archivo `.env.local.example` a `.env.local`
   - Reemplaza los valores con tus credenciales de Firebase

4. Ejecuta el proyecto en modo desarrollo:
```bash
npm run dev
```

## Producción

Para construir el proyecto para producción:

```bash
npm run build
```

Para ejecutar la versión de producción:

```bash
npm start
```

## Despliegue

Esta aplicación se puede desplegar fácilmente en Vercel o Netlify.

### Despliegue en Vercel

```bash
npm install -g vercel
vercel
```

## Personalización

- Modifica los colores en el archivo `tailwind.config.js`
- Actualiza los textos en los componentes según tus necesidades
- Cambia las imágenes por tus propias imágenes 