const sections = ['absolute_advantage', 'comparative_advantage'];
let currentSectionIndex = 0;

function showSection(index) {
    // Hide all sections
    sections.forEach(id => document.getElementById(id).classList.remove('active'));
    // Show the selected section
    document.getElementById(sections[index]).classList.add('active');
}

function nextSection() {
    currentSectionIndex++;
    if (currentSectionIndex >= sections.length) {
        // Call StartTradeGo instead of looping
        document.getElementById('comparative_advantage').style.display = 'none';
        document.getElementById('nav-buttons').style.display = 'none';
        startTradeGo();
        return; // Exit the function
    }
    showSection(currentSectionIndex);
}

function prevSection() {
    currentSectionIndex--;
    if (currentSectionIndex < 0) {
        currentSectionIndex = sections.length - 1; // Loop back to the last section
    }
    showSection(currentSectionIndex);
}

