document.addEventListener("DOMContentLoaded", () => {
    // Dark Mode Toggle
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.background = "#0073e6";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "5px";
    toggleButton.style.cursor = "pointer";
    
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Add dark mode styles
    const style = document.createElement("style");
    style.textContent = `
        .dark-mode {
            background-color: #333;
            color: #fff;
        }
        .dark-mode .container {
            background-color: #444;
            color: #fff;
        }
        .dark-mode h1, 
        .dark-mode h2 {
            color: #4DB8FF;
        }
        .dark-mode a {
            color: #4DB8FF;
        }
    `;
    document.head.appendChild(style);

    // Copy Email to Clipboard
    const emailLink = document.querySelector(".contact-info a[href^='mailto']");
    if (emailLink) {
        const copyButton = document.createElement("button");
        copyButton.textContent = "Copy Email";
        copyButton.style.marginLeft = "10px";
        copyButton.style.padding = "5px 10px";
        copyButton.style.background = "#0073e6";
        copyButton.style.color = "white";
        copyButton.style.border = "none";
        copyButton.style.borderRadius = "5px";
        copyButton.style.cursor = "pointer";

        emailLink.parentNode.appendChild(copyButton);

        copyButton.addEventListener("click", () => {
            navigator.clipboard.writeText(emailLink.textContent.trim())
                .then(() => alert("Email copied to clipboard!"))
                .catch(err => console.error("Failed to copy email:", err));
        });
    }

    // Smooth Scrolling for Internal Links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
