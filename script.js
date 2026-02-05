
const projects = [
    {
        name: "Decision Support System for The Best Goat Selection",
        desc: "Tech Stack: PHP, HTML, CSS, JavaScript, MySQL, Bootstrap. <br> A decision support system to determine the best livestock using the SMART (Simple Multi Attribute Rating Technique) method.",
        img: "img/goat.png" 
    },
    {
        name: "Decision Support System for The Best Cadre Selection",
        desc: "Tech Stack: PHP, HTML, CSS, JavaScript, MySQL, Bootstrap. <br> A decision support system to determine the best cadre using the SAW (Simple Additive Weighting) method.",
        img: "img/cadre.png" 
    },
    {
        name: "Decision Support System for The Class Leader Selection",
        desc: "Tech Stack: PHP, HTML, CSS, JavaScript, MySQL, Bootstrap. <br> A decision support system to determine the best class leader using the Multi Attribute Utility Theory method.",
        img: "img/class_leader.png" 
    }
];


const container = document.getElementById('project-container');

projects.forEach(proj => {
    const cardHTML = `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow">
                <img src="${proj.img}" class="card-img-top" alt="${proj.name}" style="height:220px; object-fit:cover;">
                <div class="card-body">
                    <h5 class="card-title fw-bold text-dark">${proj.name}</h5>
                    <p class="card-text text-secondary">${proj.desc}</p>
                </div>
            </div>
        </div>
    `;
    container.innerHTML += cardHTML;
});


function showGreetings() {
    const hours = new Date().getHours();
    let greeting;
    
    if (hours < 12) greeting = "Good Morning!";
    else if (hours < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";
    
    alert(greeting + "\n\nThank you for visiting my portfolio. Have a great day!");
}