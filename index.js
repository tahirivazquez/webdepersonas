document.addEventListener("DOMContentLoaded", function () {
    const darkModeButton = document.getElementById("dark-mode");
    const searchInput = document.getElementById("searchInput");
    const botonBuscar = document.getElementById("botonBuscar");
    const listaPersonas = document.querySelector(".listaPersonas");

    let darkMode = localStorage.getItem("darkMode") || "light";
    document.querySelector("body").setAttribute("data-bs-theme", darkMode);

    async function mostrarPersonas() {
        listaPersonas.innerHTML = "";
        try {
            const response = await fetch('https://raw.githubusercontent.com/tahirivazquez/jsonpeople/main/db.json');
            if (response.ok) {
                const data = await response.json();
                data.forEach((persona, index) => {
                    const personaColumna = document.createElement("div");
                    personaColumna.className = "col-md-4";
                    const personaDiv = document.createElement("div");
                    personaDiv.className = "persona p-3";
                    personaDiv.innerHTML = `<p><strong>Nombre:</strong> ${persona.name}</p>
                                           <p><strong>Dirección:</strong> ${persona.address}</p>
                                           <p><strong>Teléfono:</strong> ${persona.phone}</p>`;
                    personaColumna.appendChild(personaDiv);
                    listaPersonas.appendChild(personaColumna);
                });
            } else {
                console.error('Error al cargar los datos');
            }
        } catch (error) {
            console.error('Error al cargar los datos:', error);
        }
    }

    darkModeButton.addEventListener('click', () => {
        darkMode = darkMode === "light" ? "dark" : "light";
        localStorage.setItem("darkMode", darkMode);
        document.querySelector("body").setAttribute("data-bs-theme", darkMode);
    });

    botonBuscar.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const personasDivs = document.querySelectorAll(".persona");
        personasDivs.forEach((personaDiv) => {
            const nombre = personaDiv.querySelector("p:nth-child(1)").textContent;
            const direccion = personaDiv.querySelector("p:nth-child(2)").textContent;
            if (nombre.toLowerCase().includes(searchTerm) || direccion.toLowerCase().includes(searchTerm)) {
                personaDiv.style.display = "block";
            } else {
                personaDiv.style.display = "none";
            }
        });
    });

    mostrarPersonas();
});