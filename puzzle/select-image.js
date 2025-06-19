const imageSelectionContainer = document.querySelector('.image-selection-container');
const backButton = document.querySelector('#backButton');
const imageFolders = ["images/", "images 1/", "images 2/"];

// Load images dynamically
const loadImages = () => {
    imageFolders.forEach(folder => {
        const img = document.createElement('img');
        img.src = `${folder}main.jpg`; // Correct path
        img.alt = `Puzzle Image from ${folder}`;
        img.dataset.image = img.src;
        img.addEventListener('click', () => {
            localStorage.setItem('selectedImage', img.src);
            window.location.href = 'puzzle.html'; // Redirect to puzzle.html
        });
        imageSelectionContainer.appendChild(img);
    });
};

backButton.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirect to index.html
});

window.onload = loadImages;
