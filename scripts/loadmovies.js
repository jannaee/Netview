function createUrl(hostname, showId, languageId, jsPath) {
    let url = hostname + "/shows/" + showId + "/lang/" + languageId + "/jsPath/" + jsPath;
    return url;
}

async function fetchAndProcess(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}



/************* Movie Hero Section ****************/

//HERO TITLE
let headingResultsurl = createUrl("http://localhost:3000", "tt4574334", "en_US", "$.heading");
let headingResults = fetchAndProcess(headingResultsurl)
    .then(response => {
        const titleEl = document.getElementById('heading');
        titleEl.innerHTML = response;


    });

// DESCRIPTION
let descriptionUrl = createUrl("http://localhost:3000", "tt4574334", "en_US", "$.description");
let descriptionResults = fetchAndProcess(descriptionUrl)
    .then(response => {
        const descriptionEl = document.getElementById('description');
        descriptionEl.innerHTML = response;
    });




/************* Movie Inspiration Section ****************/
let locationsUrl = createUrl("http://localhost:3000", "tt4574334", "en_US", "$.locations");
  console.log(locationsUrl);
   let locationResults = fetchAndProcess(locationsUrl).then(response => {
       console.log(response);
       const locationEL = document.getElementById('seriesLocations');
       response[0].map(
       	function (location) {
           locationEL.innerHTML += `
               <li>
               	<a href="/images/${location.toString().replace(/\s|,/g, '')}.png">${location.toString()}</a>
               </li>
           `;

           }
       );
   });