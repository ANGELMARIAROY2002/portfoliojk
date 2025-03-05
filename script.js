document.addEventListener("DOMContentLoaded", () => {
    // Redirect email link
    document.querySelector('a[href="mailto:jalantjoseph007@gmail.com"]').addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "mailto:jalantjoseph007@gmail.com";
    });
   //download cv
    document.getElementById("downloadBtn").addEventListener("click", function() {
        alert("Downloading CV...");
    });
    // Redirect phone number link
    document.querySelector('a[href="tel:+917356097736"]').addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "tel:+917356097736";
    });

    // Redirect LinkedIn in a new tab
    document.querySelector('a[href="https://www.linkedin.com/in/jalant-joseph-k-0482092"]').addEventListener("click", function (event) {
        event.preventDefault();
        window.open("https://www.linkedin.com/in/jalant-joseph-k-0482092", "_blank");
    });

    // Redirect Behance 
    let behanceLink = document.querySelector('a[href="https://www.behance.net/gallery/220727601/Concepts-Texturing-and-lighting"]'); 
    if (behanceLink) {
        behanceLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("https://www.behance.net/gallery/220727601/Concepts-Texturing-and-lighting", "_blank"); 
        });
    }

    // Redirect Instagram (if link is available)
    let instagramLink = document.querySelector('a[href="https://www.instagram.com/jalantjoseph/"]'); // Add Instagram link if missing
    if (instagramLink) {
        instagramLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("https://www.instagram.com/jalantjoseph/", "_blank"); // Replace with your Instagram profile
        });
    }
});
