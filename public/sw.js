/* Este archivo debe estar colocado en la carpeta raíz del sitio.
 * cualquier cambio en el contenido de este archivo hace que el service worker
 * se reinstale. Normalmente se cambia el número en el nombre del caché cuando
 * cambia el contenido de los archivos. */
const CACHE = "agEnd-1.1";
/**  Archivos requeridos para que la aplicación funcione fuera de línea.
 * El archivo 404.html no se incluye porque causa un error 404. */
const ARCHIVOS = [
    "cmp/mi-footer.js",
    "cmp/mi-header.js",
    "css/estilos.css",
    "img/icono-256.png",
    "img/icono-1024.png",
    "img/icono-2048.png",
    "img/perfil-default.jpg",
    "favicon.ico",
    "index.html",
    "manifest.json",
    "__/firebase/7.15.5/firebase-app.js",
    "__/firebase/7.15.5/firebase-auth.js",
    "__/firebase/7.15.5/firebase-firestore.js",
    "__/firebase/7.15.5/firebase-storage.js",
    "__/firebase/init.js",
    '/'
];
self.addEventListener("install", evt => {
    console.log("Service Worker instalado.");
    // Realiza la instalación: carga los archivos requeridos en la caché.
    // @ts-ignore
    evt.waitUntil(cargaCache());
});
// Toma de la caché archivos solicitados. Si no están en caché, se descargan.
self.addEventListener("fetch", evt => {
    // @ts-ignore
    if (evt.request.method === "GET") {
        // @ts-ignore
        evt.respondWith(usaCache(evt));
    }
});
self.addEventListener("activate", () => console.log("Service Worker activo."));

async function cargaCache() {
    console.log("Intentando cargar cache: " + CACHE);
    const cache = await caches.open(CACHE);
    await cache.addAll(ARCHIVOS);
    console.log("Cache cargado: " + CACHE);
}

async function usaCache(evt) {
    const cache = await caches.open(CACHE);
    const response = await cache.match(evt.request, { ignoreSearch: true });
    if (response) {
        return response;
    } else {
        return fetch(evt.request);
    }
}