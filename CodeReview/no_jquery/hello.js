document.addEventListener("DOMContentLoaded", () => {
    fetch("https://jsonplaceholder.typicode.com/photos/" + Math.floor((Math.random() * 5000) + 1))
    .then(response => response.json())
    .then(resolve => {
        document.getElementById("photo-id").textContent += resolve.id;
        document.getElementsByClassName("photo-title")[0].textContent += resolve.title;
        document.getElementsByTagName("img")[0].setAttribute("src", resolve.url);
    });
});