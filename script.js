document.addEventListener("DOMContentLoaded", () => {
    // Redirect email link
    document.querySelector('a[href="mailto:angelmariaroy621@gmail.com"]').addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "mailto:angelmariaroy621@gmail.com";
    });
   //download cv
    document.getElementById("downloadBtn").addEventListener("click", function() {
        alert("Downloading CV...");
    });
    // Redirect phone number link
    document.querySelector('a[href="tel:+91 8547337059"]').addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "tel:+91 8547337059";
    });

    // Redirect LinkedIn in a new tab
    document.querySelector('a[href="https://www.linkedin.com/in/angel-maria-roy/"]').addEventListener("click", function (event) {
        event.preventDefault();
        window.open("https://www.linkedin.com/in/angel-maria-roy/", "_blank");
    });

    // Redirect github
    let githubLink = document.querySelector('a[href="https://github.com/ANGELMARIAROY2002"]'); 
    if (githubLink) {
        githubLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("https://github.com/ANGELMARIAROY2002", "_blank"); 
        });
    }

    // Redirect Instagram 
    let instagramLink = document.querySelector('a[href="https://www.instagram.com/_.aingel_mariahh._/"]');
    if (instagramLink) {
        instagramLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("https://www.instagram.com/_.aingel_mariahh._/", "_blank"); 
        });
    }
});
