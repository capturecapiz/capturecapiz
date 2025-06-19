const puzzleContainer = document.querySelector('.puzzle-container');
const puzzle = document.querySelector('.puzzle');
const mainImage = document.querySelector('#mainImage');
const moveCounterElement = document.querySelector('.moves');
const timerElement = document.querySelector('.timer');

// Initialize move counter and timer variables
let moveCount = 0;
let timeLimit = 3 * 60; // 3 minutes in seconds
let timerInterval;

// Get the selected image from localStorage
let selectedImage = localStorage.getItem('selectedImage');

// If no image is selected, redirect back to select-image.html
if (!selectedImage) {
    window.location.href = 'select-image.html';
} else {
    mainImage.src = selectedImage;
    setupPuzzle();
    startTimer(); // Start the countdown timer
}

function setupPuzzle() {
    puzzle.innerHTML = ''; // Clear any existing puzzle
    moveCount = 0; // Reset move counter
    updateMoveCounter(); // Update the move counter display

    let imagesArr = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let div = document.createElement("div");
            div.setAttribute("data-position", `${i}_${j}`);
            div.classList.add("image-container");

            const partNumber = imagesArr[i * 3 + j];
            const partImage = selectedImage.replace('main.jpg', `image_part_00${partNumber}.jpg`);
            div.innerHTML = `<img src="${partImage}" class="image ${
                partNumber === 9 ? "target" : ""
            }" data-index="${partNumber}"/>`;

            puzzle.appendChild(div);

            // Add event listeners for swipe interaction
            addSwipeListeners(div);
        }
    }
}

// Shuffle function to randomize the puzzle pieces
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function addSwipeListeners(element) {
    let startX, startY, endX, endY;

    element.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    element.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
        endY = e.touches[0].clientY;
    });

    element.addEventListener('touchend', () => {
        handleSwipe(startX, startY, endX, endY, element);
    });

    element.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        startY = e.clientY;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(e) {
        endX = e.clientX;
        endY = e.clientY;
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        handleSwipe(startX, startY, endX, endY, element);
    }
}

function handleSwipe(startX, startY, endX, endY, element) {
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    if (absDeltaX > absDeltaY) {
        // Horizontal swipe
        if (deltaX > 0) {
            // Swipe right
            movePiece(element, 'right');
        } else {
            // Swipe left
            movePiece(element, 'left');
        }
    } else {
        // Vertical swipe
        if (deltaY > 0) {
            // Swipe down
            movePiece(element, 'down');
        } else {
            // Swipe up
            movePiece(element, 'up');
        }
    }
}

function movePiece(element, direction) {
    const clickedPosition = element.getAttribute('data-position').split('_').map(Number);
    const targetPiece = document.querySelector('.target').closest('.image-container');
    const targetPosition = targetPiece.getAttribute('data-position').split('_').map(Number);

    let canMove = false;

    switch (direction) {
        case 'right':
            if (clickedPosition[0] === targetPosition[0] && clickedPosition[1] + 1 === targetPosition[1]) {
                canMove = true;
            }
            break;
        case 'left':
            if (clickedPosition[0] === targetPosition[0] && clickedPosition[1] - 1 === targetPosition[1]) {
                canMove = true;
            }
            break;
        case 'down':
            if (clickedPosition[1] === targetPosition[1] && clickedPosition[0] + 1 === targetPosition[0]) {
                canMove = true;
            }
            break;
        case 'up':
            if (clickedPosition[1] === targetPosition[1] && clickedPosition[0] - 1 === targetPosition[0]) {
                canMove = true;
            }
            break;
    }

    if (canMove) {
        swapPieces(element, targetPiece);
        incrementMoveCounter(); // Increment the move counter on each successful move
        checkIfSolved();
    }
}

function swapPieces(piece1, piece2) {
    const tempSrc = piece1.querySelector('img').src;
    const tempIndex = piece1.querySelector('img').dataset.index;

    piece1.querySelector('img').src = piece2.querySelector('img').src;
    piece1.querySelector('img').dataset.index = piece2.querySelector('img').dataset.index;

    piece2.querySelector('img').src = tempSrc;
    piece2.querySelector('img').dataset.index = tempIndex;

    piece1.querySelector('img').classList.toggle('target');
    piece2.querySelector('img').classList.toggle('target');
}

function incrementMoveCounter() {
    moveCount++;
    updateMoveCounter();
}

function updateMoveCounter() {
    moveCounterElement.textContent = `Moves: ${moveCount}`;
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLimit <= 0) {
            clearInterval(timerInterval);
            timesUp();
        } else {
            timeLimit--;
            updateTimerDisplay();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLimit / 60);
    const seconds = timeLimit % 60;
    timerElement.textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function timesUp() {
    // Show the custom modal
    const modal = document.getElementById('timesUpModal');
    modal.style.display = 'flex';

    // Add event listener to the "OK" button
    const okButton = document.getElementById('modalOkButton');
    okButton.addEventListener('click', () => {
        // Redirect to index.html after the player clicks "OK"
        window.location.href = 'index.html';
    });
}


function checkIfSolved() {
    const pieces = document.querySelectorAll('.image-container img');
    let isSolved = true;

    pieces.forEach((piece, index) => {
        if (parseInt(piece.dataset.index) !== index + 1) {
            isSolved = false;
        }
    });

    if (isSolved) {
        clearInterval(timerInterval); // Stop the timer if the puzzle is solved
        alert(`Congratulations, you solved the puzzle in ${moveCount} moves!`);
    }
}


// Disables scrolling during the game
function disableScrolling() {
    document.body.style.overflow = 'hidden';
}

function enableScrolling() {
    document.body.style.overflow = 'auto';
}

// Call disableScrolling when the game starts
window.onload = () => {
    disableScrolling();
    if (!selectedImage) {
        window.location.href = 'select-image.html';
    } else {
        mainImage.src = selectedImage;
        setupPuzzle();
        startTimer(); // Start the countdown timer
    }
};

// Ensure scrolling is disabled during the game
puzzle.addEventListener('touchstart', disableScrolling);
puzzle.addEventListener('touchmove', disableScrolling);
puzzle.addEventListener('touchend', disableScrolling);

// Optional: Enable scrolling when leaving the game page
window.addEventListener('beforeunload', enableScrolling);


// Back to Home button functionality
document.getElementById('backToIndex').addEventListener('click', function() {
    window.location.href = 'index.html';
});
