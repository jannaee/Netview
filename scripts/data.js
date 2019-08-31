import englishJson from '/data/en_US.json';
import pigLatinJson from '/data/la_PG.json';


let english = [englishJson],
    pig = [pigLatinJson];


document.addEventListener('DOMContentLoaded', function(e) {
    // Files i want to load immediatley
    startApplicationJSFiles();

})


function startApplicationJSFiles() {
    // Inject data into dom
    const heroHeading = document.getElementById('heading').innerHTML = englishJson.heading;
    const seriesdescription = (document.getElementById('description').innerHTML = pigLatinJson.description);
    const snippets = englishJson.snippets;




    // Functions looping through items
    // english.forEach(function(data, index) {
    //     console.log(index);
    //     console.log(data);
    // });



    snippets.forEach(
        function(snippet, index) {

            let windowData = document.getElementById('seriesQuotes').innerHTML = `<p> ${snippet}</p>`;
            // console.log(windowData)

        });
    // for (const [index, value] of snippets.entries()) {
    //     let row_Data = `<p> ${snippets}</p><br />`;
    //     console.log(row_Data);

    //     break; //closes the iteration

    // }


}







// "heading" - seriesHeadline

// "descripition" - "seriesDescription"

// "snippets"- "seriesQuote"

// "locations" - "seriesLocations"

// "video-embed" - "newsVideo"

// "quote" - "quote"
// 	"quote.text" - "quoteContent"
// 	"quote.author" - "quoteAuthor"

// "gallery" - "slideshow"
// 	"gallery.src" - "slideshowImage"
// 	"galery.text" - "slideshowCaption"


// "episode-list" - "episode"
// 	"season" - "seasonNumber"
// 	"name" - "episodeName"
// 	"rating" - "episodeRating"


// What to do with a gallery src that has a reference link?
// 	if there is a source link to it, if not then don't