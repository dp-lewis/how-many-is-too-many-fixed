document.addEventListener('DOMContentLoaded', () => {
    const immersive = document.querySelector('.immersive');
    const addBtn = document.getElementById('add-bg-btn');
    
    // Function to update the count display
    function updateCount() {
        const fixedElements = document.querySelectorAll('.fixed-bg');
        const count = fixedElements.length;
        let countDisplay = document.getElementById('fixed-count');
        countDisplay.textContent = `${count}`;
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

            // Create new fixed section
            const newSection = document.createElement('div');
            newSection.className = `fixed-bg bg-${bgNum}`;
            
            const content = document.createElement('div');
            content.className = 'content';
            
            // Get current count for section number
            const currentCount = document.querySelectorAll('.fixed-bg').length + 1;
            
            content.innerHTML = `
                <h2>Section ${currentCount}</h2>
                <p>Dynamically added section. Lorem ipsum dolor sit amet.</p>
            `;
            
            newSection.appendChild(content);
            
            immersive.appendChild(newSection);
            
            // Update count
            updateCount();
        });
    }
});
