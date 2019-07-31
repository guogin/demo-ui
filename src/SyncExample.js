import {getJSONSync, addHtmlToPage, addTextToPage} from './Utils';

function syncExample(fnStartCallBack, fnCompleteCallBack) {
    fnStartCallBack();

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

    fnCompleteCallBack();
}

export default syncExample;