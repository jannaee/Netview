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

// Language swap
// Check to see if the body lang=eng
// if it's not find all html on the page with data type "custom-lang"
//    and translate with the plug translate
//    also find all of the items with data type "json-data"
//    and replace

// What to do with a gallery src that has a reference link?
//     if there is a source link to it, if not then don't



/*
  A pig latin translator taken pretty directly from:
   https://github.com/jombastic/pig-latin/tree/master/js
*/
function translate(language, words) {

    if (language == 'en_US') {
        return words; // assumes english is being passed in //return english data set
    } else if (language != 'la_PG') {
        throw "Translation error: Asked to tranlate an unimplemented language =" + language;
    } else { // Translate into pig latin
        let result = words.split(/\s|\b/)
            .map(function(word) { //split on anything that has spaces or special characters
                word = word.toLowerCase();
                let n = word.search(/[aeiuo]/); //return the poistion of the first vowel
                let ans = ""
                if (n === 0) { //for words that start with a vowel
                    ans = word + "yay";
                } else if (n === -1) { //does not have a vowel
                    ans = word;
                } else { //for words that do not start with a vowel and does not have a vowel.
                    ans = word.substr(n) + word.substr(0, 1) + word.substring(1, n) + "ay";
                }
                //    console.log("ans="+ans);
                return ans;
            });
        // should replace punctuation with a regexp that squeezes out the spaces but this takes care of most of the
        // ugly ones displayed
        let s = result.join(" ").replace(" ,", ",").replace(" .", ".")
        return s;
    }
};