class Photo {
    constructor(id, title, url) {
        this._id = id;
        this._title = title;
        this._url = url;
    }
    get ID() {
        return this._id;
    }
    get Title() {
        return this._title;
    }
    get URL() {
        return this._url;
    }
}
class DataFetch {
    constructor(url, id) {
        this._url = url + id;
    }
    async photoData() {
        const response = await fetch(this._url);
        const resolve = await response.json();
        return new Photo(resolve.id, resolve.title, resolve.url);
    }
}
new DataFetch("https://jsonplaceholder.typicode.com/photos/", Math.floor((Math.random() * 5000) + 1)).photoData().then(resolve => {
    document.getElementById("photo-id").textContent += resolve.ID;
    document.getElementsByClassName("photo-title")[0].textContent += resolve.Title;
    document.getElementsByTagName("img")[0].setAttribute("src", resolve.URL);
});
