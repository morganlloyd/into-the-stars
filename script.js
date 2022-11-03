// name space 
const nasaApp = {} ;

// api key
nasaApp.key = `80155YNgbn31rGs6cnnnxYwvnc3x2so3la8KYXQh`;

// init method
nasaApp.init = () => {
    nasaApp.setUpEventListeners();
    //nasaApp.getPicture();

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
                console.log(data);
            })
}

nasaApp.showPicture = (arrayOfData) => {

    const pictureContainer = document.querySelector(`ul`);
    pictureContainer.innerHTML = '';
    
    arrayOfData.forEach(img => {
        const pictureAchor = document.createElement(`li`);
        const pictureTitle = document.createElement(`h2`);
        pictureTitle.textContent = img.title;
        const picture = document.createElement(`img`);
        picture.src = img.url;
        picture.alt = img.title;

        pictureAchor.appendChild(pictureTitle);
        pictureAchor.appendChild(picture);
        pictureContainer.appendChild(pictureAchor);
        

    });
    
}
nasaApp.setUpEventListeners = () => {
    const randomButton = document.querySelector(`.randomButton`);
<<<<<<< HEAD

=======
    const imgContainer = document.querySelector('.nasaImgContainer');
>>>>>>> 6bd754a1e0b0fca01361d440716775312ef3c1b5
    randomButton.addEventListener(`click`, function(e) {

        nasaApp.getPicture();
<<<<<<< HEAD

        
        pictureContainer.style.display = "block";

        pictureContainer.scrollIntoView({
            behavior: "smooth"
        });

        

    });
=======
        imgContainer.style.display = "block";
    })
>>>>>>> 6bd754a1e0b0fca01361d440716775312ef3c1b5
};

    

nasaApp.init();



// create namespace

// get data from api
// - api key
// - api url 

// user clicks on button to return random data (title, img) from NASA API
// use that data to append image, title to the page
// add functionality to erase previous data when the button is clicked again

//SG - having the description of the image show on user click, extra styling 

