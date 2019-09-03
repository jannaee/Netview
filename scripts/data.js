import englishJson from '/data/en_US.json';
import pigLatinJson from '/data/la_PG.json';



(function startApplicationJSFiles(language) {
    if (document.documentElement.lang != "en") {//first check to see if data is pig latin or english
        let language = pigLatinJson; //change the dataset to piglatinjson
        console.log(language);
        window.location.href = "./index-pig.html";

    } else if (document.documentElement.lang == "en") {
        let language = englishJson;
        console.log(language);

        // Inject data into dom
        let heroHeading = document.getElementById('heading').innerHTML = language.heading;
        let seriesdescription = (document.getElementById('description').innerHTML = language.description);

        let snippets = language.snippets;
        let quoteContent = document.getElementById('quoteContent').innerHTML = language.quote.text;
        let creator = document.getElementById('quoteAuthor').innerHTML = `- ${language.quote.author}`;

        // creating the gallery of images
        let slideshowCaption = language.gallery[0].text;
        let slideshowImage = language.gallery[0].src;
        //  locations
        let location = language.locations;
        let seriesSeasonNumbers = language['episode-list'][0].season;


        // function buildEpisodes() {
        //     for (let seriesSeasonNumber in seriesSeasonNumbers) {
        //         console.log(seriesSeasonNumber)
        //     }
        // }

        function buildGallery() {
            for (let key in language.gallery) {
                document.getElementById('galleryimg').innerHTML +=
                    `<div class="quote-shadow spacer-40" style="margin: 40px 0;"><img src=${language.gallery[key].src}><br /><p class="spacer-40">${language.gallery[key].text}</p></div>`;
            }
        }

        function buildMapLocations() {
            for (let [index, value] of location.entries()) {
                let seriesLocation = document.getElementById('seriesLocations').innerHTML += `<ul><li><a href="#">${value}</a></li></ul>`;
                // break;
            }
        }



        // buildEpisodes();
        buildMapLocations();
        buildGallery();
    } else {
        alert('language is not recognized')
    }
})();
