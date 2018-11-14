document.addEventListener("DOMContentLoaded", () => {
    fetch("http://rest-service.guides.spring.io/greeting")
    .then(response => response.json())
    .then(resolve => {
        document.getElementsByClassName("greeting-id")[0].textContent += resolve.id;
        document.getElementsByClassName("greeting-content")[0].textContent += resolve.content;
    });
});