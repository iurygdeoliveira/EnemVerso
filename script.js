document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.querySelector(".menu-button");
    var sidebar = document.querySelector(".sidebar");
    menuButton.addEventListener("click", function () {
        sidebar.classList.toggle("hide-sidebar");
    });
});
