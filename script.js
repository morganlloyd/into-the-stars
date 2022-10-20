// name space 
const app = {} ;

// api key
app.key = `80155YNgbn31rGs6cnnnxYwvnc3x2so3la8KYXQh`;

// init method
app.init = () => {
    
}

    app.baseUrl = new URL(`https://api.nasa.gov/planetary/apod`);

        app.baseUrl.search = new URLSearchParams({
            api_key: app.key,
            date: "2022-10-19"
        });

    
        fetch(app.baseUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })


app.init();



// create namespace

// get data from api
// - api key
// - api url 

// user clicks on button to return random data (title, img) from NASA API
// use that data to append image, title to the page
// add functionality to erase previous data when the button is clicked again

//SG - having the description of the image show on user click, extra styling 

