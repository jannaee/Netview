import englishJson from '/data/en_US.json';
import pigLatinJson from '/data/la_PG.json';


let english = [englishJson],
    pig = [pigLatinJson];


(function startApplicationJSFiles() {

    // Inject data into dom
    const heroHeading = document.getElementById('heading').innerHTML = englishJson.heading;
    const seriesdescription = (document.getElementById('description').innerHTML = pigLatinJson.description);

    const snippets = englishJson.snippets;
    const quoteContent = document.getElementById('quoteContent').innerHTML = englishJson.quote.text;
    const creator = document.getElementById('quoteAuthor').innerHTML = `- ${englishJson.quote.author}`;

    // creating the gallery of images
    const slideshowCaption = englishJson.gallery[0].text
    const slideshowImage = englishJson.gallery[0].src

    function buildGallery() {
        for (var key in englishJson.gallery) {
            document.getElementById('galleryimg').innerHTML +=
                `<div class="mySlides spacer-40">
                    <img src=${englishJson.gallery[key].src}><br />
                    <p class="spacer-40">${englishJson.gallery[key].text}</p>
                </div>`;
        }


    }

    buildGallery();
    // Functions looping through items
    // english.forEach(function(data, index) {
    //     console.log(index);
    //     console.log(data);
    // });



    // snippets.forEach(
    //     function(snippet, index) {

    //         let windowData = document.getElementById('seriesQuotes').innerHTML = `<p> ${snippet}</p>`;
    //         // console.log(windowData)

    //     });
    // for (const [index, value] of snippets.entries()) {
    //     let row_Data = `<p> ${snippets}</p><br />`;
    //     console.log(row_Data);

    //     break; //closes the iteration

    // }


})();



// TO BE DELETED = Key conversions
// "heading" - seriesHeadline

// "descripition" - "seriesDescription"

// "snippets"- "seriesQuote"

// "locations" - "seriesLocations"

// "video-embed" - "newsVideo"

// "quote" - "quote"
//     "quote.text" - "quoteContent"
//     "quote.author" - "quoteAuthor"

// "gallery" - "slideshow"
//     "gallery.src" - "slideshowImage"
//     "galery.text" - "slideshowCaption"


// "episode-list" - "episode"
//     "season" - "seasonNumber"
//     "name" - "episodeName"
//     "rating" - "episodeRating"


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