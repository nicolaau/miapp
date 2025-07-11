const formulario = document.querySelector(".form-create");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const publicacion = document.querySelector("#publicacion").value;
    const contenedor = document.querySelector(".contenedor-publicacion");
    contenedor.innerHTML += `<div class="publicacion">
            <p>id: 00</p>
            <p>${publicacion}</p>
            <button>editar</button>
            <button>eliminar</button>
        </div>`;
});