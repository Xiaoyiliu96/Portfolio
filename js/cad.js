// 1. Define your labels in order (1 to 16)
const labels = [
    "EXPLODED COMPONENT HIERARCHY", 
    "Standard Parts List",
    "Combination", 
    "Base 2D", 
    "Base 3D",
    "End Bracket 2D", 
    "End Bracket 3D", 
    "Center Plate 2D",
    "Center Plate 3D",
    "Hex Head Bolt 2D", 
    "Hex Head Bolt 3D", 
    "Flat Head Bolt 2D", 
    "Flat Head Bolt 3D", 
    "Hex Nut 2D", 
    "Hex Nut 3D",
    "FINAL RENDER"
];

const container = document.getElementById('blueprint-container');
const totalImages = 16;
let htmlContent = '';

// 2. Loop to generate the 16 sections
for (let i = 1; i <= totalImages; i++) {
    const count = String(i).padStart(2, '0');
    const totalCount = String(totalImages).padStart(2, '0');
    // Using backslashes as per your file path: images\cad\CAD_1.jpg
    const imgSrc = `images/cad/CAD_${i}.jpg`; 
    const label = labels[i - 1] || `TECHNICAL VIEW ${count}`;

    htmlContent += `
        <section class="blueprint-section">
            <div class="image-frame">
                <img src="${imgSrc}" alt="${label}" loading="lazy">
            </div>
            <div class="image-info">
                <span class="counter">${count}/${totalCount}</span>
                <span class="label">${label}</span>
            </div>
        </section>
    `;
}

// 3. Inject into the DOM
container.innerHTML = htmlContent;

// --- Your existing Menu Logic ---
const navOverlay = document.getElementById('navOverlay');
document.getElementById('menuBtn').addEventListener('click', () => navOverlay.classList.add('active'));
document.getElementById('closeBtn').addEventListener('click', () => navOverlay.classList.remove('active'));

document.querySelectorAll('.nav-content a').forEach(link => {
    link.addEventListener('click', () => navOverlay.classList.remove('active'));
});