document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos/" + Math.floor((Math.random() * 5000) + 1));
    const resolve = await response.json();
    document.getElementById("photo-id").textContent += resolve.id;
    document.getElementsByClassName("photo-title")[0].textContent += resolve.title;
    document.getElementsByTagName("img")[0].setAttribute("src", resolve.url);
});