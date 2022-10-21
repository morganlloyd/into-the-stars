// name space 
const nasaApp = {} ;

// api key
nasaApp.key = `80155YNgbn31rGs6cnnnxYwvnc3x2so3la8KYXQh`;

// init method
nasaApp.init = () => {
    nasaApp.setupEventListeners();
    nasaApp.getPicture();
}

nasaApp.getPicture = () => {
    nasaApp.baseUrl = new URL(`https://api.nasa.gov/planetary/apod`);
    nasaApp.baseUrl.search = new URLSearchParams({
        api_key: nasaApp.key,
        count: 1
    });

    fetch(nasaApp.baseUrl)
        .then(response => response.json())
        .then(data => {
            nasaApp.showPicture(data)
        })
}

nasaApp.showPicture = (arrayOfData) => {
    const pictureContainer = document.querySelector('ul');
    
    arrayOfData.forEach(img => {
        const pictureAnchor = document.createElement('li');
        const picture = document.createElement ('img');
        picture.src = img.url;
        picture.alt = img.title;

        pictureAnchor.appendChild(picture);
        pictureContainer.appendChild(pictureAnchor);

        console.log(img);

    })
}

nasaApp.setupEventListeners = () => {
    const randomButton = document.querySelector('.randomButton');
    randomButton.addEventListener('click', function(e) {
        console.log(e);
    })
}

nasaApp.init();



// create namespace

// get data from api
// - api key
// - api url 

// user clicks on button to return random data (title, img) from NASA API
// use that data to append image, title to the page
// add functionality to erase previous data when the button is clicked again

//SG - having the description of the image show on user click, extra styling 

