// Default theme is Dark Mode

(function() {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// Select the download CV button
const downloadCVButton = document.getElementById("download-cv-btn");

// Add click event listener to the button
downloadCVButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Create a temporary anchor element
    const tempLink = document.createElement("a");
    tempLink.href = "CV_Damsara Jayawardana.pdf"; // Specify the path to your CV file
    tempLink.download = "CV_Damsara Jayawardana.pdf"; // Set the file name for download
    tempLink.target = "_blank"; // Open the file in a new tab/window

    // Programmatically trigger the click event on the temporary link
    tempLink.click();

    // Clean up by removing the temporary link element
    document.body.removeChild(tempLink);
});

// Default theme is Light Mode

// (function() {
//     // Add "light-mode" class to the body by default
//     document.body.classList.add("light-mode");

//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         });
//     });

//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     });
// })();

{
    /* <script>
      
    </script> */
}