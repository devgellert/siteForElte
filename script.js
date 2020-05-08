const text =
        document.querySelectorAll("#strat-text p");

text.forEach(p => {
    p.addEventListener('click', () => {
        p.className = "bigger";
    })
})
