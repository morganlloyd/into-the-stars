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
                // Using method created in namespace to parse the returned  object and perform a bunch of appending
                nasaApp.showPicture(data)
                console.log(data);
                console.log(data[0].url);
                // if data[0].media_type = "video" -> then do something to skip the video
            })
}

// created a method to append data that is passed into it 
// created a method to append the data that is passed into it
nasaApp.showPicture = (arrayOfData) => {

    const pictureContainer = document.querySelector(`.appendImg`);
    pictureContainer.innerHTML = '';
    
    arrayOfData.forEach(img => {
        const pictureAchor = document.createElement(`li`);
        const pictureTitle = document.createElement(`h2`);
        const pictureInfo = document.createElement('p');
        
        pictureTitle.textContent = img.title;
        pictureInfo.textContent = img.explanation;
        
        const picture = document.createElement(`img`);
        const video = document.createElement(`iframe`);

        
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "curious";
        checkbox.value = "moreInfo";
        checkbox.id = "moreInfo";
        checkbox.className = "checkboxClass"
        
        const label = document.createElement('label');
        label.htmlFor = "moreInfo";
        label.textContent = "Additional Information";
        
        pictureAchor.appendChild(pictureTitle);
        if (img.media_type === "video") {
            video.src = img.url;
            pictureAchor.appendChild(video);
        } else {
            picture.src = img.url;
            picture.alt = img.title;
            pictureAchor.appendChild(picture);
        }
        pictureAchor.appendChild(pictureInfo);
        pictureContainer.appendChild(pictureAchor);
        pictureContainer.appendChild(checkbox);
        pictureContainer.appendChild(label);

        const arrowDiv = document.createElement('div'); // creating div to hold the arrow 
        arrowDiv.className = 'arrow';
        label.appendChild(arrowDiv);

        const inputContainer = document.createElement('div'); // creating div to hold the label and checkbox to align it using position absolute
        inputContainer.className = 'inputContainer';
        inputContainer.appendChild(checkbox);
        inputContainer.appendChild(label);

        const infoAnchor = document.createElement(`div`); // creating div to anchor the absolute positioning of the input container 
        infoAnchor.className = "infoAnchor";
        infoAnchor.appendChild(picture);
        infoAnchor.appendChild(inputContainer);
        
        pictureAchor.appendChild(pictureTitle); // adding the title to the li
        pictureAchor.appendChild(infoAnchor); // adding the container with the img and checkbox to the li
        pictureAchor.appendChild(pictureInfo); // adding the text description to the li
        pictureContainer.appendChild(pictureAchor); // adding the li with all the info to the ul

        const checkboxListener = document.querySelector('input[type="checkbox"]')

        console.log(checkboxListener);

        checkboxListener.addEventListener(`input`, function(e) {
            const checked = e.target.checked;

            if (checked === true) {
                pictureInfo.style.display = "block";
            } else {
                pictureInfo.style.display = "none";
            }
        })
    });
}

nasaApp.setUpEventListeners = () => {
    const randomButton = document.querySelector(`.randomButton`);
    const imgContainer = document.querySelector('.nasaImgContainer');

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