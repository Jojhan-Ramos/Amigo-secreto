
// Amigo secreto
let amigos = [];
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    if (nombre !== "") {
        listaAmigos.push(nombre);
        ulListaAmigos.innerHTML += `<li>${nombre}</li>`;
        inputAmigo.value = ""; // Limpiar el input
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        ulResultado.innerHTML = "<li>No hay amigos en la lista.</li>";
        return;
    }

    const randomIndex = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[randomIndex];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

