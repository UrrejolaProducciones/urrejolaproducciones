
# Entregas de Fotografía – Template (Andrea Urrejola)

Sitio estático gratuito para entregar galerías elegantes con PIN y descargas en ZIP.
Pensado para GitHub Pages.

## Cómo usar
1) Crea un repositorio con este contenido y habilita GitHub Pages (branch `main`, carpeta `/`).
2) Duplica la carpeta `albums/ejemplo-0702263` para cada nueva pareja.
3) En `album.json` define: título, fecha, PIN (por entrega), descripción y enlaces.
4) Sube tus **previews** con marca de agua en `/images`.
5) Define el enlace de descarga del ZIP (expira a los 30 días).
6) Actualiza `albums.json` (en raíz) para listar tus entregas.

## Estructura
- index.html → Landing de álbum
- gallery.html → Galería con PIN y lightbox
- /albums/<slug>/album.json → Metadatos de cada entrega
- /assets/js/pin.js → Lógica de PIN
- /assets/js/gallery.js → Carga de imágenes y lightbox

## Notas
- Las imágenes mostradas son **previews** con marca de agua. Las descargas ZIP son los archivos sin marca.
- Recomendado: previews 3000–4000 px lado largo (WebP/JPEG 85–92). Descargas: JPEG máx.
- El PIN se valida en el cliente (no hay servidor). No uses PINs ultra sensibles.
- Para enlaces de descarga que expiren: usa Cloudflare R2 (Signed URLs) o similar.
