const monsters = [
    {
        class: "Swamp Beast Diplomat",
        level: 5,
        health: 100
    }
]


document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelector(".stats")

    monsters.forEach(block => {
        stats.innerHTML = `
            <p class="classValue"><strong>Class:</strong> ${block.class}</p>
            <p class="levelValue"><strong>Level:</strong> ${block.level}</p>
            <p class="healthValue"><strong>Health:</strong> ${block.health}</p>
        `;
    })
})

document.querySelector(".attacked").addEventListener("click", function() {
    monsters[0].health -= 20
    // const healthValue = document.querySelector(".healthValue")
    document.querySelector(".healthValue").innerHTML = `<p class="healthValue"><strong>Health:</strong> ${monsters[0].health}</p>`
})

document.querySelector(".levelUp").addEventListener("click", function() {
    monsters[0].level += 1
    document.querySelector(".levelValue").innerHTML = `<p class="levelValue"><strong>Level:</strong> ${monsters[0].level}</p>`
})