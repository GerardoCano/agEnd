class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `
            <blockquote class="blockquote text-center bg-light">
                <p class="mb-0">Aplicación para almacenar contactos</p>
                <footer class="blockquote-footer"><cite title="Source Title">Gerardo Cano Zamarripa</cite><footer>
            </blockquote>`;
    }
}
customElements.define("mi-footer", MiFooter);