(function() {
// CALL TO WEB SERVER
    function createUrl(hostname, showId, languageId, jsPath) {
        let url = hostname + "/shows/" + showId + "/lang/" + languageId + "/jsPath/" + jsPath;//dynamically build url
        return url;
    }

    async function fetchAndProcess(url) { //async await for promise to resolve to return data
        let response = await fetch(url);
        let data = await response.json()
        return data;
    }

    let url = createUrl("http://localhost:3000", "tt4574334", "en_US", "$.heading");

    // CREATE COMPONENTS
    let headingResults = fetchAndProcess(url).then(response => {
        const titleEl = document.getElementById('heading');//HEADING


        // titleEl.innerHTML = response.toString();
        titleEl.innerHTML = `<div id="yep">${response}</div>`


    });




})();