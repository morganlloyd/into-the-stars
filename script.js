// name space 
const nasaApp = {} ;

// api key
nasaApp.key = `80155YNgbn31rGs6cnnnxYwvnc3x2so3la8KYXQh`;

// init method
nasaApp.init = () => {
    nasaApp.setUpEventListeners();

}

// created a method to hold the API fetch info 
nasaApp.getPicture = () => {

    // Nasa API URL
    nasaApp.baseUrl = new URL(`https://api.nasa.gov/planetary/apod`);

        nasaApp.baseUrl.search = new URLSearchParams({
            api_key: nasaApp.key,
            count: 1
        });

    
        fetch(nasaApp.baseUrl)
            .then(response => response.json())
            .then(data => {
                // Using method created in namespace to parse the returned object and preform a bunch of appending 
                nasaApp.showPicture(data)
                console.log(data);
            })
}

// created a method to append data that is passed into it 
nasaApp.showPicture = (arrayOfData) => {

    const pictureContainer = document.querySelector(`ul`);
    pictureContainer.innerHTML = '';
    
    arrayOfData.forEach(img => {
        const pictureAchor = document.createElement(`li`);
        const pictureTitle = document.createElement(`h2`);
        const pictureInfo = document.createElement('p');
        
        pictureTitle.textContent = img.title;
        pictureInfo.textContent = img.explanation;
        
        const picture = document.createElement(`img`);
        picture.src = img.url;
        picture.alt = img.title;
        
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "curious";
        checkbox.value = "moreInfo";
        checkbox.id = "moreInfo";

        const label = document.createElement('label');
        label.htmlFor = "moreInfo";
        label.textContent = "Additional Information";


        pictureAchor.appendChild(pictureTitle);
        pictureAchor.appendChild(picture);
        pictureAchor.appendChild(pictureInfo);
        pictureContainer.appendChild(pictureAchor);
        pictureContainer.appendChild(checkbox);
        pictureContainer.appendChild(label);

        const checkboxListener = document.querySelector(`input[type=checkbox]`);
        checkboxListener.addEventListener(`input`, function(e) {
            const checked = e.target.checked;
            if (checked === true) {
                pictureInfo.style.display = "block";
            } else {
                pictureInfo.style.display = "none";
            }
        });
        
        
        

    });
}

// 
nasaApp.setUpEventListeners = () => {
    const randomButton = document.querySelector(`.randomButton`);
    const imgContainer = document.querySelector(`.nasaImgContainer`);
    

    randomButton.addEventListener(`click`, function(e) {
        nasaApp.getPicture();
        imgContainer.style.display = "block";
        imgContainer.scrollIntoView();
    })

    
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