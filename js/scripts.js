document.addEventListener("DOMContentLoaded", function () {
    const headerTextElements = document.querySelectorAll("header tittle");

    headerTextElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = "";
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement("span");
            span.textContent = text[i];
            span.style.position = "relative";
            span.style.display = "inline-block";
            element.appendChild(span);
        }
    });

    function animateNeonEffect() {
        headerTextElements.forEach(element => {
            const spans = element.querySelectorAll("span");
            let neonPosition = 0;

            function animate() {
                spans.forEach((span, index) => {
                    span.style.textShadow = `
                        0 0 ${neonPosition === index ? 10 : 0}px rgba(255, 255, 255, 1),
                        0 0 ${neonPosition === index ? 20 : 0}px rgba(255, 255, 255, 1),
                        0 0 ${neonPosition === index ? 30 : 0}px rgba(255, 255, 255, 1),
                        0 0 ${neonPosition === index ? 40 : 0}px rgba(255, 255, 255, 1),
                        0 0 ${neonPosition === index ? 50 : 0}px rgba(255, 255, 255, 1)
                    `;
                });

                neonPosition = (neonPosition + 1) % spans.length;
                requestAnimationFrame(animate);
            }

            animate();
        });
    }

    animateNeonEffect();
});
