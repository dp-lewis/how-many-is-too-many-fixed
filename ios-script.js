// iOS Compatible Script
console.log('iOS Compatible Script Loaded');

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('immersive-container');
    const addBtn = document.getElementById('add-bg-btn');
    const countDisplay = document.getElementById('fixed-count');

    // Function to update the count display
    function updateCount() {
        const immersiveElements = document.querySelectorAll('.immersive');
        if (countDisplay) {
            countDisplay.textContent = `${immersiveElements.length}`;
        }
    }

    // Initial count
    updateCount();

    // Add button event listener
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            // Get input value
            const bgInput = document.getElementById('bg-num-input');
            let bgNum = parseInt(bgInput.value);

            // Validate input, fallback to random if invalid
            if (!bgNum || bgNum < 1 || bgNum > 10) {
                bgNum = Math.floor(Math.random() * 10) + 1;
            }

            // Create new immersive section
            const newSection = document.createElement('div');
            newSection.className = 'immersive';
            
            // Get current count for section number
            const currentCount = document.querySelectorAll('.immersive').length + 1;
            
            newSection.innerHTML = `
                <div class="immersive-background">
                    <div class="immersive-background_image immersive-background_image--fixed bg-${bgNum}">
                    </div>
                </div>
                <div class="immersive-content">
                    <h2>Immersive Block Title ${currentCount}</h2>
                </div>
            `;
            
            container.appendChild(newSection);
            
            // Update count
            updateCount();
        });
    }
});
