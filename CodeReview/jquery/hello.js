$(document).ready(function() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos/" + Math.floor((Math.random() * 5000) + 1)
    }).then(function(data) {
       $("#photo-id").append(data.id);
       $(".photo-title").append(data.title);
       $("img").attr("src", data.url)
    });
});