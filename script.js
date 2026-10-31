
/* =========================================
   ALVARO.DEV - MAIN JAVASCRIPT
========================================= */


/* =========================================
   1. CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const nameInput = document.getElementById("name");
        const status = document.getElementById("formStatus");

        if (!nameInput || !status) {
            return;
        }

        const name = nameInput.value.trim();

        if (name === "") {
            status.textContent = "Please enter your name.";
            return;
        }

        status.textContent =
            "Thank you, " + name + "! Your message was received.";

        contactForm.reset();

    });

}


/* =========================================
   2. ACTIVE NAVIGATION
========================================= */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {

        link.classList.add("active");

        link.setAttribute("aria-current", "page");

    }

});

/* =========================================
   3. DARK / LIGHT MODE
========================================= */

(function () {

    const themeToggleButton =
        document.getElementById("themeToggle");

    // Ambil tema yang pernah disimpan
    const savedTheme = localStorage.getItem("alvaro-theme");

    // Terapkan tema saat halaman dibuka
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }

    // Perbarui tulisan tombol
    function updateThemeButton() {

        if (!themeToggleButton) {
            return;
        }

        const isLightMode =
            document.body.classList.contains("light-mode");

        if (isLightMode) {
            themeToggleButton.textContent = "🌙 Dark Mode";
            themeToggleButton.setAttribute("aria-pressed", "true");
        } else {
            themeToggleButton.textContent = "☀️ Light Mode";
            themeToggleButton.setAttribute("aria-pressed", "false");
        }
    }

    // Tampilkan tombol sesuai tema
    updateThemeButton();

    // Ganti tema ketika tombol diklik
    if (themeToggleButton) {

        themeToggleButton.addEventListener("click", function () {

            document.body.classList.toggle("light-mode");

            const isLightMode =
                document.body.classList.contains("light-mode");

            // Simpan pilihan tema
            localStorage.setItem(
                "alvaro-theme",
                isLightMode ? "light" : "dark"
            );

            // Perbarui tombol
            updateThemeButton();

        });

    }

})();
