const container = document.querySelector("#container");
const grid = document.querySelector("#grid");
const button = document.querySelector("#gridButton");

function makeGrid() {
    container.classList.add("active");
    grid.innerHTML = "";

    const width = Number(prompt("Enter width"));
    const height = Number(prompt("Enter height"));

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            const div = document.createElement("div");
            div.classList.add("square");

            div.style.width = `calc(100% / ${width})`;
            div.style.height = `calc(100% / ${height})`;

            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "red";
            });

            grid.appendChild(div);
        }
    }
}

button.addEventListener("click", makeGrid);