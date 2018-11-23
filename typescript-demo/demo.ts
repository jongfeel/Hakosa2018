class Photo {
    private _id: number;
    private _title: string;
    private _url: string;
    constructor(id: number, title: string, url: string) {
        this._id = id;
        this._title = title;
        this._url = url;
    }

    get ID() : number {
        return this._id;
    }
    get Title() : string {
        return this._title;
    }
    get URL() : string {
        return this._url;
    }
}

class DataFetch {
    private _url: string;
    private _id: number;
    constructor(url: string, id: number) {
        this._url = url + id;        
    }
    async photoData(): Promise<Photo> {
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