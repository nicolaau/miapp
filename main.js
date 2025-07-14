const formulario = document.querySelector(".form-create");
let contador = 0;
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const publicacion = document.querySelector("#publicacion").value;
    const contenedor = document.querySelector(".contenedor-publicacion");
    contenedor.innerHTML += `<div class="publicacion">
            <p>id: ${contador}</p>
            <p>${publicacion}</p>
            <button>editar</button>
            <button>eliminar</button>
        </div>`;
        contador++;
});