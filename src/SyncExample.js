import {getJSONSync, addHtmlToPage, addTextToPage, resetPageContent} from './Utils';

function syncExample(e) {
    e.preventDefault();

    resetPageContent();

    try {
        var story = getJSONSync('/api/story.json');
        addHtmlToPage(story.heading);

        story.chapterUrls.forEach(function (chapterUrl) {
            var chapter = getJSONSync(chapterUrl);
            addHtmlToPage(chapter.html);
        });

        addTextToPage("All done");
    } catch (err) {
        addTextToPage("Argh, broken: " + err.message);
    }
}

export default syncExample;