# Portfolio personal

Portfolio personal de Jaime Alejandro Vega Barbosa, estudiante de Ingenieria de Sistemas. El sitio presenta su perfil, intereses, proyectos y canales de contacto mediante una interfaz inspirada en terminales Linux.

## Tecnologias

- **React 19** para construir la interfaz con componentes reutilizables.
- **Vite** como herramienta de desarrollo y build de produccion.
- **JavaScript (ES modules)** para la logica de la aplicacion.
- **Tailwind CSS 4** para utilidades de layout y estilos responsive.
- **CSS personalizado** para la identidad visual, temas, fondos y responsive avanzado.
- **React Router** para la navegacion entre las vistas Sobre mi, Proyectos y Contacto.
- **Framer Motion** para las transiciones entre paginas.
- **ESLint** para revisar la calidad del codigo.
- **Google Fonts** con Manrope y DM Mono para la tipografia de la interfaz.

## Funcionalidades

- Tema claro y oscuro con preferencia guardada en `localStorage`.
- Terminal interactiva con animacion de escritura y datos de estilo fastfetch.
- Logo y datos de Ubuntu dentro de la terminal.
- Vista de proyectos con tarjetas responsive.
- Formulario de contacto con envio mediante WhatsApp o correo electronico.
- Enlaces a redes sociales y favicon personalizado.
- Navegacion responsive con menu para dispositivos moviles.

## Requisitos

- Node.js 18 o superior.
- npm.

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

La aplicacion estara disponible en la URL que indique Vite, normalmente `http://localhost:5173`.

## Build de produccion

```bash
npm run build
```

Para previsualizar el build:

```bash
npm run preview
```

## Estructura principal

```text
src/
	components/   Componentes reutilizables
	context/      Contexto del tema
	data/         Datos del perfil y terminal
	views/        Vistas principales de la aplicacion
	assets/       Imagenes, iconos y favicon
```
