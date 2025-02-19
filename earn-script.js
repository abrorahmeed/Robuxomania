// Do not touch this code unless to reset balance
// localStorage.removeItem('balance');

// Check if balance exists in localStorage, if not set it to 0
let balance = localStorage.getItem('balance');
if (!balance) {
    balance = 0;
    localStorage.setItem('balance', balance);
}

// Function to update the balance displayed on the page
function updateBalance() {
    document.getElementById('balance').textContent = balance;
}

// Event listener for task buttons
const taskButtons = document.querySelectorAll('.task-button');

taskButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get points associated with the clicked task button
        const points = parseInt(button.getAttribute('data-points'));
        
        // Add points to the current balance
        balance = parseInt(localStorage.getItem('balance')) + points;
        
        // Save the updated balance to localStorage
        localStorage.setItem('balance', balance);
        
        // Update the balance displayed on the page
        updateBalance();
    });
});

// Initialize the balance display when the page loads
updateBalance();

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0';
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
}

function closeSidebar() {
    document.querySelector('.sidebar').style.left = '-250px';
    document.querySelector('.overlay').style.display = 'none';
}