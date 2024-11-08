// Verifica si el contador existe en el almacenamiento local; si no, inicia en 0
let likeCount = localStorage.getItem('likeCount') !== null ? parseInt(localStorage.getItem('likeCount')) : 0;
let isLiked = localStorage.getItem('isLiked') === 'true'; // true si el usuario ya dio "Me gusta"

const likeButton = document.getElementById('likeButton');
const likeCountDisplay = document.getElementById('likeCount');

// Muestra el valor inicial en el botón y establece el estado visual
likeCountDisplay.textContent = likeCount;
if (isLiked) {
    likeButton.classList.add('liked');
}

// Agrega un evento de clic al botón
likeButton.addEventListener('click', () => {
    if (isLiked) {
        likeCount--; // Resta uno si el usuario quita su "Me gusta"
        likeButton.classList.remove('liked'); // Cambia el estilo a no marcado
    } else {
        likeCount++; // Suma uno si el usuario da "Me gusta"
        likeButton.classList.add('liked'); // Cambia el estilo a marcado
    }

    isLiked = !isLiked; // Cambia el estado de "Me gusta"
    likeCountDisplay.textContent = likeCount; // Actualiza el número en pantalla

    // Guarda el nuevo valor en el almacenamiento local
    localStorage.setItem('likeCount', likeCount);
    localStorage.setItem('isLiked', isLiked);
});
// Limpia los valores de "likeCount" e "isLiked" en el almacenamiento local
