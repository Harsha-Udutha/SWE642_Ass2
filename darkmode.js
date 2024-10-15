// HARSHA UDUTHA
// G01462111
document.getElementById("darkModeToggle").addEventListener("click", function() {
    // getting the required element from the document.
    const body = document.body;
    const header = document.querySelector('.gm-header');
    const footer = document.querySelector('.gm-footer');
    const tables = document.querySelectorAll('.gm-table th, .gm-table td');

    // turning the dark mode on for the header, tables, body and footer elements.
    body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
    tables.forEach(table => {
        table.classList.toggle("dark-mode");
    });


    // displaying the correct text for the darkmode button.
    this.textContent = body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});
