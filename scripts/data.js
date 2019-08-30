import en_US from '/data/en_US.json';
import laP_PG from '/data/la_PG.json';

function startApplicationJSFiles(){
    const english_data = en_US;//data from english json files
    const pig_data = laP_PG;
    console.log(english_data);
    const heroHeading = document.getElementById('heading').innerHTML = english_data.heading;
    const seriesdescription = (document.getElementById('description').innerHTML = english_data.description);
    // const snippets = document.getElementById('seriesQuote').innerHTML = english_data.snippets[0];
    const snippets = english_data.snippets;


 		for (let el of snippets ){
			console.log(snippets)
			  break;//closes the iteration
 		}

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