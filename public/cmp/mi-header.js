class MiHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `
            <header>
              <nav class="shadow p-3 mb-5 rounded" style="margin-bottom: 5rem; padding: 1rem;">
                <div class="row justify-content-between">
                <div class="col-4">
                    <a class="navbar-brand" href="index.html">Agenda de Contactos</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="col-4">
                    <ul class="nav justify-content-end">
                      <li class="nav-item dropdown">
                      <a class="nav-link text-black" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                      <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item">
                      <button type="submit" class="btn text-black">Guardar</button>
                      </a>
                      </li>
                    </ul> 
                </div>
              </div>
              </nav>
            </header>
            `;
    }
}
customElements.define("mi-header", MiHeader);