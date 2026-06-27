// Screen Entrance Transition Gate
function revealMainPage() {
    const gate = document.getElementById('landing-gate');
    const main = document.getElementById('main-content');
    
    gate.classList.add('opacity-0', 'pointer-events-none');
    main.classList.remove('opacity-0', 'pointer-events-none');
    
    setTimeout(() => {
        gate.style.display = 'none';
    }, 1000);
}

// Scratch to Reveal Interaction Engine with Multi-Blast Confetti 
function scratchCardReveal() {
    document.getElementById('scratch-overlay-text').classList.add('hidden');
    document.getElementById('scratched-content').classList.remove('hidden');
    
    // Confetti burst
    confetti({
        particleCount: 140,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#60a5fa', '#34d399', '#fb7185', '#fbbf24']
    });
}

// Rating Modal Controls
function toggleRatingModal(show) {
    const modal = document.getElementById('rating-modal');
    modal.style.display = show ? 'flex' : 'none';
}

// Score Process Confirmation Handler
function submitRating(score) {
    toggleRatingModal(false);
    alert(`Thank you so much! You gave this surprise a beautiful ${score}/10! 🎉🩵`);
    
    // Left-Right celebratory spray explosion
    confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0, y: 0.8 } });
    confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1, y: 0.8 } });
}
