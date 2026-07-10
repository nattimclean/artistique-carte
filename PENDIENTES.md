# Artistique Carte — sitio web (español, fase 1)

Sitio estático listo para GitHub + Vercel. Español primero; inglés y francés en la siguiente fase.

## Estructura

- /                  redirige al idioma (por ahora /es/)
- /es/               Home
- /es/impresion      Página de Impresión
- /es/digital        Página de Presencia Digital
- /assets/styles.css sistema de diseño compartido
- /assets/site.js    animaciones + envío de formularios
- /vercel.json       cleanUrls (URLs sin .html)
- /sitemap.xml, /robots.txt

## Datos de relleno temporales (REEMPLAZAR)

Se pusieron datos provisionales para poder publicar. Cambiar cuando estén los reales:

- WhatsApp: https://wa.me/16470000000  → número inventado. Reemplazar por el real.
- Instagram: https://instagram.com/artistiquecarte → usuario asumido. Confirmar.
- Correo: artistique.carte@gmail.com → provisional (dato entregado por Natti).
- Formularios (access_key): "REEMPLAZAR_ACCESS_KEY" en los 4 formularios.
  Crear la clave gratis en https://web3forms.com con el correo artistique.carte@gmail.com,
  copiar el Access Key y reemplazarlo en es/index.html (2 formularios), es/impresion.html y es/digital.html.
- Dominio: canonical/hreflang/sitemap usan artistique-carte.vercel.app. Ajustar si el proyecto queda con otro nombre.
- Guía gratis (PDF): el formulario captura el correo; falta subir el PDF y programar el envío.
- Opulence México: confirmar permiso para usarla como caso.

## Siguiente fase

- Traducir a inglés (/en/) y francés (/fr/).
- Activar detección de idioma en /index.html (líneas comentadas).
- Añadir hreflang entre los 3 idiomas.
- Integrar agenda (Calendly u otra) si se decide usarla.

