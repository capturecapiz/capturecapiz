const landingPage = document.querySelector('.landing-page');
const puzzleContainer = document.querySelector('.puzzle-container');
const puzzle = document.querySelector('.puzzle');
const mainImage = document.querySelector('#mainImage');

let selectedImage = localStorage.getItem('selectedImage') || '';

window.onload = () => {
    if (!selectedImage) {
        window.location.href = 'select-image.html';
    } else {
        mainImage.src = selectedImage;
        setupPuzzle();
    }
};

// Function to set up the puzzle grid
const setupPuzzle = () => {
    puzzle.innerHTML = ''; // Clear any existing puzzle

    // Array representing the positions of the puzzle pieces (1-9)
    let imagesArr = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let div = document.createElement("div");
            div.setAttribute("data-position", `${i}_${j}`);
            div.classList.add("image-container");

            const partNumber = imagesArr[i * 3 + j];
            div.innerHTML = `<img src="${selectedImage.replace('main.jpg', `image_part_00${partNumber}.jpg`)}" class="image ${
                partNumber === 9 ? "target" : ""
            }" data-index="${partNumber}"/>`;

            puzzle.appendChild(div);

            // Add event listeners for interaction
            div.addEventListener("click", handlePuzzleClick);
        }
    }
};

// Shuffle function to randomize the puzzle pieces
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to handle the click event on puzzle pieces
function handlePuzzleClick(e) {
    const clickedPiece = e.target.closest('.image-container');
    const targetPiece = document.querySelector('.target').closest('.image-container');

    if (canSwap(clickedPiece, targetPiece)) {
        swapPieces(clickedPiece, targetPiece);
        checkIfSolved();
    }
}

// Function to check if two pieces can be swapped
function canSwap(clickedPiece, targetPiece) {
    const clickedPosition = clickedPiece.getAttribute('data-position').split('_').map(Number);
    const targetPosition = targetPiece.getAttribute('data-position').split('_').map(Number);

    const rowDiff = Math.abs(clickedPosition[0] - targetPosition[0]);
    const colDiff = Math.abs(clickedPosition[1] - targetPosition[1]);

    // Pieces can be swapped if they are adjacent (one row or one column apart)
    return (rowDiff + colDiff === 1);
}

// Function to swap two pieces
function swapPieces(piece1, piece2) {
    const tempSrc = piece1.querySelector('img').src;
    const tempIndex = piece1.querySelector('img').dataset.index;

    piece1.querySelector('img').src = piece2.querySelector('img').src;
    piece1.querySelector('img').dataset.index = piece2.querySelector('img').dataset.index;

    piece2.querySelector('img').src = tempSrc;
    piece2.querySelector('img').dataset.index = tempIndex;
}

// Function to check if the puzzle is solved
function checkIfSolved() {
    const pieces = document.querySelectorAll('.image-container img');
    let isSolved = true;

    pieces.forEach((piece, index) => {
        if (parseInt(piece.dataset.index) !== index + 1) {
            isSolved = false;
        }
    });

    if (isSolved) {
        alert('Congratulations, you solved the puzzle!');
    }
}

const selectImageButton = document.querySelector('#selectImageButton');

// Event listener for the "Select Image" button
selectImageButton.addEventListener('click', () => {
    window.location.href = 'select-image.html'; // Ensure this path is correct
});


// Back to Home button functionality
document.getElementById('backToIndex').addEventListener('click', function() {
    window.location.href = '../index.html';
});
