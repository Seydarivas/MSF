document.getElementById('surpriseButton').addEventListener('click', function() {
    const surprise = document.getElementById('surprise');
    const surpriseImage = document.getElementById('surpriseImage');
    surprise.classList.toggle('hidden');
    surpriseImage.classList.toggle('hidden'); // Muestra u oculta la imagen
});

