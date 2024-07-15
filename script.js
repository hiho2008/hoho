function updateSeating() {
    const studentNumber = parseInt(document.getElementById('studentNumber').value);
    const horizontalLine = parseInt(document.getElementById('horizontalLine').value);

    const seatingArea = document.getElementById('seatingArea');
    seatingArea.innerHTML = '';

    const positions = Array.from({ length: studentNumber }, (_, i) => i + 1);
    shuffleArray(positions);

    seatingArea.style.gridTemplateColumns = `repeat(${horizontalLine}, 1fr)`;

    positions.forEach(position => {
        const seat = document.createElement('div');
        seat.className = 'seat';
        seat.textContent = `Seat ${position}`;
        seatingArea.appendChild(seat);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.addEventListener('DOMContentLoaded', updateSeating);

