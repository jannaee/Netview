import englishJson from '/data/en_US.json';
import pigLatinJson from '/data/la_PG.json';

function startApplicationJSFiles() {
	let english = [englishJson];
    // Inject data into dom
    const heroHeading = document.getElementById('heading').innerHTML = englishJson.heading;
    const seriesdescription = (document.getElementById('description').innerHTML = pigLatinJson.description);
    const snippets = englishJson.snippets;




    // Functions looping through items
    // english.forEach(function(data, index) {
    //     console.log(index);
    //     console.log(data);
    // });



snippets.forEach(function (snippet, index) {
	console.log(index); // index
	console.log(snippet); // value
});
    // for (const [index, value] of snippets_eng.entries()) {
    //     let row_Data = `<p> ${snippets_eng}</p><br />`;
    //     console.log(row_Data);

    //     break; //closes the iteration

    // }





}


startApplicationJSFiles();


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