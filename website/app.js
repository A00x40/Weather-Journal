/* Global Variables */

// Added units=metric to get temp in degree celisus
const apiKey = "9484dc0d4e8650f8a8188a135ae1f3ee&units=metric";
const apiUrl = "http://localhost:5000";

const zipCode = document.getElementById("zip"); 
const contentFeeling = document.getElementById("feelings"); 
const generateButton = document.getElementById("generate");

const temp = document.getElementById("temp"); 
const date = document.getElementById("date"); 
const content = document.getElementById("content"); 

// Button Listener
const generate = () => {
    
    apiGetData().then( res => {
        if( res.ok ) {
            res.json().then( apiData => { 
                let data = {
                    temp: apiData.main.temp,
                    date: new Date(),
                    content: contentFeeling.value,
                    zipCode: zipCode.value
                }
            
                postData(data);
            });
        }
        else throw "City not found";
    }).catch(err => {
        alert(err);
        console.log(err);
    });
}

generateButton.addEventListener( "click" , generate );

// Getting Data from Weather app
// Country Code not specified so it defaults to USA
const apiGetData = async () => {
    return await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value},&appid=${apiKey}`);
}

// Post to API
const postData = async (data) => {
    
    let res = await fetch( `${apiUrl}/postData` , {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    try {
        if(res.ok) {
            updateUI();
        } else throw res.status;
    } catch(err) {
        console.log(err);
    }
}

// Update UI
const updateUI = async () => {

    let res = await fetch(`${apiUrl}/getData`);
    
    res.json().then( data => {
        date.innerHTML = "Date : " + data.date;
        if( data.temp )
            temp.innerHTML =  "Temperature : " + data.temp + " °c";
        if( data.content )
            content.innerHTML = data.content;
    }).catch ( err => {
        console.log(err);
    });
}